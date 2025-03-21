
import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cosmic-purple/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div 
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric-orange/10 rounded-full filter blur-[100px] animate-pulse-slow" 
        style={{ animationDelay: '2s' }}
      ></div>
    </>
  );
}
