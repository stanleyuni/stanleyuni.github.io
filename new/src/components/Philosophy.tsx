import React from 'react';

const pillars = [
  {
    numeral: 'I',
    title: 'Classical Foundations',
    description: 'Rooted in the enduring traditions of history, philosophy, and logic.',
  },
  {
    numeral: 'II',
    title: 'Australian Context',
    description: 'Understanding our unique heritage, institutions, and national character.',
  },
  {
    numeral: 'III',
    title: 'Rigorous Inquiry',
    description: 'The disciplined and objective pursuit of truth and knowledge.',
  },
];

export const Philosophy: React.FC = () => {
  return (
    <section className="relative z-10 px-6 py-20 bg-university-cream text-university-blue">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-sm uppercase tracking-[0.3em] text-university-blue/60 mb-12 font-medium">
          Our Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.numeral}
              className="text-center group"
            >
              {/* Roman Numeral */}
              <div className="text-5xl font-serif text-university-gold mb-4 font-light tracking-wide">
                {pillar.numeral}
              </div>
              {/* Decorative line */}
              <div className="w-12 h-px bg-university-gold/50 mx-auto mb-6" />
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 tracking-wide">
                {pillar.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-university-blue/70 leading-relaxed font-serif">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
