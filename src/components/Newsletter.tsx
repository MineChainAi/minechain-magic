
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    // Simulate API call
    setStatus('success');
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Stay Ahead of AI Mining Innovations
            </h2>
            <p className="text-white/70">
              Join our newsletter for the latest updates, exclusive rewards, and mining insights.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-6 px-4 w-full bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-blue-500 focus:ring-0"
                />
                
                {status === 'success' && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                    <Check className="w-5 h-5" />
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
              
              <Button
                type="submit"
                className="py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md border-none min-w-[120px]"
              >
                Subscribe
              </Button>
            </div>
            
            {status === 'success' && (
              <p className="mt-2 text-green-400 text-sm">
                Thanks for subscribing!
              </p>
            )}
            
            {status === 'error' && (
              <p className="mt-2 text-red-400 text-sm">
                Please enter a valid email address.
              </p>
            )}
            
            <p className="mt-4 text-white/50 text-xs text-center">
              By subscribing, you agree to receive updates from MineChain. We'll never spam or share your information.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
