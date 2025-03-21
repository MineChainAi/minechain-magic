
import { Github, Twitter, ArrowUpRight, FileText } from 'lucide-react';
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
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5 text-white/80" />
              </a>
            </div>

            <div className="text-white/70 space-y-2">
              <p className="flex items-center">
                <span className="font-medium text-yellow-400 mr-2">Location:</span> Jupiter, Florida
              </p>
              <p className="flex items-center">
                <span className="font-medium text-yellow-400 mr-2">Email:</span> 
                <a href="mailto:FTW@minechain.ai" className="hover:text-yellow-400 transition-colors">
                  FTW@minechain.ai
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium text-yellow-400 mr-2">Phone:</span> 
                <a href="tel:8557587660" className="hover:text-yellow-400 transition-colors">
                  855-758-7660
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-white/70 hover:text-white flex items-center">
                  <span>About</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-white/70 hover:text-white flex items-center">
                  <span>How It Works</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="/roadmap" className="text-white/70 hover:text-white flex items-center">
                  <span>Roadmap</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white flex items-center font-medium">
                  <span>Whitepaper</span>
                  <FileText className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white flex items-center">
                  <span>Documentation</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white flex items-center">
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white flex items-center">
                  <span>Terms of Service</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white flex items-center">
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} MineChain.ai. All rights reserved. Full-Stack Miners™ is a trademark of MineChain.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/50 text-sm">
              Powered by <a href="#" className="text-yellow-400 hover:text-yellow-300">Coinbase Commerce</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
