
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PaymentModal } from '@/components/PaymentModal';
import { BlockHero } from '@/components/BlockHero';
import { BlockFeatures } from '@/components/BlockFeatures';
import { InvestorROIBreakdown } from '@/components/InvestorROIBreakdown';
import { BoardSection } from '@/components/BoardSection';
import { BlockHowItWorks } from '@/components/BlockHowItWorks';
import { BlockSpecs } from '@/components/BlockSpecs';
import { BlockPoweringFuture } from '@/components/BlockPoweringFuture';
import { BlockCallToAction } from '@/components/BlockCallToAction';

export default function Block() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F1724] text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        <BlockHero />
        <BlockFeatures />
        <InvestorROIBreakdown />
        <BoardSection />
        <BlockHowItWorks />
        <BlockSpecs />
        <BlockPoweringFuture />
        <BlockCallToAction />
      </main>
      
      <Footer />
      
      {showPaymentModal && (
        <PaymentModal 
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}
