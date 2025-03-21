
import { motion } from 'framer-motion';
import { Package, Zap } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function HeroImage() {
  // Animation variants for image animations
  const imageAnimationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } }
  };

  return (
    <div className="relative">
      {/* Animated border effect */}
      <div className="absolute -inset-1 rounded-xl overflow-hidden">
        <motion.div 
          animate={{ 
            background: [
              'linear-gradient(45deg, #9b87f5 0%, #D946EF 25%, #0EA5E9 50%, #0EA5E9 75%, #9b87f5 100%)',
              'linear-gradient(45deg, #D946EF 0%, #0EA5E9 25%, #9b87f5 50%, #D946EF 75%, #0EA5E9 100%)',
              'linear-gradient(45deg, #0EA5E9 0%, #9b87f5 25%, #D946EF 50%, #0EA5E9 75%, #9b87f5 100%)',
            ],
            backgroundSize: ['200% 200%', '200% 200%', '200% 200%'],
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="w-full h-full opacity-90"
        />
      </div>
      
      {/* Animated corners */}
      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-neon-cyan rounded-tl-xl" />
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-cosmic-purple rounded-tr-xl" />
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-electric-orange rounded-bl-xl" />
      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-neon-cyan rounded-br-xl" />
      
      {/* Animated glow effect */}
      <motion.div 
        animate={{ 
          boxShadow: [
            '0 0 15px 2px rgba(75, 0, 130, 0.4)', 
            '0 0 25px 5px rgba(75, 0, 130, 0.7)', 
            '0 0 15px 2px rgba(75, 0, 130, 0.4)'
          ],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute -inset-1 rounded-xl opacity-70 blur-sm z-0"
      />
      
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
      
      {/* Animated floating elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -right-5 bg-cosmic-purple/20 backdrop-blur-sm p-2 rounded-lg border border-cosmic-purple/30 shadow-lg z-20"
      >
        <Package className="h-5 w-5 text-white" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-3 -left-3 bg-electric-orange/20 backdrop-blur-sm p-2 rounded-lg border border-electric-orange/30 shadow-lg z-20"
      >
        <Zap className="h-5 w-5 text-white" />
      </motion.div>
      
      {/* Pulsing dots animation */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-3 h-2 w-2 rounded-full bg-neon-cyan z-20"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-3/4 -right-3 h-2 w-2 rounded-full bg-electric-orange z-20"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -left-3 h-2 w-2 rounded-full bg-cosmic-purple z-20"
      />
    </div>
  );
}

// Missing import for Sparkles component
import { Sparkles } from 'lucide-react';
