
import { motion } from 'framer-motion';
import { CheckCircle2, CircleDashed, CircleDot } from 'lucide-react';

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-neural-pattern opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 text-blue-300 mb-4">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Roadmap
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Our path to building the future of decentralized AI mining
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-ml-[0.5px]"></div>
            
            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row mb-16 relative md:pl-0 pl-10"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <span className="text-sm font-semibold text-green-400 block mb-1">Completed</span>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Phase 1: Launch AI Compute Marketplace</h3>
                <p className="text-white/70 mb-4">
                  We've successfully launched our initial platform with virtual miner sales and reward distribution systems.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start md:justify-end">
                    <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Virtual miner sales platform</span>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                  </li>
                  <li className="flex items-start md:justify-end">
                    <span className="mr-2 md:mr-0 md:ml-2 md:order-last">USDC reward distribution</span>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                  </li>
                  <li className="flex items-start md:justify-end">
                    <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Initial GPU cluster deployment</span>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                  </li>
                </ul>
              </div>
              
              <div className="md:w-8 md:mx-auto absolute left-0 md:left-1/2 md:-ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-black flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:block hidden"></div>
            </motion.div>
            
            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row mb-16 relative md:pl-0 pl-10"
            >
              <div className="md:w-1/2 md:pr-12 md:block hidden"></div>
              
              <div className="md:w-8 md:mx-auto absolute left-0 md:left-1/2 md:-ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-black flex items-center justify-center">
                  <CircleDot className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <span className="text-sm font-semibold text-blue-400 block mb-1">In Progress</span>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Phase 2: Deploy Blockchain Infrastructure</h3>
                <p className="text-white/70 mb-4">
                  We're currently developing our blockchain infrastructure to enhance transparency and automation.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <CircleDot className="w-5 h-5 flex-shrink-0 text-blue-500 mr-2" />
                    <span>$MINE token launch and distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CircleDot className="w-5 h-5 flex-shrink-0 text-blue-500 mr-2" />
                    <span>Smart contract development</span>
                  </li>
                  <li className="flex items-start">
                    <CircleDot className="w-5 h-5 flex-shrink-0 text-blue-500 mr-2" />
                    <span>Governance system implementation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Phase 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row relative md:pl-0 pl-10"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <span className="text-sm font-semibold text-gray-400 block mb-1">Upcoming</span>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Phase 3: Scale Decentralized AI Mining Pools</h3>
                <p className="text-white/70 mb-4">
                  Our future plans involve scaling our infrastructure globally and increasing accessibility.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start md:justify-end">
                    <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Global GPU cluster expansion</span>
                    <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  </li>
                  <li className="flex items-start md:justify-end">
                    <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Advanced AI model deployment</span>
                    <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  </li>
                  <li className="flex items-start md:justify-end">
                    <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Cross-chain integration</span>
                    <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  </li>
                </ul>
              </div>
              
              <div className="md:w-8 md:mx-auto absolute left-0 md:left-1/2 md:-ml-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-gray-500 border-4 border-black flex items-center justify-center">
                  <CircleDashed className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:block hidden"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
