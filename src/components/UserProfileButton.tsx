
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { User, LogOut, Settings } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export function UserProfileButton() {
  const { user, signOut } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  
  useEffect(() => {
    if (!user) return;
    
    // Fetch initial profile data
    const fetchProfileData = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('avatar_url, full_name')
        .eq('id', user.id)
        .single();
        
      if (data && !error) {
        setAvatarUrl(data.avatar_url);
        setFullName(data.full_name);
      }
    };
    
    fetchProfileData();
    
    // Set up real-time listener for profile updates
    const channel = supabase
      .channel('profile-button-updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${user.id}`
        },
        (payload) => {
          console.log('Profile update in UserProfileButton:', payload);
          const { avatar_url, full_name } = payload.new as { avatar_url: string | null, full_name: string | null };
          setAvatarUrl(avatar_url);
          setFullName(full_name);
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);
  
  if (!user) {
    return (
      <Button
        className="bg-cosmic-purple hover:bg-cosmic-purple/90 scale-90"
        size="sm"
        asChild
      >
        <Link to="/auth">Sign In</Link>
      </Button>
    );
  }

  const userInitials = fullName 
    ? fullName.substring(0, 2).toUpperCase()
    : user.email 
      ? user.email.substring(0, 2).toUpperCase()
      : 'U';
    
  const handleSignOut = async () => {
    setIsLoggingOut(true);
    await signOut();
    setIsLoggingOut(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatarUrl || ''} alt={user.email || ''} />
            <AvatarFallback className="bg-cosmic-purple/30 text-white">
              {userInitials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {fullName && (
              <p className="font-medium text-sm text-white">{fullName}</p>
            )}
            {user.email && (
              <p className="text-xs text-white/70">{user.email}</p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/settings" className="flex items-center gap-2 cursor-pointer">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleSignOut}
          disabled={isLoggingOut}
          className="flex items-center gap-2 cursor-pointer text-red-500 focus:text-red-500"
        >
          <LogOut className="w-4 h-4" />
          <span>{isLoggingOut ? 'Signing out...' : 'Sign out'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
