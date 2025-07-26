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
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    if (!selectedCategory) return; 

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
        {/* --- CHANGE IS HERE --- */}
        <Categories 
          onCategorySelect={handleCategorySelect} 
          categories={categories} 
          activeCategory={selectedCategory} // Pass the active category as a prop
        />
        
        {isHomePage ? (
          <WelcomeMessage />
        ) : (
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