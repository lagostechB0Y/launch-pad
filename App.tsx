
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubscriptionForm from './components/SubscriptionForm';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white text-navy overflow-hidden">
      <div className="absolute inset-0 nigeria-map-bg opacity-5 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-8">
        <main className={`flex flex-col items-center text-center w-full max-w-3xl transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <Header />
          <div className="w-full flex-grow flex flex-col items-center justify-center">
            <Hero />
            <SubscriptionForm />
            <SocialLinks />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
