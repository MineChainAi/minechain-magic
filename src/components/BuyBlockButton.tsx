
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/PaymentModal';
import { Gem } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BuyBlockButtonProps {
  simulationMode?: boolean;
  className?: string;
  price?: number;
  showPrice?: boolean;
  buttonText?: string;
  paymentCurrency?: 'USDC' | 'BTC' | 'ETH';
}

export function BuyBlockButton({ 
  simulationMode = false, 
  className = '',
  price = 495,
  showPrice = false,
  buttonText,
  paymentCurrency = 'USDC'
}: BuyBlockButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  const defaultText = simulationMode 
    ? 'Simulate Purchase' 
    : showPrice 
      ? `Mint a Block • $${price}` 
      : 'Mint a Block';
  const displayText = buttonText || defaultText;

  const handlePaymentClick = () => {
    // Check for Coinbase Commerce availability - this is just a mock check
    const isCoinbaseAvailable = true;
    
    if (!isCoinbaseAvailable && !simulationMode) {
      toast({
        title: "Payment provider unavailable",
        description: "Coinbase Commerce is currently unavailable. Please try again later or use simulation mode.",
        variant: "destructive"
      });
      return;
    }
    
    setShowPaymentModal(true);
  };

  return (
    <>
      <Button 
        onClick={handlePaymentClick}
        className={`bg-electric-orange hover:bg-electric-orange/90 text-white ${className}`}
      >
        <Gem className="mr-2 h-4 w-4" />
        {displayText}
      </Button>

      {showPaymentModal && (
        <PaymentModal 
          onClose={() => setShowPaymentModal(false)} 
          simulationMode={simulationMode}
          paymentCurrency={paymentCurrency}
        />
      )}
    </>
  );
}
