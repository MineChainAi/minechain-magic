
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileForm } from '@/components/profile/ProfileForm';
import { useProfileData } from '@/components/profile/useProfileData';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const {
    loading,
    updating,
    formData,
    avatarUrl,
    updateProfile,
    handleAvatarChange,
  } = useProfileData(user?.id);

  // Redirect to auth if no user
  if (!user) {
    navigate('/auth');
    return null;
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-midnight-navy/80 backdrop-blur-sm rounded-xl border border-cosmic-purple/20">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-24 w-24 rounded-full" />
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-4 w-48" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-16 flex items-center justify-center"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-midnight-navy/80 backdrop-blur-sm rounded-xl border border-cosmic-purple/20">
        <ProfileHeader 
          avatarUrl={avatarUrl}
          userId={user.id}
          fullName={formData.fullName}
          email={user.email}
          onAvatarChange={handleAvatarChange}
        />

        <ProfileForm 
          initialData={formData}
          onSubmit={updateProfile}
          isUpdating={updating}
        />
      </div>
    </motion.div>
  );
};

export default Profile;
