import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PaymentModal } from './PaymentModal';
import { Zap, Server, Coins, Shield, ArrowRight, Gem } from 'lucide-react';

const Hero = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <section className="min-h-screen w-full pt-28 pb-16 relative flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cosmic-purple/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neon-cyan/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 leading-tight">
              Own a Block. Mine AI. Earn Rewards.
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8">
              MineChain operates full-stack AI miners, allowing you to own a share of enterprise-grade AI compute and earn stable USDC rewards.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-start gap-4 mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="px-8 py-6 text-lg font-bold bg-[#8B5CF6] text-white rounded-md border-none shadow-lg shadow-cosmic-purple/30 transition-all duration-300 hover:bg-cosmic-purple"
                >
                  <Gem className="mr-2 h-5 w-5 text-white" />
                  BUY A BLOCK NOW
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg font-medium bg-transparent border border-cosmic-purple/30 text-white hover:bg-cosmic-purple/10 rounded-md transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-3">What is MineChain?</h2>
              <p className="text-white/70 mb-4">
                MineChain is a decentralized AI mining network powered by full-stack AI miners. By tokenizing AI compute resources, we offer a frictionless way to earn USDC rewards.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                    <Server size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Enterprise-grade GPU compute</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                    <Coins size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">100% passive earnings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                    <Shield size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Built on Cosmos blockchain</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 to-neon-cyan/20 rounded-3xl animate-glow-pulse"></div>
            <div className="absolute inset-2 bg-midnight-navy/80 backdrop-blur-sm rounded-3xl border border-cosmic-purple/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full h-full relative rounded-xl overflow-hidden border border-cosmic-purple/30 group">
                  <img 
                    src="/lovable-uploads/dad08f3d-6bd9-4c95-8728-83fb420e7863.png" 
                    alt="MineChain AI Miner" 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-navy/90"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-midnight-navy/80 backdrop-blur-sm border-t border-cosmic-purple/30">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                        <p className="text-xs font-mono text-neon-cyan">ONLINE</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-electric-orange animate-pulse"></div>
                        <p className="text-xs font-mono text-electric-orange">MINING</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 border-t border-cosmic-purple/20 pt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why MineChain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl glass border border-cosmic-purple/20">
              <Server size={32} className="text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Compute Power</h3>
              <p className="text-white/70">Own a share of enterprise-grade AI mining infrastructure.</p>
            </div>
            
            <div className="p-6 rounded-xl glass border border-cosmic-purple/20">
              <Coins size={32} className="text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">USDC Earnings</h3>
              <p className="text-white/70">Receive stable income in USDC without cryptocurrency volatility.</p>
            </div>
            
            <div className="p-6 rounded-xl glass border border-cosmic-purple/20">
              <Zap size={32} className="text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Built on Cosmos</h3>
              <p className="text-white/70">Leverage the scalability of the Cosmos ecosystem.</p>
            </div>
            
            <div className="p-6 rounded-xl glass border border-cosmic-purple/20">
              <Shield size={32} className="text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">100% Hands-Free</h3>
              <p className="text-white/70">We manage all hardware and software. You collect rewards.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
    </section>
  );
};

export default Hero;
