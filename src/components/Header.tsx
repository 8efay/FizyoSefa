'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105 rounded-full overflow-hidden">
              <img 
                src="/fizyo-sefa-logo.jpg" 
                alt="FIZYO SEFA Logo" 
                className="w-full h-full object-center rounded-full border-2 border-white shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                FizyoSefa
              </h1>
              <p className="text-sm text-gray-600 font-medium">Evde Fizik Tedavi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Ana Sayfa
            </Link>
            <Link href="/hakkimda" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Hakkımda
            </Link>
            <Link href="/hizmetler" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Hizmetler
            </Link>

            <Link href="/iletisim" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              İletişim
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+905528939386" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-600 transition-colors bg-purple-50 px-3 py-1 rounded-full hover:bg-purple-100">
              <Phone size={16} />
              <span>0552 893 93 86</span>
            </a>
            <a 
              href="mailto:fizyoterapistsefa4@gmail.com?subject=Fizik Tedavi Randevu Talebi&body=Merhaba, fizik tedavi hizmetleriniz hakkında bilgi almak istiyorum."
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-600 transition-colors bg-pink-50 px-3 py-1 rounded-full hover:bg-pink-100"
            >
              <Mail size={16} />
              <span>fizyoterapistsefa4@gmail.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-white to-purple-50 border-t border-purple-200 shadow-lg">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-100 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hakkimda"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-100 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımda
              </Link>
              <Link
                href="/hizmetler"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-100 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </Link>

              <Link
                href="/iletisim"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-100 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="pt-4 border-t border-purple-200">
                <a href="tel:+905528939386" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Phone size={16} />
                  <span>0552 893 93 86</span>
                </a>
                <a 
                  href="mailto:fizyoterapistsefa4@gmail.com?subject=Fizik Tedavi Randevu Talebi&body=Merhaba, fizik tedavi hizmetleriniz hakkında bilgi almak istiyorum."
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Mail size={16} />
                  <span>fizyoterapistsefa4@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 