
import { motion } from 'framer-motion';
import { Package, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BuyBlockButton } from '@/components/BuyBlockButton';

// Animation variants for staggered animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export function HeroContent() {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl">
      <div className="flex justify-center md:justify-start mb-6">
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute opacity-40 w-24 h-24 rounded-full border-4 border-dashed border-neon-cyan/20"
        ></motion.div>
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl p-0.5 shadow-lg shadow-purple-500/20 z-10"
        >
          <div className="absolute inset-0 bg-[#0F1724] rounded-2xl m-0.5 flex items-center justify-center">
            <Package className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </div>
      
      <motion.h1 
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative"
      >
        <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#0EA5E9]">
          Stable Block Drop – Own a Piece of the Future
        </span>
        <motion.span 
          className="absolute -top-4 right-10 text-neon-cyan text-xs font-mono"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          ✧ EXCLUSIVE ✧
        </motion.span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl text-white/70 mb-8 relative"
      >
        <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-semibold">
          243 Blocks | $495 Each | Limited Supply
        </span>
        <motion.span 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="absolute -right-2 top-0 text-electric-orange text-lg"
        >
          ★
        </motion.span>
      </motion.p>
      
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BuyBlockButton 
            showPrice={true} 
            className="px-8 py-6 text-lg relative group overflow-hidden"
            buttonText="Mint a Block • $495"
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg group"
            onClick={() => document.getElementById('block-board')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="mr-2 h-5 w-5 text-neon-cyan group-hover:animate-pulse" />
            View Block Board
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
      
      <HeroFeatureTags />
    </div>
  );
}

function HeroFeatureTags() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      className="mt-8 pt-6 border-t border-white/10"
    >
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-purple/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cosmic-purple/30"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
          <span className="text-xs text-white/80">High Performance AI</span>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex items-center gap-2 bg-gradient-to-r from-electric-orange/20 to-electric-orange/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-electric-orange/30"
        >
          <span className="w-2 h-2 rounded-full bg-electric-orange animate-pulse"></span>
          <span className="text-xs text-white/80">USDC Rewards</span>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex items-center gap-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon-cyan/30"
        >
          <span className="w-2 h-2 rounded-full bg-cosmic-purple animate-pulse"></span>
          <span className="text-xs text-white/80">100% Passive</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
