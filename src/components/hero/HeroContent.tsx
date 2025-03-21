
import { motion } from 'framer-motion';
import { Package, Zap, ArrowRight, Sparkles, CreditCard, Gem } from 'lucide-react';
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
          className="relative w-16 h-16 bg-gradient-to-br from-electric-orange via-cosmic-purple to-neon-cyan rounded-2xl p-0.5 shadow-lg shadow-electric-orange/30 z-10"
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -top-12 right-1/4 transform rotate-12 bg-electric-orange/80 text-white text-xs px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg shadow-electric-orange/20"
        >
          <Sparkles className="h-3 w-3" />
          <span>EXCLUSIVE</span>
        </motion.div>
        
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-orange via-neon-cyan to-cosmic-purple block mb-2">
          Stable Block Drop
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/70 block mb-2">
          <span className="relative inline-block">
            Own 
            <motion.span
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -top-6 -right-6 text-neon-cyan text-sm"
            >
              <Gem className="h-5 w-5" />
            </motion.span>
          </span>
          <span className="mx-2">a</span>
          <span className="relative inline-block">
            Piece 
            <motion.span
              animate={{ 
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6"
            >
              ✨
            </motion.span>
          </span>
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-electric-orange to-cosmic-purple">
          of Compute Power
        </span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl text-white/80 mb-8 relative glass px-4 py-3 rounded-lg border border-white/10"
      >
        <motion.span
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-3 -right-2 text-electric-orange"
        >
          <CreditCard className="h-5 w-5" />
        </motion.span>
        <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent font-semibold">
          243 Blocks | $495 Each | Limited Supply
        </span>
      </motion.p>
      
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* Animated glow effect behind button */}
          <motion.div 
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [0.9, 1, 0.9]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-electric-orange/20 rounded-md filter blur-md"
          />
          
          <BuyBlockButton 
            showPrice={true} 
            className="px-8 py-6 text-lg relative group overflow-hidden z-10"
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
            className="border-white/20 hover:bg-white/5 bg-white/5 backdrop-blur-sm text-white px-8 py-6 text-lg group"
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
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-purple/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cosmic-purple/30"
        >
          <motion.span 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-neon-cyan"
          ></motion.span>
          <span className="text-xs text-white/80">High Performance AI</span>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex items-center gap-2 bg-gradient-to-r from-electric-orange/20 to-electric-orange/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-electric-orange/30"
        >
          <motion.span 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="w-2 h-2 rounded-full bg-electric-orange"
          ></motion.span>
          <span className="text-xs text-white/80">USDC Rewards</span>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex items-center gap-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon-cyan/30"
        >
          <motion.span 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="w-2 h-2 rounded-full bg-cosmic-purple"
          ></motion.span>
          <span className="text-xs text-white/80">100% Passive</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
