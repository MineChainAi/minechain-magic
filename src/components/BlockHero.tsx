
import { Sparkles, Gem, Coins } from 'lucide-react';
import { HeroImage } from './hero/HeroImage';
import { HeroContent } from './hero/HeroContent';
import { HeroBackground } from './hero/HeroBackground';

export function BlockHero() {
  return (
    <section className="mb-16 relative">
      <HeroBackground />
      
      {/* Static decorative icons instead of animated ones */}
      <div className="absolute top-10 right-1/4 z-10">
        <Sparkles className="text-electric-orange w-6 h-6" />
      </div>
      
      <div className="absolute bottom-10 left-1/4 z-10">
        <Gem className="text-neon-cyan w-6 h-6" />
      </div>

      <div className="absolute top-1/3 left-10 z-10">
        <Coins className="text-cosmic-purple w-6 h-6" />
      </div>
      
      {/* Static background elements */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-electric-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <HeroImage />
        </div>
        
        <HeroContent />
      </div>
    </section>
  );
}
