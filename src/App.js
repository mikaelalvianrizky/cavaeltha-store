// src/App.js

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import WelcomeMessage from './components/WelcomeMessage';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import { products as initialProducts, categories } from './data/products';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 1. Add new state to track if we are on the homepage
  const [isHomePage, setIsHomePage] = useState(true);

  // This effect now runs only when the selected category or search query changes
  useEffect(() => {
    if (!selectedCategory) return; // Don't filter if no category is selected

    let filteredProducts = initialProducts.filter(product =>
      product.category === selectedCategory
    );

    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setProducts(filteredProducts);

  }, [searchQuery, selectedCategory]);

  // 2. Function to handle clicking a category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsHomePage(false); // Switch to the product view
  };

  // 3. Function to handle clicking the "Home" button in the navbar
  const handleGoHome = () => {
    setIsHomePage(true);
    setSelectedCategory(null); // Reset category
    setProducts([]); // Clear products
    setSearchQuery(''); // Clear search
  };

  return (
    <div className="App min-h-screen font-sans">
      <Navbar onHomeClick={handleGoHome} />
      <main>
        <Categories onCategorySelect={handleCategorySelect} categories={categories} />
        
        {/* 4. Conditional rendering based on isHomePage state */}
        {isHomePage ? (
          // If it's the homepage, only show the Welcome Message
          <WelcomeMessage />
        ) : (
          // Otherwise, show the Search Bar and Product List
          <>
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            <ProductList products={products} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;