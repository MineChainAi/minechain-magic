
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

// Animation variants for staggered animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export function HeroPriceInfo() {
  return (
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
  );
}
