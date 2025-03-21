
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface CompletedStageProps {
  simulationMode: boolean;
}

export const CompletedStage = ({ simulationMode }: CompletedStageProps) => {
  return (
    <div className="text-center py-8 space-y-6">
      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
        <Check size={32} className="text-green-500" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-white">
          {simulationMode ? "Simulation Completed!" : "Payment Complete!"}
        </h4>
        <p className="text-white/70 mt-2">
          Your MineChain Block is now ready
        </p>
      </div>
      <Button 
        onClick={() => window.location.href = '/dashboard'}
        className="w-full bg-electric-orange hover:bg-electric-orange/90 text-white"
      >
        View My Dashboard
      </Button>
    </div>
  );
};
