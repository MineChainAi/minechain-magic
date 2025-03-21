
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Clock, Zap, DollarSign } from 'lucide-react';

// Type for the block entry data
interface BlockEntry {
  id: number;
  timestamp: string;
  workload: string;
  model: string;
  earned: string;
  status: 'completed' | 'in-progress';
}

export function LiveTracker() {
  const [blockEntries, setBlockEntries] = useState<BlockEntry[]>([]);
  const [currentBlock, setCurrentBlock] = useState<BlockEntry | null>(null);
  
  // Generate random workload and model
  const getRandomWorkload = () => {
    const workloads = [
      { type: 'LLM Inference', model: 'LLaMA 3 70B' },
      { type: 'LLM Inference', model: 'Mixtral 8x7B' },
      { type: 'LLM Inference', model: 'Mistral 7B' },
      { type: 'Image Generation', model: 'Stable Diffusion XL' },
      { type: 'Image Generation', model: 'ControlNet' },
      { type: 'Embedding', model: 'OpenAI Ada 002' },
      { type: 'Embedding', model: 'BGE Large' },
      { type: 'Fine-tuning', model: 'Fishcake AI' }
    ];
    
    const selected = workloads[Math.floor(Math.random() * workloads.length)];
    return { workload: selected.type, model: selected.model };
  };
  
  // Generate random earned amount
  const getRandomEarned = () => {
    return `$${(0.45 + Math.random() * 0.35).toFixed(2)}`;
  };
  
  // Initialize with some past blocks
  useEffect(() => {
    const initialBlocks: BlockEntry[] = [];
    const now = new Date();
    
    // Generate 6 past blocks
    for (let i = 6; i > 0; i--) {
      const past = new Date(now.getTime() - (i * 60 * 60 * 1000));
      const { workload, model } = getRandomWorkload();
      
      initialBlocks.push({
        id: 2118 + (6 - i),
        timestamp: past.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        workload,
        model,
        earned: getRandomEarned(),
        status: 'completed'
      });
    }
    
    setBlockEntries(initialBlocks);
    
    // Set current active block
    const { workload, model } = getRandomWorkload();
    setCurrentBlock({
      id: 2124,
      timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      workload,
      model,
      earned: '$0.00',
      status: 'in-progress'
    });
    
    // Update current block earnings every few seconds
    const earnInterval = setInterval(() => {
      setCurrentBlock(prev => {
        if (!prev) return null;
        
        // Calculate progress through the hour (0-1)
        const startOfHour = new Date();
        startOfHour.setMinutes(0, 0, 0);
        const progress = (Date.now() - startOfHour.getTime()) / (60 * 60 * 1000);
        
        // Calculate earned amount based on progress
        const maxEarned = 0.45 + Math.random() * 0.35;
        const currentEarned = maxEarned * progress;
        
        return {
          ...prev,
          earned: `$${currentEarned.toFixed(2)}`
        };
      });
    }, 5000);
    
    return () => clearInterval(earnInterval);
  }, []);

  return (
    <section className="py-16 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-neon-cyan">&gt;</span> Live Block Tracker
            </h2>
            <p className="text-white/70">
              Watch blocks mine in real-time as they process AI workloads and generate USDC
            </p>
          </div>
          
          <div className="bg-[#151822] border border-white/10 rounded-lg overflow-hidden">
            <div className="bg-[#1A1F2C] p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center">
                <Terminal className="h-5 w-5 text-neon-cyan mr-2" />
                <span className="text-white font-medium">Block Activity Monitor</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-1 animate-pulse"></div>
                  <span className="text-xs text-white/70">LIVE</span>
                </div>
                <div className="flex items-center text-white/70 text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{new Date().toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Current active block */}
              {currentBlock && (
                <div className="bg-[#1A1F2C]/50 border border-neon-cyan/30 rounded p-4 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-electric-orange/5 animate-pulse"></div>
                  <div className="relative flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 rounded-lg bg-[#151822] border border-neon-cyan/30 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-neon-cyan animate-pulse" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <span className="text-neon-cyan font-mono font-bold">BLOCK #{currentBlock.id}</span>
                        <span className="ml-2 px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/20">
                          IN PROGRESS
                        </span>
                        <span className="ml-auto text-white/50 text-sm">Started: {currentBlock.timestamp}</span>
                      </div>
                      <div className="text-white font-medium mt-1">
                        Running {currentBlock.workload}: <span className="text-electric-orange">{currentBlock.model}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="w-3/4 bg-[#151822] h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-electric-orange to-neon-cyan animate-shimmer rounded-full"></div>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 text-green-400 mr-1" />
                          <span className="text-green-400 font-mono">{currentBlock.earned}</span>
                          <span className="text-white/50 text-xs ml-1">earned so far</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Past blocks */}
              <div className="space-y-3">
                <div className="text-xs uppercase text-white/40 mb-1 border-b border-white/10 pb-1">
                  Recent Block History
                </div>
                
                {blockEntries.map((entry) => (
                  <div 
                    key={entry.id}
                    className="flex items-center p-2 hover:bg-[#1A1F2C]/30 rounded-md transition-colors"
                  >
                    <div className="w-8 text-white/50 font-mono text-sm">#{entry.id}</div>
                    <div className="w-16 text-xs text-white/50">{entry.timestamp}</div>
                    <div className="flex-1 text-sm text-white/80">
                      {entry.workload}: <span className="text-electric-orange">{entry.model}</span>
                    </div>
                    <div className="text-green-400 font-mono text-sm">{entry.earned}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#1A1F2C]/50 p-3 border-t border-white/10 text-center">
              <span className="text-xs text-white/50">All blocks and earnings permanently recorded on-chain</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
