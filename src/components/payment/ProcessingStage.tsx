
import { Loader2 } from 'lucide-react';

export const ProcessingStage = () => {
  return (
    <div className="text-center py-8">
      <Loader2 size={48} className="animate-spin mx-auto mb-4 text-neon-cyan" />
      <p className="text-white/70">Preparing your payment...</p>
    </div>
  );
};
