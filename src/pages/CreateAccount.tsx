
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';

type Step = 'account' | 'wallets' | 'contact' | 'complete';

const CreateAccount = () => {
  const navigate = useNavigate();
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [usdcAddress, setUsdcAddress] = useState('');
  const [btcAddress, setBtcAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  // UI state
  const [currentStep, setCurrentStep] = useState<Step>('account');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetError = () => setError(null);

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Create the user
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });
      
      if (signUpError) throw signUpError;
      
      // Update additional profile information
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            username,
            full_name: fullName,
            usdc_address: usdcAddress,
            btc_address: btcAddress,
            phone_number: phoneNumber,
            ...(companyName ? { company_name: companyName } : {})
          })
          .eq('id', data.user.id);
        
        if (profileError) throw profileError;
      }
      
      toast({
        title: "Account created successfully!",
        description: "Welcome to MineChain. You can now sign in.",
      });
      
      setCurrentStep('complete');
    } catch (error: any) {
      console.error('Error creating account:', error);
      setError(error.message || 'An error occurred while creating your account');
      toast({
        title: "Error creating account",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const validateWalletForm = () => {
    resetError();
    
    // Optional validation for wallet addresses
    if (usdcAddress && !usdcAddress.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
      setError('Please enter a valid USDC wallet address (ERC20 or Base)');
      return false;
    }
    
    if (btcAddress && !btcAddress.match(/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/)) {
      setError('Please enter a valid BTC wallet address');
      return false;
    }
    
    return true;
  };

  const validateContactForm = () => {
    resetError();
    
    // Phone validation
    if (phoneNumber && !phoneNumber.match(/^\+?[0-9\s\-()]{7,20}$/)) {
      setError('Please enter a valid phone number');
      return false;
    }
    
    return true;
  };

  const validateAccountForm = () => {
    resetError();

    if (!email) {
      setError('Email is required');
      return false;
    }
    
    if (!password) {
      setError('Password is required');
      return false;
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    if (!fullName) {
      setError('Full name is required');
      return false;
    }
    
    if (!username) {
      setError('Username is required');
      return false;
    }
    
    return true;
  };

  const handleNext = () => {
    if (currentStep === 'account') {
      if (validateAccountForm()) setCurrentStep('wallets');
    } else if (currentStep === 'wallets') {
      if (validateWalletForm()) setCurrentStep('contact');
    } else if (currentStep === 'contact') {
      if (validateContactForm()) handleSignUp();
    }
  };

  const handleBack = () => {
    if (currentStep === 'wallets') setCurrentStep('account');
    else if (currentStep === 'contact') setCurrentStep('wallets');
  };

  const StepIndicator = () => (
    <div className="flex justify-center mb-6">
      <div className="flex items-center space-x-2">
        <div 
          className={`h-3 w-3 rounded-full ${
            currentStep === 'account' 
              ? 'bg-cosmic-purple' 
              : 'bg-white'
          }`}
        />
        <div className="h-px w-8 bg-white/30" />
        <div 
          className={`h-3 w-3 rounded-full ${
            currentStep === 'wallets' 
              ? 'bg-cosmic-purple' 
              : currentStep === 'contact' || currentStep === 'complete' 
                ? 'bg-white' 
                : 'bg-white/30'
          }`}
        />
        <div className="h-px w-8 bg-white/30" />
        <div 
          className={`h-3 w-3 rounded-full ${
            currentStep === 'contact' 
              ? 'bg-cosmic-purple' 
              : currentStep === 'complete' 
                ? 'bg-white' 
                : 'bg-white/30'
          }`}
        />
        <div className="h-px w-8 bg-white/30" />
        <div 
          className={`h-3 w-3 rounded-full ${
            currentStep === 'complete' 
              ? 'bg-cosmic-purple' 
              : 'bg-white/30'
          }`}
        />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-16 flex items-center justify-center"
    >
      <Card className="w-full max-w-md bg-midnight-navy/80 backdrop-blur-sm border border-cosmic-purple/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {currentStep === 'account' && 'Create Your Account'}
            {currentStep === 'wallets' && 'Wallet Addresses'}
            {currentStep === 'contact' && 'Contact Information'}
            {currentStep === 'complete' && 'Account Created!'}
          </CardTitle>
          <CardDescription className="text-center">
            {currentStep === 'account' && 'Enter your account information to get started'}
            {currentStep === 'wallets' && 'Add wallet addresses to receive rewards and bonus drops'}
            {currentStep === 'contact' && 'Add your contact information'}
            {currentStep === 'complete' && 'Your account has been created successfully'}
          </CardDescription>
          <StepIndicator />
        </CardHeader>
        
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 mb-4 text-sm rounded-md bg-red-900/30 border border-red-700/50 text-red-200">
              {error}
            </div>
          )}
          
          {currentStep === 'account' && (
            <>
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
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-background/50 border-cosmic-purple/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-cosmic-purple/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="johndoe"
                  required
                  className="bg-background/50 border-cosmic-purple/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name (Optional)</Label>
                <Input
                  id="companyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Acme Inc."
                  className="bg-background/50 border-cosmic-purple/30"
                />
              </div>
            </>
          )}
          
          {currentStep === 'wallets' && (
            <>
              <div className="p-3 mb-2 text-sm rounded-md bg-electric-orange/10 border border-electric-orange/20">
                Add your wallet addresses to receive rewards (USDC) and bonus drops (BTC)
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="usdcAddress">USDC Receive Address (ERC20 or Base)</Label>
                <Input
                  id="usdcAddress"
                  type="text"
                  value={usdcAddress}
                  onChange={(e) => setUsdcAddress(e.target.value)}
                  placeholder="0x..."
                  className="bg-background/50 border-cosmic-purple/30"
                />
                <p className="text-xs text-white/50">
                  For receiving USDC rewards
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="btcAddress">BTC Receive Address</Label>
                <Input
                  id="btcAddress"
                  type="text"
                  value={btcAddress}
                  onChange={(e) => setBtcAddress(e.target.value)}
                  placeholder="bc1..."
                  className="bg-background/50 border-cosmic-purple/30"
                />
                <p className="text-xs text-white/50">
                  For receiving BTC bonus drops
                </p>
              </div>
            </>
          )}
          
          {currentStep === 'contact' && (
            <>
              <div className="p-3 mb-2 text-sm rounded-md bg-neon-cyan/10 border border-neon-cyan/20">
                Add your contact information for important updates
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  disabled
                  className="bg-background/20 border-cosmic-purple/30"
                />
                <p className="text-xs text-white/50">
                  Already provided in previous step
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="bg-background/50 border-cosmic-purple/30"
                />
                <p className="text-xs text-white/50">
                  For important security alerts and updates
                </p>
              </div>
            </>
          )}
          
          {currentStep === 'complete' && (
            <div className="text-center py-6 space-y-4">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-cosmic-purple/20 border border-cosmic-purple">
                <Check className="h-8 w-8 text-cosmic-purple" />
              </div>
              <h3 className="text-xl font-medium text-white">Welcome to MineChain!</h3>
              <p className="text-white/70">
                Your account has been created. You can now sign in and start claiming compute power on the MineChain network.
              </p>
            </div>
          )}
        </CardContent>
        
        <CardFooter className={`flex ${currentStep !== 'account' && currentStep !== 'complete' ? 'justify-between' : 'justify-end'}`}>
          {currentStep !== 'account' && currentStep !== 'complete' && (
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="border-cosmic-purple/30 text-white"
              disabled={loading}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
          
          {currentStep !== 'complete' ? (
            <Button
              onClick={handleNext}
              className="bg-cosmic-purple hover:bg-cosmic-purple/90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {currentStep === 'contact' ? 'Create Account' : 'Next'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={() => navigate('/auth')}
              className="bg-cosmic-purple hover:bg-cosmic-purple/90"
            >
              Sign In
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CreateAccount;
