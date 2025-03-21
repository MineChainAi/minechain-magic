
import { motion } from 'framer-motion';
import { Clock, Cpu, Database } from 'lucide-react';

export function BlockCycleHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-900/20 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-blue-900/20 filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1 bg-[#1A1F2C]/50 border border-white/10 rounded-full">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-electric-orange" />
              <span className="text-sm font-medium text-white/80">Block Duration: 1 Hour of Raw Compute</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 pb-1">
            The Block Cycle
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            24 Blocks a Day. Every Hour Counts. Every Block Pays.
          </p>
          
          <div className="border-l-4 border-electric-orange pl-4 mb-10 mx-auto text-left max-w-2xl bg-black/20 p-4 rounded-r">
            <p className="text-xl md:text-2xl font-semibold text-white italic">
              "We don't mint tokens. We mine time."
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <div className="bg-[#151822] border border-white/5 p-5 rounded-lg flex flex-col items-center">
            <Cpu className="mb-3 w-8 h-8 text-neon-cyan" />
            <h3 className="font-bold text-lg mb-2">AI Infrastructure</h3>
            <p className="text-white/70 text-sm">Enterprise-grade NVIDIA fleet running at full capacity</p>
          </div>
          
          <div className="bg-[#151822] border border-white/5 p-5 rounded-lg flex flex-col items-center">
            <Clock className="mb-3 w-8 h-8 text-electric-orange" />
            <h3 className="font-bold text-lg mb-2">Hourly Blocks</h3>
            <p className="text-white/70 text-sm">24/7/365 compute cycles that generate real value</p>
          </div>
          
          <div className="bg-[#151822] border border-white/5 p-5 rounded-lg flex flex-col items-center">
            <Database className="mb-3 w-8 h-8 text-cosmic-purple" />
            <h3 className="font-bold text-lg mb-2">Real Payouts</h3>
            <p className="text-white/70 text-sm">USDC earned on every block, backed by actual workloads</p>
          </div>
        </motion.div>
      </div>

      {/* Terminal-like pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
