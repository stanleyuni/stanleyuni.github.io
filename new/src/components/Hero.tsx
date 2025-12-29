import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section - 80vh with background image */}
      <div className="relative h-[80vh] w-full overflow-visible">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/COVER.png')` }}
        >
          {/* Premium blue tint overlay */}
          <div className="absolute inset-0 bg-university-blue/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content - Logo, Text, Line */}
        <div className="relative z-10 flex h-full flex-col items-center pt-24 text-center text-university-cream px-4">
          {/* Layered blur effect - creates gradual blur transition */}
          <div className="relative animate-fade-in-up mb-4">
            {/* Outermost blur layer - very light, extends far */}
            <div
              className="absolute inset-0 -m-64 backdrop-blur-[2px] bg-white/[0.02] rounded-md"
              style={{
                maskImage: 'radial-gradient(ellipse 50% 50% at center, black 0%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at center, black 0%, transparent 70%)'
              }}
            />
            {/* Outer blur layer */}
            <div
              className="absolute inset-0 -m-48 backdrop-blur-[4px] bg-white/[0.03] rounded-md"
              style={{
                maskImage: 'radial-gradient(ellipse 55% 55% at center, black 0%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 55% 55% at center, black 0%, transparent 80%)'
              }}
            />
            {/* Middle blur layer */}
            <div
              className="absolute inset-0 -m-32 backdrop-blur-sm bg-white/[0.04] rounded-md"
              style={{
                maskImage: 'radial-gradient(ellipse 60% 60% at center, black 10%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at center, black 10%, transparent 90%)'
              }}
            />
            {/* Inner blur layer */}
            <div
              className="absolute inset-0 -m-16 backdrop-blur-md bg-white/[0.05] rounded-md"
              style={{
                maskImage: 'radial-gradient(ellipse 70% 70% at center, black 20%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 20%, transparent 100%)'
              }}
            />
            {/* Core blur layer - strongest */}
            <div
              className="absolute inset-0 -m-6 backdrop-blur-lg bg-white/[0.08] rounded-md"
              style={{
                maskImage: 'radial-gradient(ellipse 80% 80% at center, black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 30%, transparent 100%)'
              }}
            />
            {/* Logo */}
            <img
              src="/completed-mock.png"
              alt="Stanley University"
              className="relative z-10 w-full max-w-lg mx-auto"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
              }}
            />
          </div>

          {/* Study, Lead text */}
          <p className="mt-18 text-xl md:text-2xl font-serif italic text-white drop-shadow-lg">
            "Study, Lead."
          </p>

          {/* Gold line */}
          <div className="w-24 h-1 bg-university-gold mx-auto mt-6 shadow-lg" />
        </div>
      </div>

      {/* Overlapping Philosophy Card */}
      <div className="relative z-20 -mt-[18vh] px-4 md:px-6">
        <div
          className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl border border-gray-100"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px)'
          }}
        >

          <div className="space-y-6 font-serif text-lg md:text-xl leading-relaxed text-gray-800 pl-4 md:pl-8">
            <p>
              Stanley University offers a classical Diploma of Arts, focusing on the world within which you find yourself in.
              Our curriculum explores the history, literature, and scientific achievements that have shaped our circumstances,
              examining their relevance to modern Australian culture and society.
            </p>
            <p>
              We provide a structured environment for deep thought and rigorous inquiry. By studying
              and understanding the historical context of our institutions, students gain the tools to think critically
              and independently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
