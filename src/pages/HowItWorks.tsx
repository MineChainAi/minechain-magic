
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Server, Coins } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PaymentModal } from '@/components/PaymentModal';

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
              Own a Block. Mine AI. Earn USDC.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#41474D] mb-10 max-w-3xl mx-auto"
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
                className="bg-[#0A1F33] hover:bg-[#0A1F33]/90 text-white group"
                onClick={() => setIsPaymentModalOpen(true)}
              >
                Buy a Block Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
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
                How It Works
              </motion.h2>
              
              <motion.p 
                custom={1}
                variants={fadeIn}
                className="text-lg text-[#41474D] mb-12"
              >
                Join MineChain's AI mining revolution in <span className="text-[#29B6F6]">three simple steps</span>
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0A1F33] flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-[#29B6F6]" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Purchase a Block</h3>
                <p className="text-[#41474D]">
                  Buy a MineChain NFT, which represents your share of AI compute power. Pay with USDC only through Coinbase Commerce for stable earnings.
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0A1F33] flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-[#29B6F6]" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. AI Workloads Run</h3>
                <p className="text-[#41474D]">
                  Your block is part of MineChain's enterprise AI mining infrastructure. GPUs process AI workloads, generating real revenue from AI compute.
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0A1F33] flex items-center justify-center mb-6">
                  <Coins className="w-8 h-8 text-[#29B6F6]" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Earn Rewards in USDC</h3>
                <p className="text-[#41474D]">
                  Receive USDC payouts as your share of AI mining profits. No volatility, no maintenance—just stable, predictable earnings.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Own a Block Section */}
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
                Why Own a Block?
              </motion.h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#2C2F33] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Server className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">AI Compute Power, Tokenized</h3>
                <p className="text-[#41474D]">Own part of an AI mining network with full rights to your share of compute power.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#2C2F33] p-8 rounded-lg border border-[#41474D]/20"
              >
                <Coins className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">Earn in USDC Only</h3>
                <p className="text-[#41474D]">No price swings, just stable rewards delivered directly to your wallet.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#2C2F33] p-8 rounded-lg border border-[#41474D]/20"
              >
                <CreditCard className="w-12 h-12 text-[#29B6F6] mb-6" />
                <h3 className="text-xl font-bold mb-4">No Hardware Needed</h3>
                <p className="text-[#41474D]">We handle the infrastructure, you collect earnings without any technical complexity.</p>
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
