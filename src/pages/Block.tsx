
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gem, Package, Zap, ChevronDown, Sparkle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PaymentModal } from '@/components/PaymentModal';

export default function Block() {
  const [showSpecs, setShowSpecs] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1724] text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        {/* Hero Section */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl p-0.5 shadow-lg shadow-purple-500/20">
                <div className="absolute inset-0 bg-[#0F1724] rounded-2xl m-0.5 flex items-center justify-center">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#0EA5E9]">
              Stable-23 Block Drop
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Own a piece of the future with our limited-edition Stable-23 super block. 
              242 unique AI mining NFTs, each generating ongoing rewards from our 
              full-stack AI infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-electric-orange hover:bg-electric-orange/90 text-white px-8 py-6 text-lg"
                onClick={() => setShowPaymentModal(true)}
              >
                <Gem className="mr-2 h-5 w-5" />
                Purchase Block • $695
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </div>
          </motion.div>
        </section>
        
        {/* Block Visualization */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 bg-gradient-to-b from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Super Block Architecture</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Each Stable-23 block contains 242 individual NFTs, representing computation units in our 
              decentralized AI infrastructure network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gem className="h-5 w-5 text-[#9b87f5]" />
                  Ownership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80">Full block ownership via NFT</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80">Automatic monthly USDC rewards</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80">Access to owner dashboard</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkle className="h-5 w-5 text-[#D946EF]" />
                  Technical Specs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Enterprise-grade AI hardware</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">242 compute NFTs per super block</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Optimized for AI training & inference</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#0EA5E9]" />
                  Revenue Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Monthly USDC distributions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Revenue from AI workload fees</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Transparent distribution model</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
        
        {/* Block Features */}
        <section id="features" className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-4"
            >
              Why Invest in Stable-23 Blocks?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/70 max-w-3xl mx-auto"
            >
              Our unique model combines the best aspects of physical mining operations with the advantages of digital ownership.
            </motion.p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CoinIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Passive Income Stream</h3>
              <p className="text-white/70">Receive monthly USDC distributions from AI computation revenue, creating a reliable passive income stream.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Infrastructure Exposure</h3>
              <p className="text-white/70">Gain exposure to the rapidly growing AI infrastructure market without the technical complexities.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Asset Ownership</h3>
              <p className="text-white/70">Own a tangible digital asset with real-world utility, backed by physical AI computing infrastructure.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Decentralized AI Revolution</h3>
              <p className="text-white/70">Be part of the movement to decentralize AI compute infrastructure and democratize access.</p>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="mb-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-between items-center"
            >
              <h2 className="text-3xl font-bold text-white">Technical Specifications</h2>
              <Button 
                variant="ghost" 
                className="text-white/70 hover:text-white hover:bg-white/5"
                onClick={() => setShowSpecs(!showSpecs)}
              >
                {showSpecs ? "Hide Details" : "Show Details"}
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${showSpecs ? "rotate-180" : ""}`} />
              </Button>
            </motion.div>
          </div>
          
          {showSpecs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Tabs defaultValue="hardware" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#131A2C]">
                  <TabsTrigger value="hardware">Hardware</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="network">Network</TabsTrigger>
                </TabsList>
                <TabsContent value="hardware" className="bg-[#131A2C]/50 p-6 rounded-b-lg border border-t-0 border-white/5">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Specification</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Processor</TableCell>
                        <TableCell>Custom enterprise-grade AI processors</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Memory</TableCell>
                        <TableCell>High-bandwidth HBM2e memory</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Storage</TableCell>
                        <TableCell>NVMe SSD with optimized I/O paths</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cooling</TableCell>
                        <TableCell>Liquid cooling system with 24/7 monitoring</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="performance" className="bg-[#131A2C]/50 p-6 rounded-b-lg border border-t-0 border-white/5">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Training Throughput</TableCell>
                        <TableCell>250+ TFLOPS per block</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Inference Capacity</TableCell>
                        <TableCell>Optimized for large language models</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Energy Efficiency</TableCell>
                        <TableCell>85% more efficient than consumer GPUs</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Uptime</TableCell>
                        <TableCell>99.9% guaranteed uptime</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="network" className="bg-[#131A2C]/50 p-6 rounded-b-lg border border-t-0 border-white/5">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Data Center Locations</TableCell>
                        <TableCell>North America, Europe, Asia</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Bandwidth</TableCell>
                        <TableCell>100Gbps network connectivity</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Security</TableCell>
                        <TableCell>Enterprise-grade with 24/7 monitoring</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Workload Distribution</TableCell>
                        <TableCell>Intelligent load balancing across nodes</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </section>
        
        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 p-12 rounded-2xl border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Secure Your Stable-23 Block Today</h2>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            With only a limited number available, the Stable-23 block drop represents a unique 
            opportunity to be part of the decentralized AI mining revolution.
          </p>
          <Button 
            size="lg" 
            className="bg-electric-orange hover:bg-electric-orange/90 text-white px-8 py-6 text-lg"
            onClick={() => setShowPaymentModal(true)}
          >
            <Gem className="mr-2 h-5 w-5" />
            Purchase Block • $695
          </Button>
          <p className="mt-4 text-sm text-white/50">Secure payment options available • Limited quantity</p>
        </motion.section>
      </main>
      
      <Footer />
      
      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal 
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}

// Custom coin icon component
function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Custom coin icon component
function CoinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}
