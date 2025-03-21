
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlockCycleCallToAction() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-cosmic-purple/30 via-[#1A1F2C] to-electric-orange/30 rounded-lg p-8 md:p-12 border border-white/10 text-center relative overflow-hidden shadow-lg">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-purple/20 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-orange/20 via-transparent to-transparent opacity-60"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Claim Your Block in the Cycle
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Access AI infrastructure. Run real workloads. Earn USDC. 
              Limited to 243 blocks — secure yours before they're gone.
            </p>
            
            <div className="bg-[#151822]/80 border border-white/10 p-4 rounded-lg mb-8 inline-block">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-electric-orange">1 Hour</div>
                  <div className="text-white/60 text-sm">Per Block</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-cyan">~$0.58</div>
                  <div className="text-white/60 text-sm">Hourly USDC</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cosmic-purple">$495</div>
                  <div className="text-white/60 text-sm">One-time Fee</div>
                </div>
              </div>
            </div>
            
            <Link to="/block">
              <Button 
                size="lg" 
                className="bg-[#8B5CF6] hover:bg-[#7c4ef5] text-white border-none font-semibold px-8 py-6 text-lg shadow-lg shadow-cosmic-purple/30 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#8B5CF6] to-[#7c4ef5] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <Gem className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">MINE YOUR BLOCK NOW</span>
              </Button>
            </Link>
            
            <p className="mt-4 text-sm text-white/50">
              Secure payment options available • Limited quantity • One-time purchase
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
