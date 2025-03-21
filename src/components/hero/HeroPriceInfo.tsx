
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

// Simplified animation variant with fewer properties
const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced y distance
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Shortened duration
};

export function HeroPriceInfo() {
  return (
    <motion.p 
      variants={itemVariants}
      className="text-xl text-white/80 mb-8 relative glass px-4 py-3 rounded-lg border border-white/10"
    >
      {/* Simplified animation with fewer properties and longer duration */}
      <motion.span
        animate={{ 
          scale: [1, 1.05, 1], // Reduced scale range
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 4, // Longer duration means fewer repaints
          repeat: Infinity,
          ease: "easeInOut",
          // Added GPU acceleration hint
          translateZ: 0
        }}
        className="absolute -top-3 -right-2 text-electric-orange"
      >
        <CreditCard className="h-5 w-5" />
      </motion.span>
      <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent font-semibold">
        243 Blocks | $495 Each | Limited Supply
      </span>
    </motion.p>
  );
}
