
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from './pages/Index';
import Auth from './pages/Auth';
import CreateAccount from './pages/CreateAccount';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Roadmap from './pages/Roadmap';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Block from './pages/Block';
import BlockCycle from './pages/BlockCycle';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  console.log('App component mounted - checking routes');
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/block" element={<Block />} />
          <Route path="/block-cycle" element={<BlockCycle />} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
