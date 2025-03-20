
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { CheckCircle2, CircleDot, CircleDashed, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-neural-pattern opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white/10 text-[#29B6F6] mb-4">
              Our Vision
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Building the Future of AI Mining on Cosmos
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto">
              MineChain is creating a decentralized AI compute infrastructure on Cosmos, powered by full-stack AI miners and the $MINE token.
            </p>
            <Button 
              size="lg"
              className="bg-[#0A1F33] hover:bg-[#0A1F33]/90 text-white border-none"
              onClick={() => {
                // Scroll to newsletter section
                document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Stay Updated <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Roadmap Timeline Section */}
      <section className="py-20 relative">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                MineChain Roadmap
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Our journey to building the future of decentralized AI mining
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
                  <span className="text-sm font-semibold text-[#29B6F6] block mb-1">Q2 2025</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Phase 1: Foundation & AI Compute Marketplace</h3>
                  <p className="text-white/70 mb-4">
                    Launching our initial marketplace and establishing the foundation for our AI mining infrastructure.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Deploy MineChain compute marketplace for AI mining</span>
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Launch NFT-backed compute blocks</span>
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Integrate Coinbase Commerce for USDC payments</span>
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Establish first AI workload partnerships</span>
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-8 md:mx-auto absolute left-0 md:left-1/2 md:-ml-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-[#131516] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#131516]" />
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
                  <div className="w-8 h-8 rounded-full bg-[#29B6F6] border-4 border-[#131516] flex items-center justify-center">
                    <CircleDot className="w-4 h-4 text-[#131516]" />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <span className="text-sm font-semibold text-[#29B6F6] block mb-1">Q4 2025</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Phase 2: Cosmos Blockchain Deployment</h3>
                  <p className="text-white/70 mb-4">
                    Integrating with the Cosmos ecosystem and establishing our blockchain infrastructure.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <CircleDot className="w-5 h-5 flex-shrink-0 text-[#29B6F6] mr-2" />
                      <span>Launch the MineChain blockchain on the Cosmos ecosystem</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="w-5 h-5 flex-shrink-0 text-[#29B6F6] mr-2" />
                      <span>Introduce IBC compatibility</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="w-5 h-5 flex-shrink-0 text-[#29B6F6] mr-2" />
                      <span>Deploy testnet for AI compute transactions</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="w-5 h-5 flex-shrink-0 text-[#29B6F6] mr-2" />
                      <span>Develop MineChain block explorer & validator incentives</span>
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
                className="flex flex-col md:flex-row mb-16 relative md:pl-0 pl-10"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-sm font-semibold text-[#29B6F6] block mb-1">Q1 2026</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Phase 3: $MINE Token & DeFi Integration</h3>
                  <p className="text-white/70 mb-4">
                    Launching our token and establishing governance and staking capabilities.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Launch $MINE token (Total Supply: 250M)</span>
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Enable staking & governance features</span>
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Integrate cross-chain AI workload payments</span>
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="mr-2 md:mr-0 md:ml-2 md:order-last">Expand AI miner leasing program</span>
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500" />
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-8 md:mx-auto absolute left-0 md:left-1/2 md:-ml-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gray-500 border-4 border-[#131516] flex items-center justify-center">
                    <CircleDashed className="w-4 h-4 text-[#131516]" />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 md:block hidden"></div>
              </motion.div>
              
              {/* Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col md:flex-row relative md:pl-0 pl-10"
              >
                <div className="md:w-1/2 md:pr-12 md:block hidden"></div>
                
                <div className="md:w-8 md:mx-auto absolute left-0 md:left-1/2 md:-ml-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gray-500 border-4 border-[#131516] flex items-center justify-center">
                    <CircleDashed className="w-4 h-4 text-[#131516]" />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <span className="text-sm font-semibold text-[#29B6F6] block mb-1">Q3 2026 & Beyond</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Phase 4: Decentralized AI Compute Scaling</h3>
                  <p className="text-white/70 mb-4">
                    Scaling our infrastructure globally and enabling advanced AI compute capabilities.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500 mr-2" />
                      <span>Build MineChain's AI-powered Layer 1 blockchain</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500 mr-2" />
                      <span>Expand decentralized AI mining pools</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500 mr-2" />
                      <span>Develop smart contract-powered compute leasing</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDashed className="w-5 h-5 flex-shrink-0 text-gray-500 mr-2" />
                      <span>Scale AI workloads for high-performance enterprises & Web3 projects</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Cosmos Section */}
      <section className="py-20 relative">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Cosmos?
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Building on Cosmos enables MineChain to create a scalable and interoperable AI mining ecosystem
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#2C2F33]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Scalability</h3>
                <p className="text-white/70">
                  Cosmos' modular framework allows seamless blockchain integration, perfect for our growing AI mining network.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#2C2F33]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">IBC Compatibility</h3>
                <p className="text-white/70">
                  MineChain will communicate with other Cosmos-based networks, enabling a rich ecosystem of AI services.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#2C2F33]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Interoperability</h3>
                <p className="text-white/70">
                  AI mining rewards and compute services can interact with other DeFi & Web3 ecosystems, maximizing utility.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter Section (Already in Components) */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Roadmap;
