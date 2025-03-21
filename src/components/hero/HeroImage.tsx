
import { motion } from 'framer-motion';
import { Package, Zap, Sparkles } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function HeroImage() {
  // Simplified animation variant with reduced properties
  const imageAnimationVariants = {
    hidden: { opacity: 0, scale: 0.98 }, // Reduced scale difference
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } } // Shortened duration
  };

  return (
    <div className="relative">
      {/* Simplified border animation with CSS instead of motion.div */}
      <div className="absolute -inset-1 rounded-xl overflow-hidden">
        <div className="w-full h-full animate-gradient-x bg-gradient-to-r from-cosmic-purple via-neon-cyan to-electric-orange" />
      </div>
      
      {/* Static decorative elements instead of animated ones */}
      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-neon-cyan rounded-tl-xl" />
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-cosmic-purple rounded-tr-xl" />
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-electric-orange rounded-bl-xl" />
      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-neon-cyan rounded-br-xl" />
      
      {/* Static glow effect instead of animated */}
      <div className="absolute -inset-1 rounded-xl opacity-70 blur-sm z-0 bg-cosmic-purple/30" />
      
      <motion.div 
        variants={imageAnimationVariants}
        className="relative rounded-xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/20 z-10 p-1.5 bg-[#0F1724]"
      >
        <AspectRatio ratio={1/1} className="bg-black/20 rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/8eb19d76-390b-442e-a54a-09f26cc6dd40.png" 
            alt="MineChain Block NFT - AI Mining Rig" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <span className="bg-electric-orange/90 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            Stable-23 NFT
          </span>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            className="bg-neon-cyan/80 text-white text-xs font-bold px-2 py-1 rounded-full"
          >
            243 Limited Edition
          </motion.div>
        </div>
      </motion.div>
      
      {/* Simplified floating elements with CSS animations */}
      <div className="absolute -top-5 -right-5 bg-cosmic-purple/20 backdrop-blur-sm p-2 rounded-lg border border-cosmic-purple/30 shadow-lg z-20 animate-float-slow">
        <Package className="h-5 w-5 text-white" />
      </div>
      
      <div className="absolute -bottom-3 -left-3 bg-electric-orange/20 backdrop-blur-sm p-2 rounded-lg border border-electric-orange/30 shadow-lg z-20 animate-float-slow-reverse">
        <Zap className="h-5 w-5 text-white" />
      </div>
      
      {/* Replace motion.div with CSS animations for dots */}
      <div className="absolute top-1/4 -left-3 h-2 w-2 rounded-full bg-neon-cyan z-20 animate-pulse"></div>
      <div className="absolute top-3/4 -right-3 h-2 w-2 rounded-full bg-electric-orange z-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-3 h-2 w-2 rounded-full bg-cosmic-purple z-20 animate-pulse"></div>
    </div>
  );
}
