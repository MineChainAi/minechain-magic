
import { Cpu, Coins, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutFullStackMiners = () => {
  // Animation variants for fade-in elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#131516] to-[#0A1017] relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <motion.h2 
              custom={0}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-8 text-gradient"
            >
              What are Full-Stack Miners™?
            </motion.h2>
            
            <motion.p 
              custom={1}
              variants={fadeIn}
              className="text-lg text-white/70 mb-12"
            >
              <span className="text-neon-cyan">Full-Stack Miners™</span> are tokenized AI compute units that let users participate in AI mining without owning hardware.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-xl p-8 border border-white/5 hover:border-electric-orange/20 transition-all duration-300 hover:glow-orange"
            >
              <Cpu className="w-12 h-12 text-neon-cyan mb-6" />
              <h3 className="text-xl font-bold mb-4">Own AI Compute Power</h3>
              <p className="text-white/70">Virtual miners backed by real AI infrastructure.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-xl p-8 border border-white/5 hover:border-electric-orange/20 transition-all duration-300 hover:glow-orange"
            >
              <Coins className="w-12 h-12 text-neon-cyan mb-6" />
              <h3 className="text-xl font-bold mb-4">Earn Rewards</h3>
              <p className="text-white/70">Paid in USDC & $MINE, no volatility risks.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-8 border border-white/5 hover:border-electric-orange/20 transition-all duration-300 hover:glow-orange"
            >
              <Server className="w-12 h-12 text-neon-cyan mb-6" />
              <h3 className="text-xl font-bold mb-4">Zero Maintenance</h3>
              <p className="text-white/70">MineChain handles operations, energy costs, and uptime.</p>
            </motion.div>
          </div>
          
          {/* Miner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden aspect-square"
          >
            <img 
              src="/lovable-uploads/1b245174-ff96-4315-a4ae-b796a651b175.png" 
              alt="Full-Stack Miner" 
              className="w-full h-full object-cover border-4 border-electric-orange/20 rounded-xl glow-orange"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFullStackMiners;
