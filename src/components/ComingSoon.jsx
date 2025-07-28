// src/components/ComingSoon.js

import React from 'react';

// Step 1: Import your logo images from the assets folder
import spotifyLogo from '../assets/logos/spotify.png';
import mlLogo from '../assets/logos/mobile-legends.jpg';
import pubgLogo from '../assets/logos/pubg.png';

// Step 2: Update the data structure to use the imported images
const logoData = {
  'Music': [
    { name: 'Spotify', image: spotifyLogo },
  ],
  'Game': [
    { name: 'Mobile Legends', image: mlLogo },
    { name: 'PUBG', image: pubgLogo },
  ],
  // You can add more categories and import their logos
};

const ComingSoon = ({ activeCategory }) => {
  const logosToShow = logoData[activeCategory] || [];

  return (
    <div className="container mx-auto text-center py-16 px-4">
      <div className="bg-off-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-dark-blue mb-3">
          Coming Soon! 🚀
        </h2>
        <p className="text-lg text-mid-blue font-semibold">
          Produk untuk kategori ini sedang kami siapkan. Cek kembali nanti ya!
        </p>
        
        {logosToShow.length > 0 && (
          <div className="mt-10">
            <p className="text-sm text-dark-blue/70 mb-5">Beberapa produk yang akan datang di kategori ini:</p>
            <div className="flex justify-center items-center gap-x-6 sm:gap-x-8">
              {logosToShow.map(logo => (
                <div key={logo.name} title={logo.name} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  {/* Step 3: Use the <img> tag to display your image */}
                  <img 
                    src={logo.image} 
                    alt={`${logo.name} logo`} 
                    className="h-11 w-auto" 
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;