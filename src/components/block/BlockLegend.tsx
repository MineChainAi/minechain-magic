
interface BlockLegendProps {
  availableCount: number;
  soldCount: number;
}

export function BlockLegend({ availableCount, soldCount }: BlockLegendProps) {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500/70 rounded-full"></div>
        <span className="text-sm text-white/70">Available • {availableCount} Blocks</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500/70 rounded-full"></div>
        <span className="text-sm text-white/70">Sold • {soldCount} MineChain Reserve</span>
      </div>
    </div>
  );
}
