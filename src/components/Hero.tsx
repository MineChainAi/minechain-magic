
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PaymentModal } from './PaymentModal';
import { Zap, Server, Coins, Shield } from 'lucide-react';

const Hero = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <section className="min-h-screen w-full pt-28 pb-16 relative flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cosmic-purple/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neon-cyan/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-net" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="0.5" fill="#29B6F6" />
                <circle cx="15" cy="15" r="0.5" fill="#29B6F6" />
                <circle cx="45" cy="15" r="0.5" fill="#29B6F6" />
                <circle cx="15" cy="45" r="0.5" fill="#29B6F6" />
                <circle cx="45" cy="45" r="0.5" fill="#29B6F6" />
                <path d="M30,30 L15,15" stroke="#29B6F6" strokeWidth="0.2" opacity="0.5" />
                <path d="M30,30 L45,15" stroke="#29B6F6" strokeWidth="0.2" opacity="0.5" />
                <path d="M30,30 L15,45" stroke="#29B6F6" strokeWidth="0.2" opacity="0.5" />
                <path d="M30,30 L45,45" stroke="#29B6F6" strokeWidth="0.2" opacity="0.5" />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 leading-tight">
              Own a Block. Mine AI. Earn Rewards.
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8">
              MineChain operates full-stack AI miners, allowing you to own a share of enterprise-grade AI compute and earn stable USDC rewards—no hardware, no setup, just passive income.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-start gap-4 mb-10"
            >
              <Button
                onClick={() => setIsPaymentModalOpen(true)}
                className="px-8 py-6 text-lg font-medium bg-electric-orange hover:bg-electric-orange/90 text-white rounded-md border-none hover:shadow-lg hover:shadow-electric-orange/20 transition-all duration-300"
              >
                Buy a Block Now
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg font-medium bg-transparent border border-cosmic-purple/30 text-white hover:bg-cosmic-purple/10 rounded-md transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>

            {/* What is MineChain */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-3">What is MineChain?</h2>
              <p className="text-white/70 mb-4">
                MineChain is a decentralized AI mining network powered by full-stack AI miners. By tokenizing AI compute resources, we offer a frictionless way to earn USDC rewards while fueling AI innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                    <Server size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Enterprise-grade GPU compute for AI workloads</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                    <Coins size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">100% passive earnings—no maintenance required</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                    <Shield size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Built on Cosmos for scalability & interoperability</p>
                  </div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 to-neon-cyan/20 rounded-3xl animate-glow-pulse"></div>
            <div className="absolute inset-2 bg-midnight-navy/80 backdrop-blur-sm rounded-3xl border border-cosmic-purple/20 overflow-hidden">
              {/* Circuit pattern */}
              <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0,50 L100,50 M50,0 L50,100" stroke="#29B6F6" strokeWidth="0.5" opacity="0.5" />
                    <path d="M25,25 L75,75 M75,25 L25,75" stroke="#29B6F6" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="50" cy="50" r="8" fill="none" stroke="#29B6F6" strokeWidth="0.5" opacity="0.6" />
                    <circle cx="50" cy="50" r="16" fill="none" stroke="#29B6F6" strokeWidth="0.5" opacity="0.4" />
                    <circle cx="50" cy="50" r="24" fill="none" stroke="#29B6F6" strokeWidth="0.5" opacity="0.2" />
                  </pattern>
                </svg>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
              </div>
              
              {/* MineChain AI Miner Visualization */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full h-full relative rounded-xl overflow-hidden border border-cosmic-purple/30 group">
                  {/* The futuristic miner image */}
                  <img 
                    src="/lovable-uploads/dad08f3d-6bd9-4c95-8728-83fb420e7863.png" 
                    alt="MineChain AI Miner" 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay with scanning effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-navy/90"></div>
                  
                  {/* Laser scan line effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-2 bg-electric-orange/60 blur-sm absolute top-0 animate-[scanline_4s_linear_infinite]"></div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-midnight-navy/80 backdrop-blur-sm border-t border-cosmic-purple/30">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                        <p className="text-xs font-mono text-neon-cyan">ONLINE</p>
                      </div>
                      <p className="text-xs text-white/70 font-mono">MineChain FullStack-01</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-electric-orange animate-pulse"></div>
                        <p className="text-xs font-mono text-electric-orange">MINING</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* HUD elements */}
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                    <div className="px-2 py-1 bg-midnight-navy/70 backdrop-blur-sm rounded-md border border-neon-cyan/30">
                      <p className="text-xs font-mono text-neon-cyan">GPU LOAD: 98.7%</p>
                    </div>
                    <div className="px-2 py-1 bg-midnight-navy/70 backdrop-blur-sm rounded-md border border-electric-orange/30">
                      <p className="text-xs font-mono text-electric-orange">AI MODEL: ACTIVE</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Why MineChain */}
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
              <h3 className="text-xl font-semibold text-white mb-2">AI Compute Power, Tokenized</h3>
              <p className="text-white/70">Own a share of enterprise-grade AI mining infrastructure without any technical expertise.</p>
            </div>
            
            <div className="p-6 rounded-xl glass border border-cosmic-purple/20">
              <Coins size={32} className="text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">USDC Earnings, No Volatility</h3>
              <p className="text-white/70">Receive predictable, stable income in USDC without worrying about cryptocurrency price swings.</p>
            </div>
            
            <div className="p-6 rounded-xl glass border border-cosmic-purple/20">
              <Zap size={32} className="text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Built on Cosmos</h3>
              <p className="text-white/70">Leverage the scalability and interoperability of the Cosmos ecosystem for future-proof infrastructure.</p>
            </div>
            
            <div className="p-6 rounded-xl glass border border-cosmic-purple/20">
              <Shield size={32} className="text-neon-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">100% Hands-Free</h3>
              <p className="text-white/70">We manage all hardware, software, and maintenance. You simply collect your rewards.</p>
            </div>
          </div>
        </motion.div>

        {/* Roadmap Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 border-t border-cosmic-purple/20 pt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Roadmap Preview</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[20px] w-1 bg-gradient-to-b from-electric-orange/70 via-cosmic-purple/70 to-neon-cyan/70"></div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-electric-orange flex items-center justify-center relative z-10 mr-4">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phase 1: Launch AI compute marketplace</h3>
                    <p className="text-white/70">NFT-backed compute blocks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cosmic-purple flex items-center justify-center relative z-10 mr-4">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phase 2: Deploy MineChain blockchain</h3>
                    <p className="text-white/70">Cosmos-based AI infrastructure</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-cyan flex items-center justify-center relative z-10 mr-4">
                    <span className="font-bold text-midnight-navy">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phase 3: Launch $MINE token</h3>
                    <p className="text-white/70">250M supply, DeFi & staking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-cyan/80 flex items-center justify-center relative z-10 mr-4">
                    <span className="font-bold text-midnight-navy">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phase 4: Scale AI mining pools</h3>
                    <p className="text-white/70">Decentralized AI compute scaling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
