
import { useState } from 'react';
import { X, CheckCircle2, Bitcoin, CreditCard, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentModalProps {
  onClose: () => void;
}

export const PaymentModal = ({ onClose }: PaymentModalProps) => {
  const [paymentStep, setPaymentStep] = useState<'select' | 'processing' | 'success' | 'error'>('select');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  
  const handleProceed = () => {
    if (!selectedAmount) return;
    
    setPaymentStep('processing');
    // In a real implementation, this would integrate with Coinbase Commerce API
    // For this demo, we'll simulate the payment process
    setTimeout(() => {
      // Simulate successful payment 90% of the time
      if (Math.random() > 0.1) {
        setPaymentStep('success');
      } else {
        setPaymentStep('error');
      }
    }, 2000);
  };
  
  const minerOptions = [
    { id: 'basic', name: 'Basic Miner', price: 99, power: '1x Mining Power' },
    { id: 'pro', name: 'Pro Miner', price: 299, power: '3.5x Mining Power' },
    { id: 'elite', name: 'Elite Miner', price: 699, power: '8x Mining Power' },
  ];

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
                    <span className="text-white font-mono text-sm">txn_....{Math.random().toString(36).substring(2, 8)}</span>
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
