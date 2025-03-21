
import { CreditCard } from 'lucide-react';

export function HeroPriceInfo() {
  return (
    <p className="text-xl text-white/80 mb-8 relative glass px-4 py-3 rounded-lg border border-white/10">
      <span className="absolute -top-3 -right-2 text-electric-orange">
        <CreditCard className="h-5 w-5" />
      </span>
      <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent font-semibold">
        243 Blocks | $495 Each | Limited Supply
      </span>
    </p>
  );
}
