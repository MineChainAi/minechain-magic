
import React from 'react';

const AboutBackground = () => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-none z-0">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <img 
          src="/lovable-uploads/f55fa69d-dd8e-45e4-83fb-3a445fa726e2.png" 
          alt="Background" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
      </div>
    </div>
  );
};

export default AboutBackground;
