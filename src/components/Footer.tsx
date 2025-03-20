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
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-[2px] bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
              </div>
              <span className="text-white font-semibold text-xl">MineChain<span className="text-blue-500">.ai</span></span>
            </a>
            
            <p className="text-white/70 mb-6 max-w-md">
              MineChain is a Web3 AI mining company operating full-stack AI workstations. 
              Own a virtual miner, earn AI-powered rewards in USDC and $MINE.
            </p>
            
            <div className="flex space-x-4">
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
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white flex items-center">
                  <span>About</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-white flex items-center">
                  <span>How It Works</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-white/70 hover:text-white flex items-center">
                  <span>Roadmap</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 inline" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white flex items-center">
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
            &copy; {currentYear} MineChain.ai. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/50 text-sm">
              Powered by <a href="#" className="text-blue-400 hover:text-blue-300">Coinbase Commerce</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
