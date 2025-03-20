
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[#0A1F33]/20 pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Powering the Future of AI Mining
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#41474D] mb-10 max-w-3xl mx-auto"
            >
              MineChain operates full-stack AI miners, providing enterprise-grade compute power for AI workloads. Own a virtual miner, earn rewards, and be part of the decentralized AI revolution.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-[#0A1F33] hover:bg-[#0A1F33]/90 text-white group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What is MineChain Section */}
      <section className="py-20 bg-[#2C2F33]">
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
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                What is MineChain?
              </motion.h2>
              
              <motion.p 
                custom={1}
                variants={fadeIn}
                className="text-lg text-[#41474D] mb-12"
              >
                MineChain is an <span className="text-[#29B6F6]">AI mining company</span> that operates and manages full-stack AI miners, allowing users to own virtual miners and earn AI-powered rewards.
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#131516] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Shield className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">No hardware required</h3>
                <p className="text-[#41474D]">We run the infrastructure, you get the benefits.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#131516] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Coins className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Earn USDC & $MINE</h3>
                <p className="text-[#41474D]">AI workloads generate stable returns.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#131516] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Zap className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Scalable & Efficient</h3>
                <p className="text-[#41474D]">Enterprise-grade GPU compute for AI & blockchain.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What are Full-Stack Miners Section */}
      <section className="py-20 bg-[#131516]">
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
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                What are Full-Stack Miners™?
              </motion.h2>
              
              <motion.p 
                custom={1}
                variants={fadeIn}
                className="text-lg text-[#41474D] mb-12"
              >
                <span className="text-[#29B6F6]">Full-Stack Miners™</span> are tokenized AI compute units that let users participate in AI mining without owning hardware.
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#2C2F33] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Cpu className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Own AI Compute Power</h3>
                <p className="text-[#41474D]">Virtual miners backed by real AI infrastructure.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#2C2F33] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Coins className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Earn Rewards</h3>
                <p className="text-[#41474D]">Paid in USDC & $MINE, no volatility risks.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#2C2F33] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Server className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Zero Maintenance</h3>
                <p className="text-[#41474D]">MineChain handles operations, energy costs, and uptime.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why MineChain Section */}
      <section className="py-20 bg-[#0A1F33]">
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
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                Why MineChain?
              </motion.h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#131516] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Globe className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Decentralized AI Compute</h3>
                <p className="text-[#41474D]">True Web3 ownership of AI infrastructure.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#131516] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Coins className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Passive Income</h3>
                <p className="text-[#41474D]">Your miner earns while AI runs.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#131516] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Zap className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">No Complexity</h3>
                <p className="text-[#41474D]">Easy onboarding, instant payouts.</p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <Button 
                size="lg" 
                className="bg-[#29B6F6] hover:bg-[#29B6F6]/90 text-white"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
