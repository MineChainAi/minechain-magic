
import { Github, Twitter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/caa8d77a-a6e6-4c81-a123-ab5eceeaf154.png" 
                alt="MineChain Logo" 
                className="h-12" 
              />
            </a>
            
            <p className="text-white/70 mb-6 max-w-md">
              MineChain is a Web3 AI mining company operating Full-Stack Miners™. 
              Own a virtual miner, earn AI-powered rewards in USDC and $MINE.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary/20 gucci-glow transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary/20 gucci-glow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-primary/20 gucci-glow transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>

            <div className="text-white/70 space-y-2">
              <p className="flex items-center">
                <span className="font-medium text-primary mr-2">Location:</span> Jupiter, Florida
              </p>
              <p className="flex items-center">
                <span className="font-medium text-primary mr-2">Email:</span> 
                <a href="mailto:FTW@minechain.ai" className="hover:text-primary transition-colors">
                  FTW@minechain.ai
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium text-primary mr-2">Phone:</span> 
                <a href="tel:8557587660" className="hover:text-primary transition-colors">
                  855-758-7660
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>About</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>How It Works</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>Roadmap</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>Whitepaper</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>Documentation</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>Terms of Service</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary flex items-center gucci-glow">
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} MineChain.ai. All rights reserved. Full-Stack Miners™ is a trademark of MineChain.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/50 text-sm">
              Powered by <a href="#" className="text-primary hover:text-primary/80">Coinbase Commerce</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
