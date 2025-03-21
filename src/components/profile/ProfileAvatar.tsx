
import { useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Camera, Loader2 } from 'lucide-react';

interface ProfileAvatarProps {
  avatarUrl: string | null;
  userId: string;
  fullName: string | null;
  email: string | null;
  onAvatarChange: (url: string) => void;
}

export const ProfileAvatar = ({ 
  avatarUrl, 
  userId, 
  fullName, 
  email,
  onAvatarChange 
}: ProfileAvatarProps) => {
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingAvatar(true);
      
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }
      
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${userId}-${Math.random()}.${fileExt}`;
      
      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);
        
      if (uploadError) {
        throw uploadError;
      }
      
      // Get public URL
      const { data } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);
        
      // Update avatar_url in state
      const newAvatarUrl = data.publicUrl;
      onAvatarChange(newAvatarUrl);
      
      // If old avatar exists and is different from default, delete it
      if (avatarUrl && avatarUrl.includes('avatars/')) {
        try {
          const oldFilePath = avatarUrl.split('/').pop();
          if (oldFilePath) {
            await supabase.storage
              .from('avatars')
              .remove([oldFilePath]);
          }
        } catch (deleteError) {
          console.error('Error deleting old avatar:', deleteError);
        }
      }
      
      toast({
        title: 'Avatar uploaded',
        description: 'Your profile picture has been updated.',
      });
      
    } catch (error: any) {
      toast({
        title: 'Error uploading avatar',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUploadingAvatar(false);
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="relative group">
      <Avatar className="h-24 w-24 ring-2 ring-cosmic-purple/50 cursor-pointer" onClick={handleAvatarClick}>
        <AvatarImage 
          src={avatarUrl || ''} 
          alt={fullName || email || 'Profile'} 
        />
        <AvatarFallback className="bg-cosmic-purple/30 text-2xl text-white">
          {fullName?.[0] || email?.[0]?.toUpperCase() || 'U'}
        </AvatarFallback>
      </Avatar>
      
      <div 
        className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        onClick={handleAvatarClick}
      >
        {uploadingAvatar ? (
          <Loader2 className="h-6 w-6 text-white animate-spin" />
        ) : (
          <Camera className="h-6 w-6 text-white" />
        )}
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={uploadAvatar}
        className="hidden"
        accept="image/*"
        disabled={uploadingAvatar}
      />
    </div>
  );
};
