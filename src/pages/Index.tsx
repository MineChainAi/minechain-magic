
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
import { BlockHero } from '@/components/BlockHero';
import { BlockHowItWorks } from '@/components/BlockHowItWorks';
import { BlockBoard } from '@/components/BlockBoard';
import { BlockPoweringFuture } from '@/components/BlockPoweringFuture';
import { BlockCallToAction } from '@/components/BlockCallToAction';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
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

  // Add a console log to verify the component is being rendered
  useEffect(() => {
    console.log('Index home page component rendered successfully');
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
        <main className="container mx-auto px-4 py-12 md:py-16">
          <Hero />
          
          <div className="mt-16 md:mt-24">
            <BlockHero />
          </div>
          
          <div className="mt-16 md:mt-24" id="block-board">
            <BlockBoard className="mb-16" />
          </div>
          
          <div className="mt-16 md:mt-24" id="features">
            <BlockHowItWorks />
          </div>
          
          <div className="mt-16 md:mt-24">
            <BlockPoweringFuture />
          </div>
          
          <div className="mt-16 md:mt-24">
            <BlockCallToAction className="mb-16" />
          </div>
          
          <div className="mt-16 md:mt-24">
            <ComputePowerDashboard />
          </div>
          
          <div className="mt-16 md:mt-24">
            <AIWorkloadsBoard />
          </div>
          
          <div className="mt-16 md:mt-24">
            <About />
          </div>
          
          <div className="mt-16 md:mt-24">
            <HowItWorks />
          </div>
          
          <div className="mt-16 md:mt-24">
            <Roadmap />
          </div>
          
          <div className="mt-16 md:mt-24">
            <Newsletter />
          </div>
          
          <div className="mt-16 md:mt-24">
            <EdgeFunctionTest />
          </div>
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
