import React from 'react';
import { Button } from './ui/button';
import { User, Phone } from 'lucide-react';
import { contactData } from '../data/contactData';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleGetStarted = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div 
            onClick={() => setCurrentPage('features')}
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center hover:bg-lime-300 transition-colors">
              <span className="text-black font-bold text-sm">R</span>
            </div>
            <span className="text-white font-semibold text-xl hover:text-lime-400 transition-colors">RestBest</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6 text-sm">
            <button
              onClick={() => setCurrentPage('features')} 
              className={`transition-all duration-300 hover:scale-105 relative group ${
                currentPage === 'features' ? 'text-lime-400' : 'text-gray-300 hover:text-lime-400'
              }`}
            >
              Возможности
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                currentPage === 'features' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => setCurrentPage('qr-menu')} 
              className={`transition-all duration-300 hover:scale-105 relative group ${
                currentPage === 'qr-menu' ? 'text-lime-400' : 'text-gray-300 hover:text-lime-400'
              }`}
            >
              QR/NFC-меню
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                currentPage === 'qr-menu' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button
              onClick={() => setCurrentPage('pricing')} 
              className={`transition-all duration-300 hover:scale-105 relative group ${
                currentPage === 'pricing' ? 'text-lime-400' : 'text-gray-300 hover:text-lime-400'
              }`}
            >
              Цены
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                currentPage === 'pricing' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </nav>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            onClick={handleGetStarted}
            className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/25 animate-pulse"
          >
            <Phone size={16} className="mr-2" />
            Запустить бесплатно
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;