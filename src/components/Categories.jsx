// src/components/Categories.js

import React from 'react';

const Categories = ({ categories, setSelectedCategory }) => {
  return (
    <div className="container mx-auto py-4 flex justify-center flex-wrap gap-2 md:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className="bg-dark-blue text-off-white font-semibold py-2 px-6 rounded-md hover:bg-mid-blue transition-colors duration-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;