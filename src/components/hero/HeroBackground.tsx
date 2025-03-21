
import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <>
      {/* Enhanced background decorative elements */}
      <div className="fixed inset-0 bg-background z-[-2]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="fixed -top-20 -left-20 w-64 h-64 bg-cosmic-purple/10 rounded-full filter blur-[100px] animate-pulse-slow z-[-1]"
        animate={{ 
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="fixed -bottom-20 -right-20 w-64 h-64 bg-electric-orange/10 rounded-full filter blur-[100px] z-[-1]"
        animate={{ 
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      {/* Additional ambient light sources */}
      <motion.div 
        className="fixed top-1/3 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-[150px] z-[-1]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-neural-pattern opacity-10 z-[-1]" />
    </>
  );
}
