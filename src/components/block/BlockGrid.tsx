
import { TooltipProvider } from "@/components/ui/tooltip";
import { Block } from './Block';
import { BlockData } from './types';

interface BlockGridProps {
  blocks: BlockData[];
  gridSize: number;
  onBlockClick: (block: BlockData) => void;
}

export function BlockGrid({ blocks, gridSize, onBlockClick }: BlockGridProps) {
  return (
    <div 
      className="grid gap-1 p-4 md:p-8 mt-10"
      style={{ 
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${Math.ceil(blocks.length / gridSize)}, minmax(0, 1fr))` 
      }}
    >
      <TooltipProvider>
        {blocks.map((block) => (
          <Block 
            key={block.id} 
            block={block} 
            onBlockClick={onBlockClick} 
          />
        ))}
      </TooltipProvider>
    </div>
  );
}
