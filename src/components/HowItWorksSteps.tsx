
import { motion } from 'framer-motion';
import { ShoppingCart, Server, Coins } from 'lucide-react';

const HowItWorksSteps = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 bg-[#050A12]/70 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 text-neon-cyan mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white gold-text">
              How It Works
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Join the decentralized AI revolution in three simple steps
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-neon-cyan/50 via-electric-orange/50 to-cosmic-purple/50 hidden md:block"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <span className="text-sm font-semibold text-neon-cyan mb-2 block">Step 1</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">Purchase a Block</h3>
                  <p className="text-white/70">
                    Buy a MineChain NFT, which represents your share of AI compute power using USDC through Coinbase Commerce.
                  </p>
                </div>
                <div className="md:w-12 relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-neon-cyan flex items-center justify-center relative z-10 crypto-glow">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 glass p-6 rounded-xl md:mt-0 mt-6 border border-white/5 hover:border-neon-cyan/20 transition-all duration-300">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-neon-cyan" />
                      <span>NFT-based AI compute ownership</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-neon-cyan" />
                      <span>USDC-only payments for stability</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-neon-cyan" />
                      <span>Secure transactions via Coinbase Commerce</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 glass p-6 rounded-xl order-last md:order-first md:mt-0 mt-6 border border-white/5 hover:border-electric-orange/20 transition-all duration-300">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-electric-orange" />
                      <span>Enterprise-grade AI infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-electric-orange" />
                      <span>Optimized for high-value AI workloads</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-electric-orange" />
                      <span>Zero maintenance or technical knowledge needed</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-12 relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-electric-orange flex items-center justify-center relative z-10 crypto-glow">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                  <span className="text-sm font-semibold text-electric-orange mb-2 block">Step 2</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">AI Workloads Run</h3>
                  <p className="text-white/70">
                    Your block is part of MineChain's enterprise AI mining infrastructure, processing AI workloads and generating real revenue.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <span className="text-sm font-semibold text-cosmic-purple mb-2 block">Step 3</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">Earn Rewards in USDC</h3>
                  <p className="text-white/70">
                    Receive USDC payouts directly to your wallet as your share of AI mining profits, with no volatility risk.
                  </p>
                </div>
                <div className="md:w-12 relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-cosmic-purple flex items-center justify-center relative z-10 crypto-glow">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 glass p-6 rounded-xl md:mt-0 mt-6 border border-white/5 hover:border-cosmic-purple/20 transition-all duration-300">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cosmic-purple" />
                      <span>Stable USDC rewards, no crypto volatility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cosmic-purple" />
                      <span>Predictable earnings from AI compute</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cosmic-purple" />
                      <span>Passive income with zero maintenance</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
