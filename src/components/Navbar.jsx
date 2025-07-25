// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-dark-blue p-4 text-off-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">CAVAELTHA STORE</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-light-blue">Home</a>
          <a href="#" className="hover:text-light-blue">Cara Pembelian</a>
          <a href="#" className="hover:text-light-blue">Kebijakan Pengguna</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;