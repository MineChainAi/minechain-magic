
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Redirect to full account creation page
        navigate('/create-account');
        return;
      } else {
        // Sign in the user
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        
        toast({
          title: "Welcome back!",
          description: "You've successfully signed in.",
        });
        
        navigate('/');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-16 flex items-center justify-center"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-midnight-navy/80 backdrop-blur-sm rounded-xl border border-cosmic-purple/20">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-white/70">
            {isSignUp 
              ? 'Sign up to start claiming AI blocks' 
              : 'Sign in to your MineChain account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="bg-background/50 border-cosmic-purple/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-background/50 border-cosmic-purple/30"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90 group"
            disabled={loading}
          >
            {loading
              ? 'Loading...'
              : isSignUp
              ? (
                <>
                  Continue to Account Setup
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )
              : 'Sign In'}
          </Button>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-cosmic-purple hover:underline text-sm"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </button>
        </div>
        
        {isSignUp && (
          <div className="text-center">
            <p className="text-sm text-white/70">
              Looking for the complete sign up experience?{" "}
              <Link 
                to="/create-account" 
                className="text-electric-orange hover:underline"
              >
                Create account here
              </Link>
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Auth;
