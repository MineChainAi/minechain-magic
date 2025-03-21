
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export function HeroIcon() {
  return (
    <div className="flex justify-center md:justify-start mb-6">
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute opacity-40 w-24 h-24 rounded-full border-4 border-dashed border-neon-cyan/20"
      ></motion.div>
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-16 h-16 bg-gradient-to-br from-electric-orange via-cosmic-purple to-neon-cyan rounded-2xl p-0.5 shadow-lg shadow-electric-orange/30 z-10"
      >
        <div className="absolute inset-0 bg-[#0F1724] rounded-2xl m-0.5 flex items-center justify-center">
          <Package className="w-8 h-8 text-white" />
        </div>
      </motion.div>
    </div>
  );
}
