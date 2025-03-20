
import { ArrowRight, Cpu, Globe, Coins, Shield, Zap, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
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
    <div className="min-h-screen bg-[#131516] text-white">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-none z-0">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src="/lovable-uploads/f55fa69d-dd8e-45e4-83fb-3a445fa726e2.png" 
            alt="Background" 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
        </div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-orange/10 to-neon-cyan/5 pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight"
            >
              Powering the Future of AI Mining
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed px-2"
            >
              MineChain operates full-stack AI miners, providing enterprise-grade compute power for AI workloads. Own a virtual miner, earn rewards, and be part of the decentralized AI revolution.
            </motion.p>
            
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
      
      {/* What is MineChain Section */}
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
      
      {/* What are Full-Stack Miners Section with Image */}
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
      
      {/* Why MineChain Section with Dev Image */}
      <section className="py-20 bg-gradient-to-b from-[#0A1017] to-[#0A1F33] relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                  Why MineChain?
                </h2>
                
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-electric-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="w-5 h-5 text-electric-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Decentralized AI Compute</h3>
                      <p className="text-white/70">True Web3 ownership of AI infrastructure without the hassle of managing hardware.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Coins className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Passive Income</h3>
                      <p className="text-white/70">Your miner earns while AI runs, providing consistent rewards in USDC to your wallet.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-electric-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-5 h-5 text-electric-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">No Complexity</h3>
                      <p className="text-white/70">Easy onboarding, instant payouts, and a seamless Web3 experience for both crypto natives and newcomers.</p>
                    </div>
                  </li>
                </ul>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-10"
                >
                  <Button 
                    size="lg" 
                    className="bg-neon-cyan hover:bg-neon-cyan/90 text-white"
                  >
                    Get Started
                    <ArrowRight className="ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative order-1 md:order-2"
              >
                <img 
                  src="/lovable-uploads/aaee0e3c-e9c2-4af8-821c-d6765a42e83d.png" 
                  alt="MineChain Dev" 
                  className="w-full rounded-xl border-4 border-neon-cyan/20 glow-cyan"
                />
                
                <div className="absolute -top-5 -right-5 bg-[#131516] rounded-full p-3 border-2 border-neon-cyan glow-cyan">
                  <Cpu className="w-10 h-10 text-neon-cyan" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
