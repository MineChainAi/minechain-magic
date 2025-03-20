import { useState, useEffect } from 'react';
import { X, CheckCircle2, Bitcoin, CreditCard, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface PaymentModalProps {
  onClose: () => void;
}

// Type for Coinbase Commerce charges
interface CoinbaseCharge {
  id: string;
  hosted_url: string;
  code: string;
}

export const PaymentModal = ({ onClose }: PaymentModalProps) => {
  const [paymentStep, setPaymentStep] = useState<'select' | 'processing' | 'success' | 'error'>('select');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [chargeId, setChargeId] = useState<string | null>(null);
  const [coinbaseWindow, setCoinbaseWindow] = useState<Window | null>(null);
  
  const minerOptions = [
    { id: 'basic', name: 'Basic Miner', price: 99, power: '1x Mining Power' },
    { id: 'pro', name: 'Pro Miner', price: 299, power: '3.5x Mining Power' },
    { id: 'elite', name: 'Elite Miner', price: 699, power: '8x Mining Power' },
  ];

  // Function to create a Coinbase Commerce charge
  const createCharge = async (product: string, priceUSD: number) => {
    setPaymentStep('processing');
    
    try {
      // In production, call the Netlify function to create a charge
      const response = await fetch('/.netlify/functions/create-charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: product,
          description: `MineChain.ai - ${product}`,
          pricing_type: 'fixed_price',
          local_price: {
            amount: priceUSD,
            currency: 'USD'
          },
          redirect_url: window.location.origin + '/dashboard?success=true',
          cancel_url: window.location.origin + '/dashboard?success=false',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create payment charge');
      }
      
      const charge = await response.json();
      setChargeId(charge.id);
      return charge;
    } catch (error) {
      console.error('Error creating charge:', error);
      setPaymentStep('error');
      toast.error('Failed to create payment. Please try again.');
      return null;
    }
  };
  
  // Function to handle the payment flow
  const handleProceed = async () => {
    if (!selectedAmount) return;
    
    const selectedOption = minerOptions.find(option => option.price === selectedAmount);
    if (!selectedOption) return;
    
    // For development/preview environments without the Netlify function setup yet
    if (window.location.hostname === 'localhost' || window.location.hostname.includes('preview')) {
      // Simulate the payment process in development
      setPaymentStep('processing');
      setTimeout(() => {
        if (Math.random() > 0.1) {
          setPaymentStep('success');
          toast.success('Demo payment successful!');
        } else {
          setPaymentStep('error');
          toast.error('Demo payment failed. Please try again.');
        }
      }, 2000);
      return;
    }
    
    const charge = await createCharge(selectedOption.name, selectedOption.price);
    
    if (charge) {
      // Open the Coinbase Commerce hosted page
      const coinbaseWindow = window.open(charge.hosted_url, '_blank');
      setCoinbaseWindow(coinbaseWindow);
      
      // Start polling for payment status
      checkPaymentStatus(charge.id);
    }
  };
  
  // Check payment status
  const checkPaymentStatus = async (id: string) => {
    try {
      const checkStatus = async () => {
        const response = await fetch(`/.netlify/functions/check-charge?id=${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to check payment status');
        }
        
        const data = await response.json();
        
        if (data.status === 'COMPLETED' || data.status === 'RESOLVED') {
          setPaymentStep('success');
          if (coinbaseWindow) {
            coinbaseWindow.close();
          }
          toast.success('Payment completed successfully!');
          return true;
        } else if (data.status === 'CANCELED' || data.status === 'EXPIRED') {
          setPaymentStep('error');
          toast.error('Payment was canceled or expired.');
          return true;
        }
        
        return false;
      };
      
      // Poll every 3 seconds until we get a final status
      const interval = setInterval(async () => {
        const isDone = await checkStatus().catch(() => false);
        if (isDone) {
          clearInterval(interval);
        }
      }, 3000);
      
      // Clear interval after 10 minutes (maximum time to wait)
      setTimeout(() => clearInterval(interval), 10 * 60 * 1000);
      
    } catch (error) {
      console.error('Error checking payment status:', error);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="relative w-full max-w-xl bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <AnimatePresence mode="wait">
          {paymentStep === 'select' && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Select Your Virtual Miner</h2>
              <p className="text-white/70 mb-6">Choose the virtual miner that fits your investment strategy.</p>
              
              <div className="space-y-4 mb-8">
                {minerOptions.map((option) => (
                  <div 
                    key={option.id}
                    className={`p-4 border rounded-xl transition-all cursor-pointer ${
                      selectedAmount === option.price 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-white/10 hover:border-white/30'
                    }`}
                    onClick={() => setSelectedAmount(option.price)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-white">{option.name}</h3>
                        <p className="text-sm text-white/70">{option.power}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-white">${option.price}</p>
                        <p className="text-xs text-white/70">One-time purchase</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button
                  onClick={handleProceed}
                  disabled={!selectedAmount}
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md border-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Payment
                </Button>
                <p className="text-center text-xs text-white/50">
                  Powered by Coinbase Commerce. Supports USDC, BTC, ETH, SOL, DOGE and more.
                </p>
              </div>
            </motion.div>
          )}
          
          {paymentStep === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 flex flex-col items-center justify-center"
              style={{ minHeight: '400px' }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 text-center">Processing Payment</h2>
              <p className="text-white/70 text-center mb-4">
                Please wait while we process your transaction...
              </p>
              <div className="flex items-center space-x-2 text-white/50 text-sm">
                <Bitcoin className="w-4 h-4" />
                <span>Connecting to Coinbase Commerce</span>
              </div>
            </motion.div>
          )}
          
          {paymentStep === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 flex flex-col items-center justify-center"
              style={{ minHeight: '400px' }}
            >
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 text-center">Payment Successful!</h2>
              <p className="text-white/70 text-center mb-8">
                Your virtual miner has been successfully purchased.
              </p>
              <div className="space-y-4 w-full max-w-sm">
                <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Amount Paid</span>
                    <span className="text-white font-bold">${selectedAmount}</span>
                  </div>
                </div>
                <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Transaction ID</span>
                    <span className="text-white font-mono text-sm">txn_....{chargeId?.slice(-6) || Math.random().toString(36).substring(2, 8)}</span>
                  </div>
                </div>
                <Button
                  onClick={onClose}
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md border-none"
                >
                  View My Miner Dashboard
                </Button>
              </div>
            </motion.div>
          )}
          
          {paymentStep === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 flex flex-col items-center justify-center"
              style={{ minHeight: '400px' }}
            >
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 text-center">Payment Failed</h2>
              <p className="text-white/70 text-center mb-8">
                There was an issue processing your payment. Please try again.
              </p>
              <div className="space-y-4 w-full max-w-sm">
                <Button
                  onClick={() => setPaymentStep('select')}
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md border-none"
                >
                  Try Again
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full py-6 bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-md"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
