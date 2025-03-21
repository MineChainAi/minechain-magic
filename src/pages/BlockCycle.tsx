
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlockCycleHero } from '@/components/block-cycle/BlockCycleHero';
import { WhatIsBlock } from '@/components/block-cycle/WhatIsBlock';
import { CycleOverview } from '@/components/block-cycle/CycleOverview';
import { WorkloadsPerBlock } from '@/components/block-cycle/WorkloadsPerBlock';
import { LiveTracker } from '@/components/block-cycle/LiveTracker';
import { WhyItMatters } from '@/components/block-cycle/WhyItMatters';
import { BlockCycleCallToAction } from '@/components/block-cycle/BlockCycleCallToAction';
import { motion } from 'framer-motion';

const BlockCycle = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Set page title
    document.title = "The Block Cycle | MineChain.ai";
  }, []);

  return (
    <div className="min-h-screen bg-midnight-navy text-white">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16"
      >
        <div className="container mx-auto px-4">
          <BlockCycleHero />
          <WhatIsBlock />
          <CycleOverview />
          <WorkloadsPerBlock />
          <LiveTracker />
          <WhyItMatters />
          <BlockCycleCallToAction />
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default BlockCycle;
