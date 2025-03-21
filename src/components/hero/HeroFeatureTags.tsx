
export function HeroFeatureTags() {
  return (
    <div className="mt-8 pt-6 border-t border-white/10">
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <div className="flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-purple/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cosmic-purple/30">
          <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
          <span className="text-xs text-white/80">High Performance AI</span>
        </div>
        
        <div className="flex items-center gap-2 bg-gradient-to-r from-electric-orange/20 to-electric-orange/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-electric-orange/30">
          <span className="w-2 h-2 rounded-full bg-electric-orange"></span>
          <span className="text-xs text-white/80">USDC Rewards</span>
        </div>
        
        <div className="flex items-center gap-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon-cyan/30">
          <span className="w-2 h-2 rounded-full bg-cosmic-purple"></span>
          <span className="text-xs text-white/80">100% Passive</span>
        </div>
      </div>
    </div>
  );
}
