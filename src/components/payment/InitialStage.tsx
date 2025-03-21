
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface InitialStageProps {
  simulationMode: boolean;
  paymentCurrency: 'USDC' | 'BTC' | 'ETH';
  usdPrice: number;
  blockPrice: number;
  onInitiatePayment: () => void;
}

export const InitialStage = ({
  simulationMode,
  paymentCurrency,
  usdPrice,
  blockPrice,
  onInitiatePayment
}: InitialStageProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-[#121C2D] border border-white/5 rounded-lg p-4">
        <p className="text-white/70 mb-2">Total price:</p>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">${usdPrice} USD</div>
          <div className="text-sm text-white/60">
            {paymentCurrency === 'USDC' ? 
              '≈ ' + usdPrice + ' USDC' : 
              paymentCurrency === 'BTC' ? 
                '≈ ' + blockPrice + ' BTC' : 
                '≈ ETH equivalent'}
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-medium text-white">You'll receive:</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check size={18} className="text-neon-cyan mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/70">1 MineChain Stable Block</span>
          </li>
          <li className="flex items-start">
            <Check size={18} className="text-neon-cyan mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/70">USDC Rewards & Bonus BTC Distributions</span>
          </li>
          <li className="flex items-start">
            <Check size={18} className="text-neon-cyan mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/70">Access to MineChain Innovation Hub</span>
          </li>
        </ul>
      </div>
      
      <Button 
        onClick={onInitiatePayment}
        className="w-full bg-electric-orange hover:bg-electric-orange/90 text-white crypto-glow"
      >
        {simulationMode ? 
          "Simulate Payment" : 
          `Pay with ${paymentCurrency === 'USDC' ? 'USDC' : paymentCurrency}`}
      </Button>
      
      <p className="text-xs text-center text-white/50">
        {simulationMode ? 
          "Simulation mode - no real payment will be processed" : 
          "Secure payment processing by Coinbase Commerce"}
      </p>
    </div>
  );
};
