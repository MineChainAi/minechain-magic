import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Server, Coins } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PaymentModal } from '@/components/PaymentModal';
import HowItWorksSteps from '@/components/HowItWorksSteps';

const HowItWorks = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
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
    <div className="min-h-screen bg-[#050A12] text-white">
      <Navbar />
      
      {/* Hero Section with single background image */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Single background image - keeping only this one */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/caa8d77a-a6e6-4c81-a123-ab5eceeaf154.png')" }}
        />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gold-text"
            >
              Own a Block. Mine AI. Earn USDC.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
            >
              Secure your place in MineChain's AI mining network by purchasing an NFT-backed compute block. No hardware, no setup—just stable USDC rewards.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-electric-orange hover:bg-electric-orange/90 text-white group crypto-glow"
                onClick={() => setIsPaymentModalOpen(true)}
              >
                Buy a Block Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section - removing background image in HowItWorksSteps component */}
      <HowItWorksSteps />
      
      {/* Why Own a Block Section - removing background image */}
      <section className="py-20 bg-[#101520] relative overflow-hidden">
        
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
                className="text-3xl md:text-4xl font-bold mb-8 gold-text"
              >
                Why Own a Block?
              </motion.h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass p-8 rounded-lg border border-white/5 hover:border-electric-orange/20 transition-all duration-300 hover:crypto-glow"
              >
                <Server className="w-12 h-12 text-neon-cyan mb-6" />
                <h3 className="text-xl font-bold mb-4">AI Compute Power, Tokenized</h3>
                <p className="text-white/70">Own part of an AI mining network with full rights to your share of compute power.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-8 rounded-lg border border-white/5 hover:border-electric-orange/20 transition-all duration-300 hover:crypto-glow"
              >
                <Coins className="w-12 h-12 text-neon-cyan mb-6" />
                <h3 className="text-xl font-bold mb-4">Earn in USDC Only</h3>
                <p className="text-white/70">No price swings, just stable rewards delivered directly to your wallet.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass p-8 rounded-lg border border-white/5 hover:border-electric-orange/20 transition-all duration-300 hover:crypto-glow"
              >
                <CreditCard className="w-12 h-12 text-neon-cyan mb-6" />
                <h3 className="text-xl font-bold mb-4">No Hardware Needed</h3>
                <p className="text-white/70">We handle the infrastructure, you collect earnings without any technical complexity.</p>
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
                className="bg-neon-cyan hover:bg-neon-cyan/90 text-white crypto-glow"
                onClick={() => setIsPaymentModalOpen(true)}
              >
                Buy a Block Now
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />
      )}
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
