
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from 'sonner';

// Payment modal props type
interface PaymentModalProps {
  onClose: () => void;
  simulationMode?: boolean;
  paymentCurrency?: 'USDC' | 'BTC' | 'ETH';
}

// Enumerated payment stages
enum PaymentStage {
  INITIAL = 'initial',
  PROCESSING = 'processing',
  AWAITING_PAYMENT = 'awaiting_payment',
  COMPLETED = 'completed',
  ERROR = 'error'
}

// Define the charge status type
type ChargeStatus = 'NEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'UNRESOLVED' | 'RESOLVED' | 'CANCELED' | 'CONFIRMED';

export function PaymentModal({ onClose, simulationMode = false, paymentCurrency = 'USDC' }: PaymentModalProps) {
  // State management
  const [stage, setStage] = useState<PaymentStage>(PaymentStage.INITIAL);
  const [chargeId, setChargeId] = useState<string | null>(null);
  const [chargeUrl, setChargeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Changed the type from number to NodeJS.Timeout | null to handle both setTimeout and setInterval
  const [pollInterval, setPollInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Price settings - Updated to $495 to maintain consistency
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
        preferred_currency: paymentCurrency, // Add preferred currency option
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
        
        // Store the timeout ID directly without type casting
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
        
        // Store the interval ID directly
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
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0F1724] border border-white/10 rounded-lg shadow-xl w-full max-w-md overflow-hidden"
        >
          {/* Modal header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h3 className="text-xl font-bold text-white">
              {simulationMode ? "Mint a Block (Simulation)" : "Mint a Block"}
            </h3>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Modal content - varies based on payment stage */}
          <div className="p-6">
            {stage === PaymentStage.INITIAL && (
              <div className="space-y-6">
                <div className="bg-[#121C2D] border border-white/5 rounded-lg p-4">
                  <p className="text-white/70 mb-2">Total price:</p>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">${usdPrice} USD</div>
                    <div className="text-sm text-white/60">
                      {paymentCurrency === 'USDC' ? 
                        '≈ ' + usdPrice + ' USDC' : 
                        paymentCurrency === 'BTC' ? 
                          '≈ ' + blockPrice + ' BTC' : 
                          '≈ ETH equivalent'}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-white">You'll receive:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-neon-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">1 MineChain Stable Block</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-neon-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">USDC Rewards & Bonus BTC Distributions</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-neon-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">Access to MineChain Innovation Hub</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  onClick={initiatePayment}
                  className="w-full bg-electric-orange hover:bg-electric-orange/90 text-white crypto-glow"
                >
                  {simulationMode ? 
                    "Simulate Payment" : 
                    `Pay with ${paymentCurrency === 'USDC' ? 'USDC' : paymentCurrency}`}
                </Button>
                
                <p className="text-xs text-center text-white/50">
                  {simulationMode ? 
                    "Simulation mode - no real payment will be processed" : 
                    "Secure payment processing by Coinbase Commerce"}
                </p>
              </div>
            )}
            
            {stage === PaymentStage.PROCESSING && (
              <div className="text-center py-8">
                <Loader2 size={48} className="animate-spin mx-auto mb-4 text-neon-cyan" />
                <p className="text-white/70">Preparing your payment...</p>
              </div>
            )}
            
            {stage === PaymentStage.AWAITING_PAYMENT && chargeUrl && (
              <div className="space-y-6">
                <div className="text-center py-4">
                  <div className="mb-4">
                    <svg className="mx-auto w-16 h-16 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">Awaiting Payment</h4>
                  <p className="text-white/70 mt-2">
                    {simulationMode 
                      ? "This is a simulation. Click the button below to simulate payment completion." 
                      : `Complete your purchase using ${paymentCurrency} via Coinbase payment window`}
                  </p>
                </div>
                
                {simulationMode ? (
                  <Button 
                    onClick={handleSimulatedPayment}
                    className="w-full bg-neon-cyan hover:bg-neon-cyan/90 text-white"
                  >
                    Simulate Successful Payment
                  </Button>
                ) : (
                  <Button 
                    onClick={() => window.open(chargeUrl, '_blank')}
                    className="w-full bg-neon-cyan hover:bg-neon-cyan/90 text-white"
                  >
                    Open Payment Window
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                )}
                
                <div className="bg-[#121C2D] border border-white/5 rounded-lg p-4 text-sm text-white/70">
                  <p>
                    <span className="font-medium text-white">
                      {simulationMode ? "Note:" : "Tip:"}
                    </span> {simulationMode 
                      ? "This is a simulation for testing purposes only." 
                      : "Keep this window open to automatically detect when your payment is complete."}
                  </p>
                </div>
              </div>
            )}
            
            {stage === PaymentStage.COMPLETED && (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                  <Check size={32} className="text-green-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {simulationMode ? "Simulation Completed!" : "Payment Complete!"}
                  </h4>
                  <p className="text-white/70 mt-2">
                    Your MineChain Block is now ready
                  </p>
                </div>
                <Button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="w-full bg-electric-orange hover:bg-electric-orange/90 text-white"
                >
                  View My Dashboard
                </Button>
              </div>
            )}
            
            {stage === PaymentStage.ERROR && (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                  <AlertTriangle size={32} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Payment Error</h4>
                  <p className="text-white/70 mt-2">
                    {error || "There was an error processing your payment"}
                  </p>
                </div>
                <Button 
                  onClick={initiatePayment}
                  className="w-full bg-electric-orange hover:bg-electric-orange/90 text-white"
                >
                  Try Again
                </Button>
                {!simulationMode && (
                  <Button 
                    onClick={() => {
                      setStage(PaymentStage.INITIAL);
                      setError(null);
                      setChargeId(null);
                      setChargeUrl(null);
                    }}
                    variant="outline"
                    className="w-full text-white"
                  >
                    Start Over
                  </Button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
