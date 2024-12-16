import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-[#E62E2D] py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img 
                className="h-7 w-auto" 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="Logo" 
              />
              <p className="sr-only">Website Title</p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a 
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" 
              href="#"
            >
              How it works
            </a>
            <a 
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" 
              href="#"
            >
              Pricing
            </a>
            <a 
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" 
              href="#"
            >
              Features
            </a>
            <a 
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" 
              href="#"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-900 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <a 
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100" 
                href="#"
              >
                How it works
              </a>
              <a 
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100" 
                href="#"
              >
                Pricing
              </a>
              <a 
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100" 
                href="#"
              >
                Features
              </a>
              <a 
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100" 
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;