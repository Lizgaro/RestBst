import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ModuleCard = ({ title, description, highlight, image, hasGradientBorder = true }) => {
  return (
    <div className={`relative p-8 rounded-2xl mb-6 transition-all duration-300 hover:scale-[1.02] ${
      hasGradientBorder 
        ? 'bg-gradient-to-r from-lime-400/20 via-transparent to-lime-400/20 border border-lime-400/30' 
        : 'bg-gray-900/50 border border-gray-700'
    }`}>
      {/* Background gradient effect */}
      {hasGradientBorder && (
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-transparent to-lime-400/5 rounded-2xl"></div>
      )}
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              {description}
            </p>
            {highlight && (
              <p className="text-lime-400 text-xl font-semibold mb-6">
                {highlight}
              </p>
            )}
            <Button className="bg-transparent border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-medium px-8 py-3 rounded-full transition-all duration-300 group">
              Подробнее
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {image && (
            <div className="flex-shrink-0 lg:ml-8">
              <img 
                src={image} 
                alt={title}
                className="w-full lg:w-80 h-64 object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;