
import { Cpu, Server, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeIn} 
              className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 text-blue-300 mb-4"
            >
              About MineChain
            </motion.span>
            
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Web3 AI Mining Company
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-white/70 max-w-3xl mx-auto"
            >
              MineChain is a Web3 AI mining company operating full-stack AI workstations. 
              Own a virtual miner, earn AI-powered rewards in USDC and $MINE.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Virtual Miners</h3>
              <p className="text-white/70">
                Own digital assets that represent real computing power in our AI mining operations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">AI Compute</h3>
              <p className="text-white/70">
                Our high-performance GPU clusters power innovative AI models and applications.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-purple-400 flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Web3 Rewards</h3>
              <p className="text-white/70">
                Earn USDC and $MINE tokens for contributing your virtual miner to the network.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
