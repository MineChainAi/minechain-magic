
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface AwaitingPaymentStageProps {
  simulationMode: boolean;
  paymentCurrency: 'USDC' | 'BTC' | 'ETH';
  chargeUrl: string;
  onSimulatedPayment: () => void;
}

export const AwaitingPaymentStage = ({
  simulationMode,
  paymentCurrency,
  chargeUrl,
  onSimulatedPayment
}: AwaitingPaymentStageProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <div className="mb-4">
          <svg className="mx-auto w-16 h-16 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-white">Awaiting Payment</h4>
        <p className="text-white/70 mt-2">
          {simulationMode 
            ? "This is a simulation. Click the button below to simulate payment completion." 
            : `Complete your purchase using ${paymentCurrency} via Coinbase payment window`}
        </p>
      </div>
      
      {simulationMode ? (
        <Button 
          onClick={onSimulatedPayment}
          className="w-full bg-neon-cyan hover:bg-neon-cyan/90 text-white"
        >
          Simulate Successful Payment
        </Button>
      ) : (
        <Button 
          onClick={() => window.open(chargeUrl, '_blank')}
          className="w-full bg-neon-cyan hover:bg-neon-cyan/90 text-white"
        >
          Open Payment Window
          <ExternalLink size={16} className="ml-2" />
        </Button>
      )}
      
      <div className="bg-[#121C2D] border border-white/5 rounded-lg p-4 text-sm text-white/70">
        <p>
          <span className="font-medium text-white">
            {simulationMode ? "Note:" : "Tip:"}
          </span> {simulationMode 
            ? "This is a simulation for testing purposes only." 
            : "Keep this window open to automatically detect when your payment is complete."}
        </p>
      </div>
    </div>
  );
};
