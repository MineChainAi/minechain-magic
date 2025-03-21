import { useState, useEffect } from 'react';
import { Menu, X, Sparkle, Gem, Package, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { PaymentModal } from './PaymentModal';
import { UserProfileButton } from './UserProfileButton';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "py-2 bg-[#131516]/90 backdrop-blur-md border-b border-[#41474D]/20" : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center cursor-pointer"
          >
            <span className="text-white font-semibold text-xl">MineChain<span className="text-[#29B6F6]">.ai</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <div 
              onClick={() => navigate('/about')} 
              className="relative group text-white/80 hover:text-white transition-colors font-medium cursor-pointer"
            >
              <span className="flex items-center gap-1">
                <Gem className="w-4 h-4 text-[#9b87f5]" />
                <span>Full-Stack Miners™</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] group-hover:w-full transition-all duration-300"></span>
            </div>
            
            <div 
              onClick={() => navigate('/how-it-works')} 
              className="relative group text-white/80 hover:text-white transition-colors font-medium cursor-pointer"
            >
              <span className="flex items-center gap-1">
                <Sparkle className="w-4 h-4 text-[#D946EF]" />
                <span>How It Works</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D946EF] to-[#F97316] group-hover:w-full transition-all duration-300"></span>
            </div>
            
            <div 
              onClick={() => navigate('/block-cycle')} 
              className="relative group text-white/80 hover:text-white transition-colors font-medium cursor-pointer"
            >
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#F97316]" />
                <span>Block Cycle</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] group-hover:w-full transition-all duration-300"></span>
            </div>
            
            <div 
              onClick={() => navigate('/block')} 
              className="relative group text-white/80 hover:text-white transition-colors font-medium cursor-pointer"
            >
              <span className="flex items-center gap-1">
                <Package className="w-4 h-4 text-[#0EA5E9]" />
                <span>Stable-23</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] group-hover:w-full transition-all duration-300"></span>
            </div>
            
            {/* UserProfileButton moved here, next to Stable-23 */}
            <div className="ml-3">
              <UserProfileButton />
            </div>
          </div>
          
          {/* Mobile Menu Button - For mobile view only */}
          {isMobile && (
            <div className="flex items-center">
              {/* On mobile, keep the UserProfileButton visible */}
              <UserProfileButton />
              
              <button 
                className="ml-4 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#131516]/90 backdrop-blur-md border-b border-[#41474D]/20 z-50">
          <div className="container mx-auto p-4 flex flex-col space-y-4">
            <div 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2 py-2 cursor-pointer" 
              onClick={() => {
                navigate('/about');
                setIsMobileMenuOpen(false);
              }}
            >
              <Gem className="w-4 h-4 text-[#9b87f5]" />
              <span>Full-Stack Miners™</span>
            </div>
            
            <div 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2 py-2 cursor-pointer"
              onClick={() => {
                navigate('/how-it-works');
                setIsMobileMenuOpen(false);
              }}
            >
              <Sparkle className="w-4 h-4 text-[#D946EF]" />
              <span>How It Works</span>
            </div>
            
            <div 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2 py-2 cursor-pointer"
              onClick={() => {
                navigate('/block-cycle');
                setIsMobileMenuOpen(false);
              }}
            >
              <Clock className="w-4 h-4 text-[#F97316]" />
              <span>Block Cycle</span>
            </div>
            
            <div 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2 py-2 cursor-pointer"
              onClick={() => {
                navigate('/block');
                setIsMobileMenuOpen(false);
              }}
            >
              <Package className="w-4 h-4 text-[#0EA5E9]" />
              <span>Stable-23 Block</span>
            </div>
            
            <div 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2 py-2 cursor-pointer"
              onClick={() => {
                window.open('/whitepaper.pdf', '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              <FileText className="w-4 h-4 text-[#0EA5E9]" />
              <span>Whitepaper</span>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
