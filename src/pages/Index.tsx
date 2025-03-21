
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ComputePowerDashboard from '@/components/ComputePowerDashboard';
import AIWorkloadsBoard from '@/components/AIWorkloadsBoard';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Roadmap from '@/components/Roadmap';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { EdgeFunctionTest } from '@/components/EdgeFunctionTest';
import { BlockBoard } from '@/components/BlockBoard';
import { BlockHowItWorks } from '@/components/BlockHowItWorks';
import { BlockPoweringFuture } from '@/components/BlockPoweringFuture';
import { BlockCallToAction } from '@/components/BlockCallToAction';

const Index = () => {
  // Add console log to verify the component is rendering
  useEffect(() => {
    console.log('MineChain home page component mounted');
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100, // Offset for the fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen overflow-x-hidden"
      >
        <Navbar />
        <main>
          <Hero />
          
          <div id="block-board" className="container mx-auto px-4 py-16">
            <BlockBoard className="mb-16" />
            <BlockHowItWorks />
            <BlockPoweringFuture />
            <BlockCallToAction className="my-16" />
          </div>
          
          <ComputePowerDashboard />
          <AIWorkloadsBoard />
          <About />
          <HowItWorks />
          <Roadmap />
          <Newsletter />
          <EdgeFunctionTest />
        </main>
        <Footer />
        
        {/* Floating back-to-top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-cosmic-purple hover:bg-cosmic-purple/90 flex items-center justify-center text-white shadow-lg transition-all duration-300 z-40"
        >
          <svg 
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
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
