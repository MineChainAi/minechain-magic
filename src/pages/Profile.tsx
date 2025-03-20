
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

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
  const [profile, setProfile] = useState<Profile | null>(null);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');

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
          <Avatar className="h-24 w-24">
            <AvatarImage 
              src={profile?.avatar_url || ''} 
              alt={profile?.full_name || user?.email || 'Profile'} 
            />
            <AvatarFallback className="bg-cosmic-purple/30 text-2xl text-white">
              {profile?.full_name?.[0] || user?.email?.[0]?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
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
