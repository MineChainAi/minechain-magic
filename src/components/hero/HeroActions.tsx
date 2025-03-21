
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BuyBlockButton } from '@/components/BuyBlockButton';

// Simplified animation variant with shorter travel distance
const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced y distance
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Shortened duration
};

export function HeroActions() {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.03 }} // Reduced scale effect
        whileTap={{ scale: 0.97 }} // Reduced scale effect
        className="relative"
      >
        {/* Simplified glow animation with fewer properties */}
        <motion.div 
          animate={{ 
            opacity: [0.5, 0.7, 0.5], // Reduced opacity range
          }}
          transition={{ 
            duration: 3, // Longer duration means fewer repaints
            repeat: Infinity,
            ease: "easeInOut",
            // Added GPU acceleration hint
            translateZ: 0
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
        whileHover={{ scale: 1.03 }} // Reduced scale effect
        whileTap={{ scale: 0.97 }} // Reduced scale effect
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
