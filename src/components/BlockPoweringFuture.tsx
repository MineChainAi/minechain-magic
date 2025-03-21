
import { motion } from 'framer-motion';
import { Gem, Package, Zap } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function BlockPoweringFuture() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16 bg-gradient-to-b from-purple-900/10 to-transparent p-8 rounded-2xl border border-purple-500/10"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Powering the Future of AI</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white/90">Enterprise-Grade AI Infrastructure</h3>
          <p className="text-white/70">
            Each Stable Block NFT represents ownership in cutting-edge AI mining hardware that powers the world's most advanced artificial intelligence systems.
          </p>
          <div className="space-y-3 mt-6">
            <div className="flex items-start gap-3">
              <div className="bg-electric-orange/20 p-2 rounded-full">
                <Zap className="h-5 w-5 text-electric-orange" />
              </div>
              <div>
                <h4 className="font-medium text-white">250+ TFLOPS Per Block</h4>
                <p className="text-sm text-white/60">Massive computing power for AI workloads</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-electric-orange/20 p-2 rounded-full">
                <Gem className="h-5 w-5 text-electric-orange" />
              </div>
              <div>
                <h4 className="font-medium text-white">99.9% Uptime Guarantee</h4>
                <p className="text-sm text-white/60">Maximum availability for consistent earnings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-electric-orange/20 p-2 rounded-full">
                <Package className="h-5 w-5 text-electric-orange" />
              </div>
              <div>
                <h4 className="font-medium text-white">Liquid-Cooled Systems</h4>
                <p className="text-sm text-white/60">Optimized for performance and efficiency</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-900/20">
          <AspectRatio ratio={16/9}>
            <img 
              src="/lovable-uploads/4d42f032-108d-4b78-89ba-aa44190c6c01.png" 
              alt="MineChain AI Mining Hardware" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </motion.section>
  );
}
