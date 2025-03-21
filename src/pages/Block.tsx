
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
              Stable Block Drop – Own a Piece of the Future
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              243 Blocks | $695 Each | Limited Supply
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-electric-orange hover:bg-electric-orange/90 text-white px-8 py-6 text-lg"
                onClick={() => setShowPaymentModal(true)}
              >
                <Gem className="mr-2 h-5 w-5" />
                Mint Your Block • $695
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
        
        {/* Block Description */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16 bg-gradient-to-b from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">What is the Stable Block Drop?</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              The Stable Block Drop is your gateway to AI-powered mining ownership. Each block represents a fractionalized share of MineChain's AI compute infrastructure, generating real yield from AI workloads and secured by decentralized mining power.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gem className="h-5 w-5 text-[#9b87f5]" />
                  True AI Mining Ownership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80">Backed by real hardware generating revenue</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80">AI workload revenue streams</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80">Secure, transparent ownership</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkle className="h-5 w-5 text-[#D946EF]" />
                  Stable Yield Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Earnings paid in USDC</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Bonus rewards in Bitcoin (BTC)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-electric-orange mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Optimized for long-term returns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#131A2C] border-white/5 shadow-xl shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#0EA5E9]" />
                  No Hardware, No Hassle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">MineChain handles all setup</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Power, maintenance, & optimization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CoinIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80">Fully managed operation</p>
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
              How It Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/70 max-w-3xl mx-auto"
            >
              A simple, streamlined process to start generating rewards from AI compute infrastructure.
            </motion.p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Gem className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mint Your Block</h3>
              <p className="text-white/70">Secure your AI-powered mining block for $695 and join the MineChain ecosystem.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CoinIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Earn Rewards</h3>
              <p className="text-white/70">Receive stable USDC returns and bonus Bitcoin (BTC) distributions from AI workloads.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-[#131A2C] p-6 rounded-lg border border-white/5">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-white/70">Track earnings and growth inside the MineChain Innovation Hub with real-time analytics.</p>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Exclusive Benefits */}
        <section className="mb-16">
          <div className="mb-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-between items-center"
            >
              <h2 className="text-3xl font-bold text-white">Exclusive Benefits for Block Owners</h2>
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
                        <TableCell className="font-medium">Priority Access</TableCell>
                        <TableCell>First access to future MineChain expansions</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Governance Rights</TableCell>
                        <TableCell>Voting on ecosystem upgrades and improvements</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AI Compute Leasing</TableCell>
                        <TableCell>Discounted rates for direct AI compute leasing</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Community Access</TableCell>
                        <TableCell>Exclusive owner-only community and events</TableCell>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">🚀 Secure Your Block – Limited to 243 Blocks</h2>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            💎 Own AI Infrastructure. Earn USDC. Get Bonus BTC.
          </p>
          <Button 
            size="lg" 
            className="bg-electric-orange hover:bg-electric-orange/90 text-white px-8 py-6 text-lg"
            onClick={() => setShowPaymentModal(true)}
          >
            <Gem className="mr-2 h-5 w-5" />
            🔗 Mint Your Block Now
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
