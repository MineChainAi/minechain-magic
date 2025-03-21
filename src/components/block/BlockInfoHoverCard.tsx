
import { ShoppingCart } from 'lucide-react';
import { HoverCardContent } from "@/components/ui/hover-card";
import { Button } from '@/components/ui/button';
import { BlockData } from './types';

interface BlockInfoHoverCardProps {
  block: BlockData;
  onBlockClick: (block: BlockData) => void;
}

export function BlockInfoHoverCard({ block, onBlockClick }: BlockInfoHoverCardProps) {
  return (
    <HoverCardContent className="bg-[#131A2C] border-white/10 text-white w-64">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-bold">Block #{block.id}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            block.status === 'available' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-red-500/20 text-red-400'
          }`}>
            {block.status === 'available' ? 'Available' : 'Sold'}
          </span>
        </div>
        
        {block.status === 'sold' && (
          <>
            <div className="text-xs text-white/70">
              <span className="font-medium text-white/90">Purchase Date:</span> {block.purchaseDate}
            </div>
            {block.buyerWallet && (
              <div className="text-xs text-white/70">
                <span className="font-medium text-white/90">Owner:</span> {block.buyerWallet}
              </div>
            )}
          </>
        )}
        
        {block.status === 'available' && (
          <div className="mt-2">
            <Button 
              size="sm" 
              className="w-full bg-electric-orange hover:bg-electric-orange/90 text-white"
              onClick={(e) => {
                e.stopPropagation();
                onBlockClick(block);
              }}
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Mint Block #{block.id} • $495
            </Button>
          </div>
        )}
      </div>
    </HoverCardContent>
  );
}
