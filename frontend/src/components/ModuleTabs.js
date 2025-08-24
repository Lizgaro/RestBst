import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModuleTabs = ({ activeModule, setActiveModule }) => {
  const modules = [
    'модуль МЕНЮ',
    'модуль ЗАКАЗ', 
    'модуль СЧЕТ',
    'модуль ЧАЕВЫЕ',
    'модуль МОДИФИКАТОРЫ',
    'модуль ВЫЗОВ',
    'модуль ОФИЦИАНТ',
    'модуль АКЦИИ',
    'модуль ИНТЕГРАЦИИ',
    'модуль ДОСТАВКА',
    'модуль ОТЧЕТЫ'
  ];

  return (
    <div className="bg-black py-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation arrows */}
        <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors z-10">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors z-10">
          <ChevronRight size={20} />
        </button>

        {/* Scrollable tabs container */}
        <div className="overflow-x-auto scrollbar-hide px-16">
          <div className="flex space-x-4 min-w-max">
            {modules.map((module, index) => (
              <button
                key={index}
                onClick={() => setActiveModule(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeModule === index
                    ? 'bg-lime-400 text-black'
                    : 'bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                }`}
              >
                {module}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleTabs;