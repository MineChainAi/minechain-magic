
import { Shield, Coins, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutWhatIsMineChain = () => {
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
    <section className="py-20 bg-[#0A1017]/80 backdrop-blur-sm relative z-10">
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
              What is MineChain?
            </motion.h2>
            
            <motion.p 
              custom={1}
              variants={fadeIn}
              className="text-lg text-white/70 mb-12"
            >
              MineChain is an <span className="text-neon-cyan">AI mining company</span> that operates and manages full-stack AI miners, allowing users to own virtual miners and earn AI-powered rewards.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-xl p-8 border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 hover:glow-cyan"
            >
              <Shield className="w-12 h-12 text-electric-orange mb-6" />
              <h3 className="text-xl font-bold mb-4">No hardware required</h3>
              <p className="text-white/70">We run the infrastructure, you get the benefits.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-xl p-8 border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 hover:glow-cyan"
            >
              <Coins className="w-12 h-12 text-electric-orange mb-6" />
              <h3 className="text-xl font-bold mb-4">Earn USDC & $MINE</h3>
              <p className="text-white/70">AI workloads generate stable returns.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-8 border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 hover:glow-cyan"
            >
              <Zap className="w-12 h-12 text-electric-orange mb-6" />
              <h3 className="text-xl font-bold mb-4">Scalable & Efficient</h3>
              <p className="text-white/70">Enterprise-grade GPU compute for AI & blockchain.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatIsMineChain;
