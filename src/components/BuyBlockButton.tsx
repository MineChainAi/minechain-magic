
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/PaymentModal';

interface BuyBlockButtonProps {
  simulationMode?: boolean;
  className?: string;
}

export function BuyBlockButton({ simulationMode = false, className = '' }: BuyBlockButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setShowPaymentModal(true)}
        className={`bg-electric-orange hover:bg-electric-orange/90 text-white ${className}`}
      >
        {simulationMode ? 'Simulate Purchase' : 'Buy a Block'}
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
