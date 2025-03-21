
import { Globe, Coins, Zap, ArrowRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutWhyMineChain = () => {
  return (
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
  );
};

export default AboutWhyMineChain;
