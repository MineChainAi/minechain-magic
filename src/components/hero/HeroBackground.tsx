
import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <>
      {/* Static background elements */}
      <div className="fixed inset-0 bg-background z-[-2]" />
      
      {/* Simplified orb animations with longer durations */}
      <motion.div 
        className="fixed -top-20 -left-20 w-64 h-64 bg-cosmic-purple/10 rounded-full filter blur-[100px] z-[-1]"
        animate={{ 
          opacity: [0.4, 0.6, 0.4], // Reduced opacity range
        }}
        transition={{ 
          duration: 10, // Increased duration for less CPU usage
          repeat: Infinity,
          ease: "easeInOut",
          // Added GPU acceleration hint
          translateZ: 0
        }}
      />
      
      <motion.div 
        className="fixed -bottom-20 -right-20 w-64 h-64 bg-electric-orange/10 rounded-full filter blur-[100px] z-[-1]"
        animate={{ 
          opacity: [0.4, 0.6, 0.4], // Reduced opacity range
        }}
        transition={{ 
          duration: 10, // Increased duration for less CPU usage
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
          // Added GPU acceleration hint 
          translateZ: 0
        }}
      />
      
      {/* Static ambient light instead of animated */}
      <div className="fixed top-1/3 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-[150px] z-[-1] opacity-40" />
      
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-neural-pattern opacity-10 z-[-1]" />
    </>
  );
}
