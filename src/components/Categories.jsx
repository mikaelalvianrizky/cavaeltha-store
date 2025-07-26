// src/components/Categories.js

import React from 'react';

// 1. Receive the new `activeCategory` prop
const Categories = ({ categories, onCategorySelect, activeCategory }) => {
  return (
    <div className="container mx-auto py-4 flex justify-center flex-wrap gap-2 md:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          // 2. Dynamically set the className based on whether the button is active
          className={`
            font-semibold py-2 px-6 rounded-md transition-colors duration-300
            ${activeCategory === category
              ? 'bg-mid-blue text-off-white' // Style for the active button
              : 'bg-dark-blue text-off-white hover:bg-mid-blue' // Style for inactive buttons
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;