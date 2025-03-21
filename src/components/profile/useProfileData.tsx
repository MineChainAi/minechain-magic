
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { ProfileFormData } from './ProfileForm';

export type Profile = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  usdc_address: string | null;
  btc_address: string | null;
  phone_number: string | null;
};

export const useProfileData = (userId: string | undefined) => {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    username: '',
    fullName: '',
    phoneNumber: '',
    usdcAddress: '',
    btcAddress: '',
  });
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  
  useEffect(() => {
    if (!userId) return;
    
    async function getProfile() {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
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
        setFormData({
          username: data.username || '',
          fullName: data.full_name || '',
          phoneNumber: data.phone_number || '',
          usdcAddress: data.usdc_address || '',
          btcAddress: data.btc_address || '',
        });
        setAvatarUrl(data.avatar_url);
      }
      
      setLoading(false);
    }

    getProfile();

    // Set up real-time listener for profile changes
    const channel = supabase
      .channel('profile-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${userId}`
        },
        (payload) => {
          console.log('Real-time profile update:', payload);
          const newProfile = payload.new as Profile;
          
          // Update the profile state
          setProfile(newProfile);
          
          // Update the form data
          setFormData({
            username: newProfile.username || '',
            fullName: newProfile.full_name || '',
            phoneNumber: newProfile.phone_number || '',
            usdcAddress: newProfile.usdc_address || '',
            btcAddress: newProfile.btc_address || '',
          });
          
          // Update avatar URL
          setAvatarUrl(newProfile.avatar_url);
          
          // Notify the user about the update
          toast({
            title: 'Profile updated',
            description: 'Your profile has been updated from another device.',
          });
        }
      )
      .subscribe();

    // Cleanup function to remove channel subscription
    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  const updateProfile = async (data: ProfileFormData) => {
    if (!userId) return;
    
    setUpdating(true);
    
    const updates = {
      id: userId,
      username: data.username,
      full_name: data.fullName,
      avatar_url: avatarUrl,
      usdc_address: data.usdcAddress,
      btc_address: data.btcAddress,
      phone_number: data.phoneNumber,
      updated_at: new Date().toISOString(),
    };
    
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId);
      
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

  const handleAvatarChange = (url: string) => {
    setAvatarUrl(url);
    
    // Automatically update the profile with the new avatar URL
    if (userId) {
      supabase
        .from('profiles')
        .update({ 
          avatar_url: url,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .then(({ error }) => {
          if (error) {
            console.error('Error updating avatar URL in profile:', error);
          }
        });
    }
  };

  return {
    loading,
    updating,
    profile,
    formData,
    avatarUrl,
    updateProfile,
    handleAvatarChange,
  };
};
