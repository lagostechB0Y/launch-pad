
import React, { useState, useEffect } from 'react';

const animatedWords = ["Pulse", "Facts", "Voices", "Debate", "Truth"];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
        setIsFading(false);
      }, 500); // Corresponds to the fade-out duration
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center my-10 animate-fade-in-up">
      <div className="bg-gold/10 border border-gold text-gold text-sm font-bold px-4 py-1 rounded-full mb-6">
        COMING SOON
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-navy tracking-tighter leading-tight mb-4">
        The Unfiltered{' '}
        <span className="inline-block relative overflow-hidden h-[1.2em]">
            <span 
              key={currentIndex}
              className={`text-gold transition-all duration-500 ease-in-out absolute top-0 left-0 ${isFading ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}
            >
              {animatedWords[currentIndex]}
            </span>
        </span>
        <br/>
        of Nigerian Politics.
      </h2>
      <p className="max-w-xl text-navy/70 text-base md:text-lg mt-4">
        GoPolitical is launching soon — your trusted source for political updates, facts, and citizen voices.
      </p>
    </section>
  );
};

export default Hero;
