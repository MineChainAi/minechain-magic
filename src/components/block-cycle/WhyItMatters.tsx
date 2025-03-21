
import { motion } from 'framer-motion';
import { CheckCircle, Clock, DollarSign, Shield } from 'lucide-react';

export function WhyItMatters() {
  // Define the key points to highlight
  const keyPoints = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Proof of Workload",
      description: "Every block runs real AI jobs with transparent tracking—no simulations, no vapor. This is real infrastructure doing real work."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-electric-orange" />,
      title: "Payment in Truth",
      description: "Payouts in USDC, not speculative tokens or promises. Stable value backed by actual compute services rendered."
    },
    {
      icon: <Clock className="h-8 w-8 text-neon-cyan" />,
      title: "24/7/365 Grind",
      description: "Your block never sleeps. Round-the-clock operation means continuous earnings from global AI demand."
    },
    {
      icon: <Shield className="h-8 w-8 text-cosmic-purple" />,
      title: "Blockchain Secured",
      description: "All blocks, workloads, and payments recorded on-chain. Immutable ledger of your participation and earnings."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-neural-pattern"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-electric-orange">?</span> Why It Matters
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            MineChain isn't another crypto project. We're building infrastructure that matters—where 
            value is earned, not manufactured through financial engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1F2C] border border-white/10 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-[#151822] rounded-lg">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-white/70">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-[#151822] border border-white/10 rounded-lg text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              This Isn't Hype—It's Compute With Consequence
            </h3>
            <p className="text-white/70">
              While others mint empty tokens, we mine time—leasing real AI compute, running 
              real workloads, generating real value. Your block is part of something bigger: 
              a distributed AI compute network that matters.
            </p>
            <div className="mt-6 font-mono text-xs text-white/50">
              <code className="bg-[#1A1F2C] p-2 rounded">
                # MineChain | Mine real AI. Run real workloads. Get paid in USDC.
              </code>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
