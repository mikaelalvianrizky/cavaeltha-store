// src/App.js

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import { products as initialProducts, categories } from './data/products';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Streaming');

  // Effect to filter products whenever searchQuery or selectedCategory changes
  useEffect(() => {
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


  return (
    <div className="App min-h-screen font-sans">
      <Navbar />
      <main>
        <Categories 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
        />
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;