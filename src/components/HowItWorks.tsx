
import { motion } from 'framer-motion';
import { ShoppingCart, Server, Coins } from 'lucide-react';

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-24 bg-black/30 relative">
      <div className="absolute inset-0 bg-neural-pattern opacity-50 mix-blend-overlay pointer-events-none"></div>
      
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
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 text-blue-300 mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Join the decentralized AI revolution in three simple steps
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600/50 via-indigo-600/50 to-purple-600/50 hidden md:block"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <span className="text-sm font-semibold text-blue-400 mb-2 block">Step 1</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">Purchase a Block</h3>
                  <p className="text-white/70">
                    Buy a MineChain NFT, which represents your share of AI compute power using USDC through Coinbase Commerce.
                  </p>
                </div>
                <div className="md:w-12 relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center relative z-10">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 glass p-6 rounded-xl md:mt-0 mt-6">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                      <span>NFT-based AI compute ownership</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                      <span>USDC-only payments for stability</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
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
                <div className="md:w-1/2 md:pr-12 glass p-6 rounded-xl order-last md:order-first md:mt-0 mt-6">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400" />
                      <span>Enterprise-grade AI infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400" />
                      <span>Optimized for high-value AI workloads</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400" />
                      <span>Zero maintenance or technical knowledge needed</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-12 relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center relative z-10">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                  <span className="text-sm font-semibold text-indigo-400 mb-2 block">Step 2</span>
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
                  <span className="text-sm font-semibold text-purple-400 mb-2 block">Step 3</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">Earn Rewards in USDC</h3>
                  <p className="text-white/70">
                    Receive USDC payouts directly to your wallet as your share of AI mining profits, with no volatility risk.
                  </p>
                </div>
                <div className="md:w-12 relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center relative z-10">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 glass p-6 rounded-xl md:mt-0 mt-6">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-purple-400" />
                      <span>Stable USDC rewards, no crypto volatility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-purple-400" />
                      <span>Predictable earnings from AI compute</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-purple-400" />
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

export default HowItWorks;
