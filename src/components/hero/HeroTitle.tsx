
import { motion } from 'framer-motion';
import { Sparkles, Gem } from 'lucide-react';

// Simplified animation variant with fewer properties
const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced y distance
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Shortened duration
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
          {/* Simplified animation with longer duration and fewer properties */}
          <motion.span
            animate={{ 
              opacity: [0.7, 0.9, 0.7], // Reduced opacity range
              scale: [1, 1.03, 1]  // Reduced scale range
            }}
            transition={{ 
              duration: 4, // Longer duration means fewer repaints
              repeat: Infinity,
              ease: "easeInOut",
              // Added GPU acceleration hint
              translateZ: 0
            }}
            className="absolute -top-6 -right-6 text-neon-cyan text-sm"
          >
            <Gem className="h-5 w-5" />
          </motion.span>
        </span>
        <span className="mx-2">a</span>
        <span className="relative inline-block">
          Piece 
          {/* Simplified rotation animation */}
          <motion.span
            animate={{ 
              rotate: [0, 5, 0] // Reduced rotation range
            }}
            transition={{ 
              duration: 3, // Longer duration
              repeat: Infinity,
              ease: "easeInOut",
              // Added GPU acceleration hint
              translateZ: 0
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
