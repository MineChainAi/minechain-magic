
import { motion } from 'framer-motion';
import { Package, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { BuyBlockButton } from '@/components/BuyBlockButton';

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section className="mb-16 relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cosmic-purple/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric-orange/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <motion.div
          variants={itemVariants} 
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
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
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 text-center md:text-left max-w-2xl"
        >
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
              className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl p-0.5 shadow-lg shadow-purple-500/20 z-10"
            >
              <div className="absolute inset-0 bg-[#0F1724] rounded-2xl m-0.5 flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative"
          >
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#0EA5E9]">
              Stable Block Drop – Own a Piece of the Future
            </span>
            <motion.span 
              className="absolute -top-4 right-10 text-neon-cyan text-xs font-mono"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              ✧ EXCLUSIVE ✧
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/70 mb-8 relative"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-semibold">
              243 Blocks | $495 Each | Limited Supply
            </span>
            <motion.span 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -right-2 top-0 text-electric-orange text-lg"
            >
              ★
            </motion.span>
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BuyBlockButton 
                showPrice={true} 
                className="px-8 py-6 text-lg relative group overflow-hidden"
                buttonText="Mint a Block • $495"
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg group"
                onClick={() => document.getElementById('block-board')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="mr-2 h-5 w-5 text-neon-cyan group-hover:animate-pulse" />
                View Block Board
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8 pt-6 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-purple/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cosmic-purple/30"
              >
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                <span className="text-xs text-white/80">High Performance AI</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 bg-gradient-to-r from-electric-orange/20 to-electric-orange/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-electric-orange/30"
              >
                <span className="w-2 h-2 rounded-full bg-electric-orange animate-pulse"></span>
                <span className="text-xs text-white/80">USDC Rewards</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon-cyan/30"
              >
                <span className="w-2 h-2 rounded-full bg-cosmic-purple animate-pulse"></span>
                <span className="text-xs text-white/80">100% Passive</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
