// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="container mx-auto py-4 px-4">
      <input
        type="text"
        placeholder="Cari produk..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 rounded-lg border-2 border-dark-blue focus:outline-none focus:border-mid-blue text-gray-800"
      />
    </div>
  );
};

export default SearchBar;