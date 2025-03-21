
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function BlockSpecs() {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
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
  );
}
