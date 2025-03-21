
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight, Check } from 'lucide-react';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers and underscores" }),
  companyName: z.string().optional(),
  companySize: z.string().optional(),
  interests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Account creation steps
enum CreationStep {
  ACCOUNT_INFO = 0,
  PROFILE_INFO = 1,
  COMPANY_INFO = 2,
  CREATING = 3,
  COMPLETE = 4,
}

const stepLabels = [
  "Account Information",
  "Profile Setup",
  "Company Details",
  "Creating Account",
  "Complete"
];

const CreateAccount = () => {
  const [step, setStep] = useState<CreationStep>(CreationStep.ACCOUNT_INFO);
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      username: '',
      companyName: '',
      companySize: '',
      interests: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setStep(CreationStep.CREATING);
      
      // Sign up the user with Supabase
      const { error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
            username: values.username,
            company_name: values.companyName,
            company_size: values.companySize,
            interests: values.interests,
          },
        },
      });

      if (signUpError) throw signUpError;
      
      // Success - account created
      setStep(CreationStep.COMPLETE);
      
      toast({
        title: "Account created successfully",
        description: "Please check your email to confirm your account.",
      });
      
    } catch (error: any) {
      setStep(CreationStep.ACCOUNT_INFO);
      toast({
        title: "Error creating account",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  const nextStep = () => {
    let canProceed = false;
    
    // Validate current step fields
    if (step === CreationStep.ACCOUNT_INFO) {
      const emailValid = form.getFieldState('email').invalid === false;
      const passwordValid = form.getFieldState('password').invalid === false;
      canProceed = emailValid && passwordValid;
    } else if (step === CreationStep.PROFILE_INFO) {
      const fullNameValid = form.getFieldState('fullName').invalid === false;
      const usernameValid = form.getFieldState('username').invalid === false;
      canProceed = fullNameValid && usernameValid;
    } else {
      canProceed = true; // Company info is optional
    }
    
    if (canProceed) {
      setStep(prev => prev + 1);
    } else {
      // Trigger validation for all fields in the current step
      if (step === CreationStep.ACCOUNT_INFO) {
        form.trigger(['email', 'password']);
      } else if (step === CreationStep.PROFILE_INFO) {
        form.trigger(['fullName', 'username']);
      }
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const goToLogin = () => {
    navigate('/auth');
  };

  const goToDashboard = () => {
    navigate('/');
  };

  // Render progress indicator
  const renderProgress = () => (
    <div className="flex justify-between mb-8 px-4">
      {stepLabels.slice(0, -1).map((label, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center"
        >
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < step 
                ? 'bg-cosmic-purple text-white' 
                : index === step 
                  ? 'bg-electric-orange text-white' 
                  : 'bg-gray-700 text-gray-300'
            }`}
          >
            {index < step ? <Check size={16} /> : index + 1}
          </div>
          <span 
            className={`text-xs mt-2 text-center max-w-[80px] ${
              index === step ? 'text-white' : 'text-white/50'
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-16 flex items-center justify-center"
    >
      <div className="w-full max-w-2xl p-8 space-y-8 bg-midnight-navy/80 backdrop-blur-sm rounded-xl border border-cosmic-purple/20">
        {step < CreationStep.CREATING && (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Create Your Account
              </h2>
              <p className="text-white/70">
                Join MineChain and claim your AI mining block
              </p>
            </div>
            
            {renderProgress()}
          </>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Account Information */}
            {step === CreationStep.ACCOUNT_INFO && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="you@example.com" 
                          className="bg-background/50 border-cosmic-purple/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="password" 
                          placeholder="••••••••" 
                          className="bg-background/50 border-cosmic-purple/30"
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-white/50 mt-1">
                        Must be at least 8 characters with one uppercase letter and one number
                      </p>
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {/* Step 2: Profile Information */}
            {step === CreationStep.PROFILE_INFO && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="John Doe" 
                          className="bg-background/50 border-cosmic-purple/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="johndoe" 
                          className="bg-background/50 border-cosmic-purple/30"
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-white/50 mt-1">
                        Choose a unique username with only letters, numbers and underscores
                      </p>
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {/* Step 3: Company Information */}
            {step === CreationStep.COMPANY_INFO && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Acme Inc" 
                          className="bg-background/50 border-cosmic-purple/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="companySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Size (Optional)</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-cosmic-purple/30">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are you interested in? (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Tell us what you're looking to achieve with AI mining blocks..." 
                          className="bg-background/50 border-cosmic-purple/30 min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {/* Creating Account */}
            {step === CreationStep.CREATING && (
              <div className="py-12 flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-electric-orange animate-spin mb-6" />
                <h3 className="text-xl font-bold mb-2">Creating Your Account</h3>
                <p className="text-white/70 text-center">
                  Please wait while we set up your account...
                </p>
              </div>
            )}

            {/* Account Created */}
            {step === CreationStep.COMPLETE && (
              <div className="py-12 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-cosmic-purple rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Account Created Successfully!</h3>
                <p className="text-white/70 text-center mb-8">
                  Please check your email to confirm your account before signing in.
                </p>
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goToLogin}
                  >
                    Sign In
                  </Button>
                  <Button
                    type="button"
                    className="bg-cosmic-purple hover:bg-cosmic-purple/90"
                    onClick={goToDashboard}
                  >
                    Go to Dashboard
                  </Button>
                </div>
              </div>
            )}

            {/* Step Navigation */}
            {step < CreationStep.COMPANY_INFO && (
              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-cosmic-purple hover:bg-cosmic-purple/90 group"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}

            {step === CreationStep.COMPANY_INFO && (
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-cosmic-purple hover:bg-cosmic-purple/90"
                >
                  Create Account
                </Button>
              </div>
            )}

            {step > CreationStep.ACCOUNT_INFO && step < CreationStep.COMPANY_INFO && (
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-cosmic-purple hover:bg-cosmic-purple/90 group"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </form>
        </Form>

        {step < CreationStep.CREATING && (
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-sm text-white/70">
              Already have an account?{" "}
              <button 
                type="button"
                onClick={goToLogin}
                className="text-cosmic-purple hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CreateAccount;
