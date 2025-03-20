
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-6 md:px-10",
        isScrolled ? "py-3 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-[2px] bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
          </div>
          <span className="text-white font-semibold text-xl">MineChain<span className="text-blue-500">.ai</span></span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a>
          <a href="#roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</a>
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md border-none"
          >
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/5">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#how-it-works" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#roadmap" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Roadmap
            </a>
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md w-full border-none"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
