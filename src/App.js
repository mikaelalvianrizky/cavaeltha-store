// src/App.js

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import WelcomeMessage from './components/WelcomeMessage';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ComingSoon from './components/ComingSoon'; // 1. Import the new component
import { products as initialProducts, categories } from './data/products';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isHomePage, setIsHomePage] = useState(true);

  // This useEffect logic remains the same
  useEffect(() => {
    if (!selectedCategory) return;

    let filteredProducts = initialProducts.filter(
      (product) => product.category === selectedCategory
    );

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProducts(filteredProducts);
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsHomePage(false);
  };

  const handleGoHome = () => {
    setIsHomePage(true);
    setSelectedCategory(null);
    setProducts([]);
    setSearchQuery('');
  };

  return (
    <div className="App min-h-screen font-sans">
      <Navbar onHomeClick={handleGoHome} />
      <main>
        <Categories
          onCategorySelect={handleCategorySelect}
          categories={categories}
          activeCategory={selectedCategory}
        />

        {isHomePage ? (
          <WelcomeMessage />
        ) : (
          <>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            
            {/* 2. Check if products exist, otherwise show ComingSoon */}
            {products.length > 0 ? (
              <ProductList products={products} />
            ) : (
              <ComingSoon activeCategory={selectedCategory} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;