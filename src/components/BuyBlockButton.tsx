
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/PaymentModal';
import { Gem } from 'lucide-react';

interface BuyBlockButtonProps {
  simulationMode?: boolean;
  className?: string;
  price?: number;
  showPrice?: boolean;
}

export function BuyBlockButton({ 
  simulationMode = false, 
  className = '',
  price = 495,
  showPrice = false
}: BuyBlockButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setShowPaymentModal(true)}
        className={`bg-electric-orange hover:bg-electric-orange/90 text-white ${className}`}
      >
        <Gem className="mr-2 h-4 w-4" />
        {simulationMode ? 'Simulate Purchase' : showPrice ? `Mint a Block • $${price}` : 'Mint a Block'}
      </Button>

      {showPaymentModal && (
        <PaymentModal 
          onClose={() => setShowPaymentModal(false)} 
          simulationMode={simulationMode}
        />
      )}
    </>
  );
}
