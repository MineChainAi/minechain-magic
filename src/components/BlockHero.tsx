
import { motion } from 'framer-motion';
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
