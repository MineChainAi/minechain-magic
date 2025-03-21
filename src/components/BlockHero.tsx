
import { motion } from 'framer-motion';
import { Sparkles, Gem, Coins } from 'lucide-react';
import { HeroImage } from './hero/HeroImage';
import { HeroContent } from './hero/HeroContent';
import { HeroBackground } from './hero/HeroBackground';

export function BlockHero() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="mb-16 relative">
      <HeroBackground />
      
      {/* Animated sparkles */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute top-10 right-1/4 z-10"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          <Sparkles className="text-electric-orange w-6 h-6" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/4 z-10"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          <Gem className="text-neon-cyan w-6 h-6" />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute top-1/3 left-10 z-10"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          <Coins className="text-cosmic-purple w-6 h-6" />
        </motion.div>
      </motion.div>
      
      {/* Enhanced glow effects */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-electric-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
          }} 
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <HeroImage />
        </motion.div>
        
        <HeroContent />
      </motion.div>
    </section>
  );
}
