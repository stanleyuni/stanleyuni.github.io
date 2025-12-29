import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050f1e] text-university-cream py-12 px-4 border-t border-university-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl font-bold text-gray-600">STANLEY UNIVERSITY</h3>
          <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        <div className="flex gap-8 text-sm font-serif text-gray-400">
          <a href="mailto:jake@svnty.is-a.dev" className="hover:text-university-gold transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
