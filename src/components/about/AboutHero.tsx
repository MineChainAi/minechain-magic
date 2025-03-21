
import { ArrowRight, Server, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="pt-32 pb-20 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-orange/10 to-neon-cyan/5 pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-orange via-white to-neon-cyan block mb-2">
              Proof of AI
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cosmic-purple via-white to-electric-orange text-3xl md:text-4xl lg:text-5xl">
              Buy Full-Stack Miners™
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            MineChain operates full-stack AI miners, providing enterprise-grade compute power for AI workloads. Own a virtual miner, earn rewards, and be part of the decentralized AI revolution.
          </motion.p>
          
          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-electric-orange/20 hover:border-electric-orange/40 transition-all duration-300"
            >
              <Cpu className="w-10 h-10 text-electric-orange mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Full-Stack AI Mining</h3>
              <p className="text-white/70 text-sm">Decentralized AI infrastructure with enterprise-grade compute power</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300"
            >
              <Server className="w-10 h-10 text-neon-cyan mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Tokenized Compute</h3>
              <p className="text-white/70 text-sm">Own a share of our mining network and receive stable USDC rewards</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-cosmic-purple/20 hover:border-cosmic-purple/40 transition-all duration-300"
            >
              <Zap className="w-10 h-10 text-cosmic-purple mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">100% Passive Income</h3>
              <p className="text-white/70 text-sm">We manage all hardware, software, and maintenance for you</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-electric-orange hover:bg-electric-orange/90 text-white group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
