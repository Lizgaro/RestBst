import React from 'react';
import { Button } from './ui/button';
import { User, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">R</span>
            </div>
            <span className="text-white font-semibold text-xl">RestBest</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Возможности</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">QR/NFC-меню</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Сайт доставки</a>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Отзывы</span>
              <ChevronDown size={14} />
            </div>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Блог</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Этапы запуска</span>
              <ChevronDown size={14} />
            </div>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Цены</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Франшиза</a>
          </nav>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-full transition-colors"
          >
            Запустить бесплатно
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-600 text-white hover:bg-gray-800 px-4 py-2 rounded-full transition-colors"
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