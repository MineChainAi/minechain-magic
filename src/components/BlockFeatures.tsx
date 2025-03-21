
import { motion } from 'framer-motion';
import { Gem, Sparkle, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check } from '@/components/icons/Check';
import { CoinIcon } from '@/components/icons/CoinIcon';

export function BlockFeatures() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mb-16 bg-gradient-to-b from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-500/20"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">What is the Stable Block Drop?</h2>
        <p className="text-white/70 max-w-3xl mx-auto">
          The Stable Block Drop is your gateway to AI-powered mining ownership. Each block represents a fractionalized share of MineChain's AI compute infrastructure, generating real yield from AI workloads and secured by decentralized mining power.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gem className="h-5 w-5 text-[#9b87f5]" />
              True AI Mining Ownership
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-white/80">Backed by real hardware generating revenue</p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-white/80">AI workload revenue streams</p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-white/80">Secure, transparent ownership</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkle className="h-5 w-5 text-[#D946EF]" />
              Stable Yield Model
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Earnings paid in USDC</p>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Bonus rewards in Bitcoin (BTC)</p>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Optimized for long-term returns</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#0EA5E9]" />
              No Hardware, No Hassle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/80">MineChain handles all setup</p>
              </div>
              <div className="flex items-start gap-2">
                <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Power, maintenance, & optimization</p>
              </div>
              <div className="flex items-start gap-2">
                <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/80">Fully managed operation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
