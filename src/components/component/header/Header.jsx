/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../../../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {  
// start......................................................
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 container mx-auto rounded sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold">
              <img src={logo} alt="" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              Shop
            </Link>
            <Link to="/order" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              Order
            </Link>
            <Link to="/orderreview" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
            Order Review
            </Link>
            <Link to="/inventory" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
            Manage Inventory
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
            Login
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/order" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Order
          </Link>
          <Link to="/orderreview"  className="text-white block px-3 py-2 rounded-md text-base font-medium">
          Order Review
          </Link>
          <Link to="/inventory" className="text-white block px-3 py-2 rounded-md text-base font-medium">
          Manage Inventory
          </Link>
          <Link to="/login"  className="text-white block px-3 py-2 rounded-md text-base font-medium">
          Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;