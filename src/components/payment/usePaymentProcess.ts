
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { PaymentStage, ChargeStatus } from './types';

interface UsePaymentProcessProps {
  simulationMode: boolean;
  paymentCurrency: 'USDC' | 'BTC' | 'ETH';
}

export const usePaymentProcess = ({ simulationMode, paymentCurrency }: UsePaymentProcessProps) => {
  const [stage, setStage] = useState<PaymentStage>(PaymentStage.INITIAL);
  const [chargeId, setChargeId] = useState<string | null>(null);
  const [chargeUrl, setChargeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pollInterval, setPollInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Price settings
  const blockPrice = 0.015; // Price in BTC
  const usdPrice = 495; // USD equivalent
  
  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollInterval) {
        clearTimeout(pollInterval);
      }
    };
  }, [pollInterval]);
  
  // Create a payment charge
  const initiatePayment = async () => {
    setStage(PaymentStage.PROCESSING);
    
    if (simulationMode) {
      // Simulate a charge creation delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setChargeId('sim_' + Math.random().toString(36).substring(2, 15));
      setChargeUrl('#simulation');
      setStage(PaymentStage.AWAITING_PAYMENT);
      toast.info("Simulation mode active", {
        description: "Using simulated payments instead of real Coinbase Commerce"
      });
      return;
    }
    
    try {
      const response = await axios.post('/api/create-charge', {
        name: "MineChain Block Purchase",
        description: "Mint of Stable Block on MineChain",
        pricing_type: "fixed_price",
        local_price: {
          amount: usdPrice.toString(),
          currency: "USD"
        },
        preferred_currency: paymentCurrency,
        redirect_url: window.location.origin + "/dashboard",
        cancel_url: window.location.origin,
        customer_id: localStorage.getItem('userId') || 'anonymous'
      });
      
      setChargeId(response.data.id);
      setChargeUrl(response.data.hosted_url);
      setStage(PaymentStage.AWAITING_PAYMENT);
      
      // Start polling for status updates
      pollPaymentStatus(response.data.id);
    } catch (err) {
      console.error("Error creating charge:", err);
      const errorMessage = axios.isAxiosError(err) && err.response?.data?.message
        ? err.response.data.message
        : "Failed to create payment. Please try again or use simulation mode.";
      
      setError(errorMessage);
      setStage(PaymentStage.ERROR);
      toast.error("Payment error", {
        description: errorMessage
      });
    }
  };
  
  // Poll for payment status updates
  const pollPaymentStatus = async (id: string) => {
    try {
      if (simulationMode) {
        // Simulate payment completion after 5 seconds
        const timeout = setTimeout(() => {
          setStage(PaymentStage.COMPLETED);
          toast.success("Simulation completed", {
            description: "Your simulated payment has been processed successfully"
          });
        }, 5000);
        
        setPollInterval(timeout);
        return;
      }
      
      const checkStatus = async () => {
        try {
          const response = await axios.get(`/api/check-charge?id=${id}`);
          console.log("Payment status:", response.data);
          
          const status = response.data.status as ChargeStatus;
          
          if (status === 'COMPLETED' || 
              status === 'CONFIRMED' || 
              status === 'RESOLVED') {
            setStage(PaymentStage.COMPLETED);
            toast.success("Payment confirmed", {
              description: "Your payment has been processed successfully"
            });
            return true;
          } else if (status === 'EXPIRED' || status === 'CANCELED') {
            setError(`Payment ${status.toLowerCase()}. Please try again.`);
            setStage(PaymentStage.ERROR);
            return true;
          }
          return false;
        } catch (err) {
          console.error("Error checking payment status:", err);
          return false;
        }
      };
      
      // Check immediately
      const isComplete = await checkStatus();
      if (!isComplete) {
        // Then poll every 3 seconds
        const interval = setInterval(async () => {
          const complete = await checkStatus();
          if (complete) clearInterval(interval);
        }, 3000);
        
        setPollInterval(interval);
        
        // Cleanup interval after 10 minutes
        setTimeout(() => {
          if (pollInterval) clearInterval(pollInterval as NodeJS.Timeout);
          if (stage === PaymentStage.AWAITING_PAYMENT) {
            setError("Payment session timed out. Please try again.");
            setStage(PaymentStage.ERROR);
          }
        }, 10 * 60 * 1000);
      }
    } catch (err) {
      console.error("Error in poll payment status:", err);
    }
  };
  
  // Simulation handler for testing without Coinbase
  const handleSimulatedPayment = () => {
    if (simulationMode && stage === PaymentStage.AWAITING_PAYMENT) {
      setStage(PaymentStage.COMPLETED);
      toast.success("Simulation completed", {
        description: "Your simulated payment has been processed successfully"
      });
    }
  };

  // Reset function to start over
  const resetPayment = () => {
    setStage(PaymentStage.INITIAL);
    setError(null);
    setChargeId(null);
    setChargeUrl(null);
  };
  
  return {
    stage,
    chargeId,
    chargeUrl,
    error,
    blockPrice,
    usdPrice,
    initiatePayment,
    handleSimulatedPayment,
    resetPayment
  };
};
