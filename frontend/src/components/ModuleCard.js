import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ModuleCard = ({ title, description, highlight, image, hasGradientBorder = true, onClick }) => {
  return (
    <div className={`relative p-8 rounded-2xl mb-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer group ${
      hasGradientBorder 
        ? 'bg-gradient-to-r from-lime-400/20 via-transparent to-lime-400/20 border border-lime-400/30 hover:border-lime-400/50' 
        : 'bg-gray-900/50 border border-gray-700 hover:border-lime-400/30'
    }`}>
      {/* Background gradient effect */}
      {hasGradientBorder && (
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-transparent to-lime-400/5 rounded-2xl group-hover:from-lime-400/10 group-hover:to-lime-400/10 transition-all duration-500"></div>
      )}
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-lime-400/0 group-hover:bg-lime-400/5 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-lime-100 transition-colors duration-300">
              {title}
            </h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {description}
            </p>
            {highlight && (
              <p className="text-lime-400 text-xl font-semibold mb-6 group-hover:text-lime-300 transition-colors duration-300">
                {highlight}
              </p>
            )}
            <Button 
              onClick={onClick}
              className="bg-transparent border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-medium px-8 py-3 rounded-full transition-all duration-300 group transform hover:scale-105 hover:shadow-lg hover:shadow-lime-400/25"
            >
              Подробнее
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          
          {image && (
            <div className="flex-shrink-0 lg:ml-8">
              <img 
                src={image} 
                alt={title}
                className="w-full lg:w-80 h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;