
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  Info, 
  ShoppingCart 
} from 'lucide-react';
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
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/PaymentModal';

// Simulated data for blocks
// In a real application, this would come from your database
interface BlockData {
  id: number;
  status: 'available' | 'sold';
  purchaseDate?: string;
  buyerWallet?: string;
}

// Props for the BlockBoard component
interface BlockBoardProps {
  className?: string;
}

export function BlockBoard({ className = '' }: BlockBoardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<BlockData | null>(null);
  const [blocks, setBlocks] = useState<BlockData[]>(() => {
    // Generate 243 blocks with random statuses (70% available, 30% sold)
    return Array.from({ length: 243 }, (_, i) => ({
      id: i + 1,
      status: Math.random() > 0.3 ? 'available' : 'sold',
      purchaseDate: Math.random() > 0.3 ? undefined : new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      buyerWallet: Math.random() > 0.3 ? undefined : `0x${Math.random().toString(16).substring(2, 14)}...${Math.random().toString(16).substring(2, 6)}`,
    }));
  });

  // Calculate the grid dimensions for the super block
  // We want a square-ish grid, so we'll use the square root of the number of blocks
  const gridSize = Math.ceil(Math.sqrt(blocks.length));
  
  // Handler for when a block is clicked
  const handleBlockClick = (block: BlockData) => {
    if (block.status === 'available') {
      setSelectedBlock(block);
      setShowPaymentModal(true);
    }
  };

  // Handler for when a purchase is completed
  const handlePurchaseComplete = () => {
    if (selectedBlock) {
      // Update the block status in our state
      setBlocks(blocks.map(block => 
        block.id === selectedBlock.id 
          ? { 
              ...block, 
              status: 'sold', 
              purchaseDate: new Date().toISOString().split('T')[0],
              buyerWallet: `0x${Math.random().toString(16).substring(2, 14)}...${Math.random().toString(16).substring(2, 6)}`
            } 
          : block
      ));
      
      // Close the payment modal
      setShowPaymentModal(false);
      setSelectedBlock(null);
    }
  };

  return (
    <div className={`${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Super Block Container with 3D-like border effects */}
        <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-1 md:p-2 rounded-xl border border-purple-500/30 shadow-xl shadow-purple-500/10 overflow-hidden">
          {/* Caption for the Super Block */}
          <div className="absolute top-0 left-0 right-0 text-center bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-blue-900/80 p-2 text-white text-sm font-bold z-10">
            MineChain Super Block - 243 Blocks
          </div>
          
          {/* Main grid of blocks */}
          <div 
            className="grid gap-1 p-4 md:p-8 mt-10"
            style={{ 
              gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${Math.ceil(blocks.length / gridSize)}, minmax(0, 1fr))` 
            }}
          >
            <TooltipProvider>
              {blocks.map((block) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: block.id * 0.001 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  onClick={() => handleBlockClick(block)}
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
                                handleBlockClick(block);
                              }}
                            >
                              <ShoppingCart className="w-4 h-4 mr-1" />
                              Mint Block #{block.id}
                            </Button>
                          </div>
                        )}
                      </div>
                    </HoverCardContent>
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
              ))}
            </TooltipProvider>
          </div>
        </div>
        
        {/* Block status legend */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500/70 rounded-full"></div>
            <span className="text-sm text-white/70">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500/70 rounded-full"></div>
            <span className="text-sm text-white/70">Sold</span>
          </div>
        </div>
        
        <div className="text-center mt-4 text-sm text-white/50">
          Click on an available block to mint • Hover for details
        </div>
      </motion.div>
      
      {showPaymentModal && selectedBlock && (
        <PaymentModal 
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedBlock(null);
          }}
          simulationMode={true}
        />
      )}
    </div>
  );
}
