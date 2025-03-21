
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/PaymentModal';
import { Gem } from 'lucide-react';

interface BuyBlockButtonProps {
  simulationMode?: boolean;
  className?: string;
  price?: number;
  showPrice?: boolean;
  buttonText?: string;
}

export function BuyBlockButton({ 
  simulationMode = false, 
  className = '',
  price = 495,
  showPrice = false,
  buttonText
}: BuyBlockButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  const defaultText = simulationMode ? 'Simulate Purchase' : showPrice ? `Mint a Block • $${price}` : 'Mint a Block';
  const displayText = buttonText || defaultText;

  return (
    <>
      <Button 
        onClick={() => setShowPaymentModal(true)}
        className={`bg-electric-orange hover:bg-electric-orange/90 text-white ${className}`}
      >
        <Gem className="mr-2 h-4 w-4" />
        {displayText}
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
