
import { motion } from 'framer-motion';
import { HeroIcon } from './HeroIcon';
import { HeroTitle } from './HeroTitle';
import { HeroPriceInfo } from './HeroPriceInfo';
import { HeroActions } from './HeroActions';
import { HeroFeatureTags } from './HeroFeatureTags';

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

export function HeroContent() {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl">
      <HeroIcon />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroTitle />
        <HeroPriceInfo />
        <HeroActions />
      </motion.div>
      
      <HeroFeatureTags />
    </div>
  );
}
