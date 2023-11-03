// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-2xl">Shriram Travels</div>
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="#" className="text-white">Home</a>
            </li>
            <li className="ml-4">
              <a href="#" className="text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="text-white">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
