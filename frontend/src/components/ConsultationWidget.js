import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const ConsultationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating consultation button */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-lime-400 hover:bg-lime-500 rounded-full flex items-center justify-center text-black transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <MessageCircle size={24} />
        </button>
        <div className="text-black text-xs font-medium mt-2 text-center">
          Онлайн консультация
        </div>
      </div>

      {/* Consultation modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-xl font-semibold">Получить консультацию</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
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

            <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-medium py-3 rounded-full transition-colors">
              <Phone size={18} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationWidget;