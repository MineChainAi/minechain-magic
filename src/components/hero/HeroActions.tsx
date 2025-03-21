
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BuyBlockButton } from '@/components/BuyBlockButton';

export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
      <div className="relative">
        <div className="absolute inset-0 bg-electric-orange/20 rounded-md filter blur-md"></div>
        
        <BuyBlockButton 
          showPrice={true} 
          className="px-8 py-6 text-lg relative group overflow-hidden z-10"
          buttonText="Mint a Block • $495"
        />
      </div>
      
      <Button 
        variant="outline" 
        size="lg"
        className="border-white/20 hover:bg-white/5 bg-white/5 backdrop-blur-sm text-white px-8 py-6 text-lg group"
        onClick={() => document.getElementById('block-board')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Zap className="mr-2 h-5 w-5 text-neon-cyan" />
        View Block Board
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
