
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BlockInfoHoverCard } from './BlockInfoHoverCard';
import { BlockData } from './types';

interface BlockProps {
  block: BlockData;
  onBlockClick: (block: BlockData) => void;
}

export function Block({ block, onBlockClick }: BlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: block.id * 0.001 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      onClick={() => onBlockClick(block)}
      className={`
        relative aspect-square rounded-md cursor-pointer flex items-center justify-center
        ${block.status === 'available' 
          ? 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/50' 
          : 'bg-red-500/20 hover:bg-red-500/30 border border-red-500/50'}
        transition-all duration-200
      `}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="w-full h-full flex items-center justify-center">
            {block.status === 'available' ? (
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
            ) : (
              <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
            )}
          </button>
        </HoverCardTrigger>
        <BlockInfoHoverCard block={block} onBlockClick={onBlockClick} />
      </HoverCard>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="absolute bottom-0.5 right-0.5 text-[8px] text-white/50">{block.id}</span>
        </TooltipTrigger>
        <TooltipContent className="bg-[#131A2C] border-white/10 text-white">
          Block #{block.id}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}
