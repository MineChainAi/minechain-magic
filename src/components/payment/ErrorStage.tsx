
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface ErrorStageProps {
  error: string | null;
  simulationMode: boolean;
  onInitiatePayment: () => void;
  onReset: () => void;
}

export const ErrorStage = ({ 
  error, 
  simulationMode, 
  onInitiatePayment, 
  onReset 
}: ErrorStageProps) => {
  return (
    <div className="text-center py-8 space-y-6">
      <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
        <AlertTriangle size={32} className="text-red-500" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-white">Payment Error</h4>
        <p className="text-white/70 mt-2">
          {error || "There was an error processing your payment"}
        </p>
      </div>
      <Button 
        onClick={onInitiatePayment}
        className="w-full bg-electric-orange hover:bg-electric-orange/90 text-white"
      >
        Try Again
      </Button>
      {!simulationMode && (
        <Button 
          onClick={onReset}
          variant="outline"
          className="w-full text-white"
        >
          Start Over
        </Button>
      )}
    </div>
  );
};
