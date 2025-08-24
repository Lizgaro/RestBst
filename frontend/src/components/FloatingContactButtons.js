import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

const FloatingContactButtons = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 space-y-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+79033230585"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
      
      {/* Telegram Button */}
      <a
        href="https://t.me/legos_ivan"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
      >
        <Send size={20} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;