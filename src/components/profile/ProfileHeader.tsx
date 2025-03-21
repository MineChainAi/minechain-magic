
import { ProfileAvatar } from './ProfileAvatar';

interface ProfileHeaderProps {
  avatarUrl: string | null;
  userId: string;
  fullName: string | null;
  email: string | null;
  onAvatarChange: (url: string) => void;
}

export const ProfileHeader = ({ 
  avatarUrl, 
  userId, 
  fullName, 
  email,
  onAvatarChange 
}: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <ProfileAvatar 
        avatarUrl={avatarUrl}
        userId={userId}
        fullName={fullName}
        email={email}
        onAvatarChange={onAvatarChange}
      />
      
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <p className="text-white/70 text-sm">{email}</p>
    </div>
  );
};
