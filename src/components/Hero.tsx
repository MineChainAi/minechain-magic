
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PaymentModal } from './PaymentModal';

const Hero = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <section className="min-h-screen w-full pt-28 pb-16 relative flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-net" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="0.5" fill="#fff" />
                <circle cx="15" cy="15" r="0.5" fill="#fff" />
                <circle cx="45" cy="15" r="0.5" fill="#fff" />
                <circle cx="15" cy="45" r="0.5" fill="#fff" />
                <circle cx="45" cy="45" r="0.5" fill="#fff" />
                <path d="M30,30 L15,15" stroke="#fff" strokeWidth="0.2" opacity="0.5" />
                <path d="M30,30 L45,15" stroke="#fff" strokeWidth="0.2" opacity="0.5" />
                <path d="M30,30 L15,45" stroke="#fff" strokeWidth="0.2" opacity="0.5" />
                <path d="M30,30 L45,45" stroke="#fff" strokeWidth="0.2" opacity="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-net)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 text-blue-300 mb-4">
              Web3 × AI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 leading-tight"
          >
            Decentralized AI Mining & Compute Leasing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Own virtual miners, earn AI rewards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              onClick={() => setIsPaymentModalOpen(true)}
              className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md border-none hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-md transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center space-x-8"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-white">10K+</p>
              <p className="text-sm text-white/60">Virtual Miners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">$5M+</p>
              <p className="text-sm text-white/60">Rewards Distributed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-sm text-white/60">AI Mining</p>
            </div>
          </motion.div>
        </div>
      </div>

      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
    </section>
  );
};

export default Hero;
