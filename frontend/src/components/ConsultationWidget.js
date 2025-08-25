import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { contactData } from '../data/contactData';

const ConsultationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating consultation button */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-lime-400 hover:bg-lime-500 rounded-full flex items-center justify-center text-black transition-all duration-300 hover:scale-110 shadow-lg consultation-pulse animate-bounce"
        >
          <span className="text-xs font-bold">?</span>
        </button>
        <div className="text-lime-400 text-xs font-medium mt-2 text-center max-w-20">
          Онлайн консультация
        </div>
      </div>

      {/* Consultation modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 animate-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-xl font-semibold">Получить консультацию</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-lime-400 font-semibold mb-2">{contactData.name}</p>
              <p className="text-gray-300 text-sm mb-4">Эксперт по ресторанным решениям</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-lime-400 text-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Ускорим обслуживание — ×1.5
              </div>
              <div className="flex items-center text-lime-400 text-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Увеличим средний чек — +30 %
              </div>
              <div className="flex items-center text-lime-400 text-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Вернём гостей — до 40 % возврата
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => handleContactClick('phone')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={18} className="mr-2" />
                Позвонить {contactData.phone}
              </Button>
              
              <Button 
                onClick={() => handleContactClick('whatsapp')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp
              </Button>
              
              <Button 
                onClick={() => handleContactClick('telegram')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Send size={18} className="mr-2" />
                Telegram {contactData.telegram}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationWidget;