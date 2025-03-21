
import { motion } from 'framer-motion';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";

export function CycleOverview() {
  // Cycle data for the table
  const cycleData = [
    { metric: "Block Duration", value: "1 Hour" },
    { metric: "Blocks per Day", value: "24" },
    { metric: "Blocks per Month", value: "720" },
    { metric: "Lease Term", value: "30-Day Cycle" },
    { metric: "Payout", value: "In USDC (per block)" },
    { metric: "Average Hourly Yield", value: "$0.50 - $0.70 USDC" },
    { metric: "Runtime", value: "24/7/365" },
    { metric: "Hardware", value: "Enterprise NVIDIA AI Fleet" }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute left-0 w-1/2 h-full bg-gradient-to-r from-cosmic-purple/5 to-transparent top-0"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto relative z-10"
      >
        <div className="bg-[#151822] border border-white/10 rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-electric-orange">$</span> Cycle Overview
            </h2>
            <p className="text-white/60 mt-2">The definitive metrics of the MineChain block system</p>
          </div>
          
          <div className="p-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 bg-[#1A1F2C]">
                  <TableHead className="text-white font-semibold">Metric</TableHead>
                  <TableHead className="text-white font-semibold">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cycleData.map((row, index) => (
                  <TableRow 
                    key={index} 
                    className={`border-white/10 ${index % 2 === 0 ? 'bg-[#1A1F2C]/30' : 'bg-[#151822]'}`}
                  >
                    <TableCell className="font-medium text-white/90">{row.metric}</TableCell>
                    <TableCell className="text-neon-cyan font-mono">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="bg-[#1A1F2C]/80 p-4 border-t border-white/10">
            <p className="text-white/70 text-sm italic">
              * All metrics verified and tracked on-chain. Complete transparency for all block operators.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
