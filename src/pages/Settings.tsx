
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';

const Settings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-16 container"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-white/70">Manage your account settings and preferences</p>
        </div>

        <div className="space-y-6 p-6 bg-midnight-navy/80 backdrop-blur-sm rounded-xl border border-cosmic-purple/20">
          <h2 className="text-xl font-semibold border-b border-cosmic-purple/20 pb-2">Account Settings</h2>
          
          <div className="space-y-2">
            <h3 className="text-md font-medium">Email Address</h3>
            <p className="text-white/70">{user.email}</p>
            <Button variant="outline" size="sm" className="mt-2">
              Change Email
            </Button>
          </div>

          <div className="space-y-2">
            <h3 className="text-md font-medium">Password</h3>
            <p className="text-white/70">••••••••</p>
            <Button variant="outline" size="sm" className="mt-2">
              Change Password
            </Button>
          </div>

          <Alert className="bg-red-950/40 border-red-500/50 mt-6">
            <AlertTitle className="text-red-400">Danger Zone</AlertTitle>
            <AlertDescription className="text-white/70">
              Once you delete your account, there is no going back. Please be certain.
            </AlertDescription>
            <Button 
              variant="destructive" 
              size="sm" 
              className="mt-3"
            >
              Delete Account
            </Button>
          </Alert>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;
