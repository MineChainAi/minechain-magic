
import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkle, Zap, Gem, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { PaymentModal } from './PaymentModal';
import { UserProfileButton } from './UserProfileButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
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
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "py-3 bg-[#131516]/90 backdrop-blur-md border-b border-[#41474D]/20" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-white font-semibold text-xl">MineChain<span className="text-[#29B6F6]">.ai</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/about" className="relative group text-white/80 hover:text-white transition-colors font-medium">
            <span className="flex items-center gap-1.5">
              <Gem className="w-4 h-4 text-[#9b87f5]" />
              <span>Full-Stack Miners™</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link to="/how-it-works" className="relative group text-white/80 hover:text-white transition-colors font-medium">
            <span className="flex items-center gap-1.5">
              <Sparkle className="w-4 h-4 text-[#D946EF]" />
              <span>How It Works</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D946EF] to-[#F97316] group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link to="/roadmap" className="relative group text-white/80 hover:text-white transition-colors font-medium">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#F97316]" />
              <span>Roadmap</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link to="/block" className="relative group text-white/80 hover:text-white transition-colors font-medium">
            <span className="flex items-center gap-1.5">
              <Package className="w-4 h-4 text-[#0EA5E9]" />
              <span>Stable-23 Block</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <a 
            href="/whitepaper.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative group text-white/80 hover:text-white transition-colors font-medium flex items-center"
          >
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#0EA5E9]" />
              <span>Whitepaper</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <Button
            className="bg-[#8B5CF6] hover:bg-[#7c4ef5] text-white border-none font-semibold px-5 py-2 shadow-lg shadow-cosmic-purple/30"
            onClick={() => setIsPaymentModalOpen(true)}
          >
            <Gem className="mr-2 h-4 w-4" />
            MINE BLOCKS
          </Button>
          
          <UserProfileButton />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <UserProfileButton />
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#131516]/90 backdrop-blur-md border-b border-[#41474D]/20">
          <div className="container mx-auto flex flex-col p-6 space-y-4">
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Gem className="w-4 h-4 text-[#9b87f5]" />
              Full-Stack Miners™
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkle className="w-4 h-4 text-[#D946EF]" />
              How It Works
            </Link>
            <Link 
              to="/roadmap" 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Zap className="w-4 h-4 text-[#F97316]" />
              Roadmap
            </Link>
            <Link 
              to="/block" 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Package className="w-4 h-4 text-[#0EA5E9]" />
              Stable-23 Block
            </Link>
            <a 
              href="/whitepaper.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="w-4 h-4 text-[#0EA5E9]" />
              Whitepaper
            </a>
            <Button
              className="bg-[#8B5CF6] hover:bg-[#7c4ef5] text-white w-full border-none font-semibold shadow-lg shadow-cosmic-purple/30 flex items-center justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsPaymentModalOpen(true);
              }}
            >
              <Gem className="mr-2 h-4 w-4" />
              MINE BLOCKS
            </Button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
