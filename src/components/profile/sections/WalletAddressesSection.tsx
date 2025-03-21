
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface WalletAddressesSectionProps {
  usdcAddress: string;
  btcAddress: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WalletAddressesSection = ({
  usdcAddress,
  btcAddress,
  onChange
}: WalletAddressesSectionProps) => {
  return (
    <div className="pt-2 border-t border-cosmic-purple/20">
      <h3 className="text-md font-medium mb-4">Wallet Addresses</h3>
      
      <div className="space-y-2">
        <Label htmlFor="usdcAddress">USDC Receive Address (ERC20 or Base)</Label>
        <Input
          id="usdcAddress"
          value={usdcAddress}
          onChange={onChange}
          placeholder="0x..."
          className="bg-background/50 border-cosmic-purple/30"
        />
        <p className="text-xs text-white/50">
          For receiving USDC rewards
        </p>
      </div>
      
      <div className="space-y-2 mt-4">
        <Label htmlFor="btcAddress">BTC Receive Address</Label>
        <Input
          id="btcAddress"
          value={btcAddress}
          onChange={onChange}
          placeholder="bc1..."
          className="bg-background/50 border-cosmic-purple/30"
        />
        <p className="text-xs text-white/50">
          For receiving BTC bonus drops
        </p>
      </div>
    </div>
  );
};
