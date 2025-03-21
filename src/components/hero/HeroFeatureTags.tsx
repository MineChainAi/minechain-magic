
import { motion } from 'framer-motion';

export function HeroFeatureTags() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Reduced y distance
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }} // Reduced delay and duration
      className="mt-8 pt-6 border-t border-white/10"
    >
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <motion.div 
          whileHover={{ y: -3 }} // Reduced movement
          className="flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-purple/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cosmic-purple/30"
        >
          {/* Replace complex animation with simpler CSS pulse */}
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
          <span className="text-xs text-white/80">High Performance AI</span>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -3 }} // Reduced movement
          className="flex items-center gap-2 bg-gradient-to-r from-electric-orange/20 to-electric-orange/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-electric-orange/30"
        >
          {/* Replace complex animation with simpler CSS pulse */}
          <span className="w-2 h-2 rounded-full bg-electric-orange animate-pulse"></span>
          <span className="text-xs text-white/80">USDC Rewards</span>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -3 }} // Reduced movement
          className="flex items-center gap-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon-cyan/30"
        >
          {/* Replace complex animation with simpler CSS pulse */}
          <span className="w-2 h-2 rounded-full bg-cosmic-purple animate-pulse"></span>
          <span className="text-xs text-white/80">100% Passive</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
