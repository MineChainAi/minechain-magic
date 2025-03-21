
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
    // In a production environment, we would check for Coinbase Commerce API key
    // This is a simplified check for demonstration purposes
    const apiKeyExists = process.env.NODE_ENV === 'development' || 
                         process.env.COINBASE_COMMERCE_API_KEY || 
                         simulationMode;
    
    if (!apiKeyExists && !simulationMode) {
      toast({
        title: "Payment provider unavailable",
        description: "Coinbase Commerce is not configured. Please set up your COINBASE_COMMERCE_API_KEY in Vercel or use simulation mode.",
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
