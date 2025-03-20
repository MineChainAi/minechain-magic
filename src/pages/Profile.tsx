
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Camera, Loader2 } from 'lucide-react';

type Profile = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
};

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    async function getProfile() {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.error('Error fetching profile:', error);
        toast({
          title: 'Error fetching profile',
          description: error.message,
          variant: 'destructive',
        });
      } else if (data) {
        setProfile(data);
        setUsername(data.username || '');
        setFullName(data.full_name || '');
        setAvatarUrl(data.avatar_url);
      }
      
      setLoading(false);
    }

    getProfile();
  }, [user, navigate]);

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    setUpdating(true);
    
    const updates = {
      id: user.id,
      username,
      full_name: fullName,
      avatar_url: avatarUrl,
      updated_at: new Date().toISOString(),
    };
    
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);
      
    if (error) {
      toast({
        title: 'Error updating profile',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully.',
      });
      setProfile(prev => prev ? { ...prev, ...updates } : null);
    }
    
    setUpdating(false);
  };

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingAvatar(true);
      
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }
      
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${user?.id}-${Math.random()}.${fileExt}`;
      
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
        
      // Update avatar_url in profiles
      const newAvatarUrl = data.publicUrl;
      setAvatarUrl(newAvatarUrl);
      
      // If old avatar exists and is different from default, delete it
      if (profile?.avatar_url && profile.avatar_url.includes('avatars/')) {
        try {
          const oldFilePath = profile.avatar_url.split('/').pop();
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

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="animate-pulse">Loading profile...</div>
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
        <div className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <Avatar className="h-24 w-24 ring-2 ring-cosmic-purple/50 cursor-pointer" onClick={handleAvatarClick}>
              <AvatarImage 
                src={avatarUrl || ''} 
                alt={profile?.full_name || user?.email || 'Profile'} 
              />
              <AvatarFallback className="bg-cosmic-purple/30 text-2xl text-white">
                {profile?.full_name?.[0] || user?.email?.[0]?.toUpperCase() || 'U'}
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
          
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <p className="text-white/70 text-sm">{user?.email}</p>
        </div>

        <form onSubmit={updateProfile} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="bg-background/50 border-cosmic-purple/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="bg-background/50 border-cosmic-purple/30"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90"
            disabled={updating}
          >
            {updating ? 'Updating...' : 'Update Profile'}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default Profile;
