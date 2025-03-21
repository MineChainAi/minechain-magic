
import { HeroContent } from '@/components/hero/HeroContent';
import { HeroImage } from '@/components/hero/HeroImage';
import { HeroBackground } from '@/components/hero/HeroBackground';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 pt-16">
        <HeroContent />
        
        <div className="w-full md:w-1/2 max-w-md mx-auto md:mx-0">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
