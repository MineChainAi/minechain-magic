
import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
        isScrolled ? "py-3 bg-[#131516]/90 backdrop-blur-md border-b border-[#41474D]/20" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <img 
              src="/lovable-uploads/caa8d77a-a6e6-4c81-a123-ab5eceeaf154.png" 
              alt="MineChain Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-semibold text-xl">MineChain<span className="text-[#29B6F6]">.ai</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">Full-Stack Miners™</Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link>
          <Link to="/roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</Link>
          <a 
            href="/whitepaper.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/80 hover:text-white transition-colors flex items-center"
          >
            <FileText className="w-4 h-4 mr-1" />
            Whitepaper
          </a>
          <Button
            className="bg-[#0A1F33] hover:bg-[#0A1F33]/90 text-white border-none"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#131516]/90 backdrop-blur-md border-b border-[#41474D]/20">
          <div className="flex flex-col p-6 space-y-4">
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Full-Stack Miners™
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/roadmap" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
            <a 
              href="/whitepaper.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-white transition-colors flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="w-4 h-4 mr-1" />
              Whitepaper
            </a>
            <Button
              className="bg-[#0A1F33] hover:bg-[#0A1F33]/90 text-white w-full border-none"
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
