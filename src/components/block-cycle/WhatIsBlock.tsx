
import { motion } from 'framer-motion';
import { Clock, Server, CreditCard } from 'lucide-react';

export function WhatIsBlock() {
  return (
    <section className="py-16 relative">
      {/* Terminal scan line animation */}
      <div className="absolute left-0 right-0 h-0.5 bg-electric-orange/30 animate-scanline opacity-30"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="text-electric-orange">#</span> What Is a Block?
            </h2>
            
            <div className="space-y-6 text-white/80">
              <div className="flex gap-4">
                <div className="rounded-lg bg-[#151822] p-2 mt-1">
                  <Clock className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">1 Block = 1 Hour of Compute</h3>
                  <p>Each block represents exactly one hour of dedicated AI processing power on our enterprise-grade hardware. No fractionals, no gimmicks—just raw compute time.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="rounded-lg bg-[#151822] p-2 mt-1">
                  <Server className="w-5 h-5 text-electric-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Blocks Run Real AI Workloads</h3>
                  <p>Blocks process actual AI jobs from our global queue—from LLM inference to image generation, embeddings to fine-tuning. Your hardware is always working.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="rounded-lg bg-[#151822] p-2 mt-1">
                  <CreditCard className="w-5 h-5 text-cosmic-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Each Block Has Tracked Value</h3>
                  <p>Every compute hour generates trackable USDC revenue. Your dashboard shows which models ran, how much was earned, and when payouts occur.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/20 to-electric-orange/20 rounded-lg filter blur-xl opacity-50"></div>
              <div className="bg-[#1A1F2C] border border-white/10 rounded-lg p-6 relative backdrop-blur-sm">
                <div className="flex items-center text-white/40 text-xs mb-2 border-b border-white/10 pb-2">
                  <div className="flex-1 font-mono">~/minechain/blocks $ status --current</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                
                <div className="font-mono text-sm space-y-2 text-white/90 overflow-hidden">
                  <p><span className="text-electric-orange">system&gt;</span> Initializing block data...</p>
                  <p><span className="text-neon-cyan">info&gt;</span> Block cycle active for 30 days</p>
                  <p><span className="text-white/60">stats&gt;</span> 24 blocks per day / 720 blocks per month</p>
                  <p><span className="text-cosmic-purple">compute&gt;</span> Current workload: LLaMA 3 8B inference</p>
                  <p><span className="text-white/60">payout&gt;</span> Last block: <span className="text-green-400">$0.58 USDC</span></p>
                  <p><span className="text-white/60">payout&gt;</span> Projected monthly: <span className="text-green-400">~$410 USDC</span></p>
                  <p><span className="text-electric-orange">system&gt;</span> Block metrics verification: <span className="text-green-400">PASSED</span></p>
                  <p className="animate-pulse text-neon-cyan">_</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
