
import { Sparkles } from 'lucide-react';

export function HeroTitle() {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative">
      <div className="absolute -top-12 right-1/4 transform rotate-12 bg-electric-orange/80 text-white text-xs px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg shadow-electric-orange/20">
        <Sparkles className="h-3 w-3" />
        <span>EXCLUSIVE</span>
      </div>
      
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-orange via-neon-cyan to-cosmic-purple block mb-2">
        Stable Block Drop
      </span>
      <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/70 block mb-2">
        <span className="relative inline-block">
          Claim 
        </span>
        <span className="mx-2">a</span>
        <span className="relative inline-block">
          Piece 
          <span className="absolute -top-6 -right-6">
            ✨
          </span>
        </span>
      </span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-electric-orange to-cosmic-purple">
        of Compute Power
      </span>
    </h1>
  );
}
