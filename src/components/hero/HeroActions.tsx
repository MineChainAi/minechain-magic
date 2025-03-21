
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BuyBlockButton } from '@/components/BuyBlockButton';

// Animation variants for staggered animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export function HeroActions() {
  return (
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
  );
}
