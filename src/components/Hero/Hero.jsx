import React from 'react';
import HeroCarousels from './HeroCarousels';
import HeroStats from './HeroStats';

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 py-8">
      {/* 
        You can easily add your SignIn or other options here, above the Carousels!
        e.g., <SignIn /> 
      */}
      <HeroCarousels />
      <HeroStats />
    </div>
  );
};

export default Hero;
