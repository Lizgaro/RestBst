import React from 'react';
import { X, Check, ArrowRight, Phone, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { contactData } from '../data/contactData';

const ModuleDetailModal = ({ module, onClose }) => {
  if (!module) return null;

  const handleContactClick = (type) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${contactData.phone}`);
        break;
      case 'email':
        window.open(`mailto:${contactData.email}`);
        break;
      case 'whatsapp':
        window.open(contactData.whatsappLink, '_blank');
        break;
      case 'telegram':
        window.open(contactData.telegramLink, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 animate-in slide-in-from-bottom duration-500">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-700">
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-3xl font-bold text-white mb-2">{module.title}</h2>
          <p className="text-lime-400 text-xl font-semibold">{module.subtitle}</p>
        </div>

        <div className="p-6">
          {/* Image */}
          {module.image && (
            <div className="mb-8">
              <img 
                src={module.image} 
                alt={module.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">{module.description}</p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-white text-2xl font-semibold mb-4">Преимущества</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {module.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check size={20} className="text-lime-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-white text-2xl font-semibold mb-4">Функции</h3>
            <div className="space-y-3">
              {module.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <ArrowRight size={18} className="text-lime-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-xl p-6">
            <h3 className="text-white text-xl font-semibold mb-4">Получить консультацию</h3>
            <p className="text-gray-300 mb-6">Свяжитесь с {contactData.name} для подробной консультации по модулю</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                onClick={() => handleContactClick('phone')}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={16} className="mr-2" />
                Позвонить
              </Button>
              
              <Button 
                onClick={() => handleContactClick('email')}
                className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={16} className="mr-2" />
                Написать
              </Button>
              
              <Button 
                onClick={() => handleContactClick('whatsapp')}
                className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={16} className="mr-2" />
                WhatsApp
              </Button>
              
              <Button 
                onClick={() => handleContactClick('telegram')}
                className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Send size={16} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetailModal;