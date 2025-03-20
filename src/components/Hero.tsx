
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PaymentModal } from './PaymentModal';
import { Zap, Server, Coins } from 'lucide-react';

const Hero = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <section className="min-h-screen w-full pt-28 pb-16 relative flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
        
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 text-yellow-300 mb-4">
              AI Mining + Web3
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100 leading-tight">
              Own a Full-Stack AI Miner & Earn Rewards
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8">
              Mine AI workloads, get paid in USDC & $MINE. No hardware required.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-start gap-4 mb-10"
            >
              <Button
                onClick={() => setIsPaymentModalOpen(true)}
                className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black rounded-md border-none hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
              >
                Buy a Full-Stack Miner
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-md transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Server size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Setup Needed</h3>
                  <p className="text-sm text-white/60">We handle hardware, you earn.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Zap size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AI-Powered Mining</h3>
                  <p className="text-sm text-white/60">Compute workloads fuel AI & DeFi.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Coins size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">USDC & $MINE Payouts</h3>
                  <p className="text-sm text-white/60">Stable rewards, real ownership.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* AI Miner Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 rounded-3xl animate-pulse-slow"></div>
            <div className="absolute inset-2 bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              {/* Circuit pattern */}
              <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0,50 L100,50 M50,0 L50,100" stroke="#ffb700" strokeWidth="0.5" opacity="0.5" />
                    <path d="M25,25 L75,75 M75,25 L25,75" stroke="#ffb700" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="50" cy="50" r="8" fill="none" stroke="#ffb700" strokeWidth="0.5" opacity="0.6" />
                    <circle cx="50" cy="50" r="16" fill="none" stroke="#ffb700" strokeWidth="0.5" opacity="0.4" />
                    <circle cx="50" cy="50" r="24" fill="none" stroke="#ffb700" strokeWidth="0.5" opacity="0.2" />
                  </pattern>
                </svg>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
              </div>
              
              {/* Server component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-2/3 bg-black/60 rounded-lg border border-yellow-500/20 p-4 flex flex-col">
                  {/* Server lights */}
                  <div className="flex justify-between mb-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Server slots */}
                  <div className="flex-1 flex flex-col justify-around">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-full h-6 bg-gray-900 rounded border border-white/5 flex items-center px-2">
                        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded">
                          <div 
                            className="h-full bg-yellow-400 rounded animate-pulse" 
                            style={{ 
                              width: `${Math.random() * 100}%`,
                              animationDuration: `${2 + Math.random() * 2}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Server name */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-yellow-400 font-mono">MineChain FullStack-01</p>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
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

      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
    </section>
  );
};

export default Hero;
