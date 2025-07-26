// src/components/Navbar.js

import React, { useState } from 'react';

const Navbar = ({ onHomeClick }) => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeAndCloseMenu = () => {
    onHomeClick();
    setIsMenuOpen(false); // Close menu after clicking home
  };

  return (
    // Use 'relative' positioning to anchor the dropdown menu
    <nav className="bg-dark-blue p-4 text-off-white relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* I see you've updated the store name! */}
        <h1 className="font-bold text-xl uppercase">Cavaeltha Store</h1>

        {/* 1. Desktop Menu: This is your original menu, hidden on mobile */}
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={onHomeClick} className="hover:text-light-blue transition-colors">Home</button>
          <a href="#" className="hover:text-light-blue transition-colors">Cara Pembelian</a>
          <a href="#" className="hover:text-light-blue transition-colors">Kebijakan Pengguna</a>
        </div>

        {/* 2. Mobile Menu Button (Hamburger): Shows only on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              // 'X' icon when menu is open
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 3. Mobile Dropdown Menu: Appears when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-mid-blue rounded-lg">
          {/* --- CHANGES ARE IN THIS LIST --- */}
          <ul className="flex flex-col items-center p-2">
            {/* Each list item now has a bottom border, except for the last one */}
            <li className="w-full text-center border-b border-white last:border-b-0">
              <button onClick={handleHomeAndCloseMenu} className="block w-full py-3 hover:bg-dark-blue/20 rounded-t-md">Home</button>
            </li>
            <li className="w-full text-center border-b border-white last:border-b-0">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="block w-full py-3 hover:bg-dark-blue/20">Cara Pembelian</a>
            </li>
            <li className="w-full text-center border-b border-white last:border-b-0">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="block w-full py-3 hover:bg-dark-blue/20 rounded-b-md">Kebijakan Pengguna</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;