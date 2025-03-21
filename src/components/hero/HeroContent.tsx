
import { motion } from 'framer-motion';
import { HeroIcon } from './HeroIcon';
import { HeroTitle } from './HeroTitle';
import { HeroPriceInfo } from './HeroPriceInfo';
import { HeroActions } from './HeroActions';
import { HeroFeatureTags } from './HeroFeatureTags';

// Simplified animation variants with fewer staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Reduced stagger time
      delayChildren: 0.2,    // Reduced delay
      when: "beforeChildren"
    }
  }
};

export function HeroContent() {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl">
      <HeroIcon />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // Adding a will-change hint for browser optimization
        style={{ willChange: "opacity" }}
      >
        <HeroTitle />
        <HeroPriceInfo />
        <HeroActions />
      </motion.div>
      
      <HeroFeatureTags />
    </div>
  );
}
