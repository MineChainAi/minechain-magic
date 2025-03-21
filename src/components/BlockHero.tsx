
import { motion } from 'framer-motion';
import { Package, Zap } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { BuyBlockButton } from '@/components/BuyBlockButton';

export function BlockHero() {
  return (
    <section className="mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/20"
          >
            <AspectRatio ratio={1/1} className="bg-black/20">
              <img 
                src="/lovable-uploads/8eb19d76-390b-442e-a54a-09f26cc6dd40.png" 
                alt="MineChain Block NFT - AI Mining Rig" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="bg-electric-orange/90 text-white text-sm font-bold px-3 py-1 rounded-full">
                Stable-23 NFT
              </span>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl">
          <div className="flex justify-center md:justify-start mb-6">
            <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl p-0.5 shadow-lg shadow-purple-500/20">
              <div className="absolute inset-0 bg-[#0F1724] rounded-2xl m-0.5 flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#0EA5E9]">
            Stable Block Drop – Own a Piece of the Future
          </h1>
          
          <p className="text-xl text-white/70 mb-8">
            243 Blocks | $495 Each | Limited Supply
          </p>
          
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <BuyBlockButton 
              showPrice={true} 
              className="px-8 py-6 text-lg"
            />
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('block-board')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-5 w-5" />
              View Block Board
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
