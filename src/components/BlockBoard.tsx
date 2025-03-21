
import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { PaymentModal } from '@/components/PaymentModal';
import { BlockGrid } from './block/BlockGrid';
import { BlockLegend } from './block/BlockLegend';
import { SuperBlockContainer } from './block/SuperBlockContainer';
import { BlockData } from './block/types';

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

  // Count of available and sold blocks
  const availableBlocks = blocks.filter(block => block.status === 'available').length;
  const soldBlocks = blocks.length - availableBlocks;

  return (
    <div className={`${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <SuperBlockContainer>
          <BlockGrid 
            blocks={blocks} 
            gridSize={gridSize} 
            onBlockClick={handleBlockClick} 
          />
        </SuperBlockContainer>
        
        <BlockLegend 
          availableCount={availableBlocks} 
          soldCount={soldBlocks} 
        />
        
        <div className="text-center mt-4 text-sm text-white/50">
          Click on an available block to mint for $495 • Hover for details
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
