import React from 'react';
import { Button } from './ui/button';
import { User, ChevronDown, Phone } from 'lucide-react';
import { contactData } from '../data/contactData';

const Header = () => {
  const handleGetStarted = () => {
    // Smooth scroll to consultation or open contact
    window.open(contactData.telegramLink, '_blank');
  };

  const handleLogin = () => {
    // Placeholder for login functionality
    window.open(`mailto:${contactData.email}?subject=Вход в систему RestBest`, '_blank');
  };

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center hover:bg-lime-300 transition-colors">
              <span className="text-black font-bold text-sm">R</span>
            </div>
            <span className="text-white font-semibold text-xl hover:text-lime-400 transition-colors">RestBest</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6 text-sm">
            <a href="#features" className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:scale-105 relative group">
              Возможности
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#qr-menu" className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:scale-105 relative group">
              QR/NFC-меню
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#delivery" className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:scale-105 relative group">
              Сайт доставки
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-lime-400 transition-all duration-300 cursor-pointer group">
              <span>Отзывы</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <a href="#blog" className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:scale-105 relative group">
              Блог
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#faq" className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:scale-105 relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-lime-400 transition-all duration-300 cursor-pointer group">
              <span>Этапы запуска</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <a href="#pricing" className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:scale-105 relative group">
              Цены
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#franchise" className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:scale-105 relative group">
              Франшиза
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></span>
            </a>
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
          <Button 
            onClick={handleLogin}
            variant="outline" 
            className="border-gray-600 text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <User size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;