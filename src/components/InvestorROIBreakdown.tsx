
import { motion } from 'framer-motion';
import { Gem, Zap, ArrowRight, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BuyBlockButton } from '@/components/BuyBlockButton';

export function InvestorROIBreakdown() {
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-500/20"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Stable Block Drop – Investor ROI Breakdown</h2>
        <p className="text-white/70 max-w-3xl mx-auto">
          Transparent yield metrics for Block owners with guaranteed returns over a 3-year period.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#131A2C]/70 p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Gem className="mr-2 h-5 w-5 text-purple-400" />
            Block Allocation
          </h3>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-white/80">Total Blocks:</span>
              <span className="font-bold text-white">243</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-white/80">MineChain Reserve Blocks (20%):</span>
              <span className="font-bold text-white">48</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Investor Blocks Available:</span>
              <span className="font-bold text-electric-orange">195</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#131A2C]/70 p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-green-400" />
            Investment & Earnings Per Block
          </h3>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-white/80">Initial Investment:</span>
              <span className="font-bold text-white">$495</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-white/80">Net Earnings (3 Years):</span>
              <span className="font-bold text-green-400">$1,525</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-white/80">Total ROI (3 Years):</span>
              <span className="font-bold text-green-400">~308%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Annualized ROI:</span>
              <span className="font-bold text-green-400">~103%</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#131A2C]/90 p-6 rounded-xl border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Zap className="mr-2 h-5 w-5 text-electric-orange" />
          How It Works
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div variants={itemVariants} className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-black/20">
            <div className="bg-electric-orange/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="font-bold text-electric-orange">1</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Mint Your Block</h4>
              <p className="text-sm text-white/60">Initial investment of $495</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-black/20">
            <div className="bg-electric-orange/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="font-bold text-electric-orange">2</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Earn USDC Rewards</h4>
              <p className="text-sm text-white/60">Consistent returns over 3 years</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-black/20">
            <div className="bg-electric-orange/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="font-bold text-electric-orange">3</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Track Earnings</h4>
              <p className="text-sm text-white/60">Inside the MineChain Hub</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-black/20">
            <div className="bg-electric-orange/20 p-2 rounded-full h-8 w-8 flex items-center justify-center">
              <span className="font-bold text-electric-orange">4</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Superblock NFT Burns</h4>
              <p className="text-sm text-white/60">After 3-year investment period</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="text-center mt-8">
        <BuyBlockButton 
          showPrice={true} 
          price={495}
          className="px-8 py-6 text-lg"
        />
        <p className="mt-4 text-sm text-white/50">195 Blocks Available • Limited Time Only</p>
      </div>
    </motion.div>
  );
}
