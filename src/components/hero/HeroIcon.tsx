
import { Package } from 'lucide-react';

export function HeroIcon() {
  return (
    <div className="flex justify-center md:justify-start mb-6">
      <div className="relative w-16 h-16 bg-gradient-to-br from-electric-orange via-cosmic-purple to-neon-cyan rounded-2xl p-0.5 shadow-lg shadow-electric-orange/30 z-10">
        <div className="absolute inset-0 bg-[#0F1724] rounded-2xl m-0.5 flex items-center justify-center">
          <Package className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
}
