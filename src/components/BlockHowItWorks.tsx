
import { motion } from 'framer-motion';
import { Gem, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoinIcon } from '@/components/icons/CoinIcon';

export function BlockHowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className="mb-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-3xl mx-auto"
        >
          A simple, streamlined process to start generating rewards from AI compute infrastructure.
        </motion.p>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Gem className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Mint Your Block</h3>
          <p className="text-white/70">Secure your AI-powered mining block for $495 and join the MineChain ecosystem.</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <CoinIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Earn Rewards</h3>
          <p className="text-white/70">Receive stable USDC returns and bonus Bitcoin (BTC) distributions from AI workloads.</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Package className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Stay Connected</h3>
          <p className="text-white/70">Track earnings and growth inside the MineChain Innovation Hub with real-time analytics.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
