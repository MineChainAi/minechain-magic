
import { X } from 'lucide-react';

interface PaymentModalHeaderProps {
  simulationMode: boolean;
  onClose: () => void;
}

export const PaymentModalHeader = ({ simulationMode, onClose }: PaymentModalHeaderProps) => {
  return (
    <div className="flex justify-between items-center p-6 border-b border-white/10">
      <h3 className="text-xl font-bold text-white">
        {simulationMode ? "Mint a Block (Simulation)" : "Mint a Block"}
      </h3>
      <button 
        onClick={onClose}
        className="text-white/70 hover:text-white transition-colors"
      >
        <X size={24} />
      </button>
    </div>
  );
};
