
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BasicInfoSectionProps {
  username: string;
  fullName: string;
  phoneNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BasicInfoSection = ({
  username,
  fullName,
  phoneNumber,
  onChange
}: BasicInfoSectionProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
          className="bg-background/50 border-cosmic-purple/30"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={fullName}
          onChange={onChange}
          placeholder="Full Name"
          className="bg-background/50 border-cosmic-purple/30"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          placeholder="+1 (555) 123-4567"
          className="bg-background/50 border-cosmic-purple/30"
        />
      </div>
    </>
  );
};
