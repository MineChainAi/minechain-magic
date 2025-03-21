
import { motion } from 'framer-motion';
import { Sparkles, Gem } from 'lucide-react';

// Animation variants for staggered animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export function HeroTitle() {
  return (
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
  );
}
