
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BasicInfoSection } from './sections/BasicInfoSection';
import { WalletAddressesSection } from './sections/WalletAddressesSection';

export interface ProfileFormData {
  username: string;
  fullName: string;
  phoneNumber: string;
  usdcAddress: string;
  btcAddress: string;
}

interface ProfileFormProps {
  initialData: ProfileFormData;
  onSubmit: (data: ProfileFormData) => Promise<void>;
  isUpdating: boolean;
}

export const ProfileForm = ({ 
  initialData, 
  onSubmit, 
  isUpdating 
}: ProfileFormProps) => {
  const [formData, setFormData] = useState<ProfileFormData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <BasicInfoSection 
        username={formData.username}
        fullName={formData.fullName}
        phoneNumber={formData.phoneNumber}
        onChange={handleChange}
      />

      <WalletAddressesSection 
        usdcAddress={formData.usdcAddress}
        btcAddress={formData.btcAddress}
        onChange={handleChange}
      />

      <Button
        type="submit"
        className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90"
        disabled={isUpdating}
      >
        {isUpdating ? 'Updating...' : 'Update Profile'}
      </Button>
    </form>
  );
};
