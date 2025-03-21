
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutBackground from '@/components/about/AboutBackground';
import AboutHero from '@/components/about/AboutHero';
import AboutWhatIsMineChain from '@/components/about/AboutWhatIsMineChain';
import AboutFullStackMiners from '@/components/about/AboutFullStackMiners';
import AboutWhyMineChain from '@/components/about/AboutWhyMineChain';

const About = () => {
  return (
    <div className="min-h-screen bg-[#131516] text-white">
      <AboutBackground />
      <Navbar />
      <AboutHero />
      <AboutWhatIsMineChain />
      <AboutFullStackMiners />
      <AboutWhyMineChain />
      <Footer />
    </div>
  );
};

export default About;
