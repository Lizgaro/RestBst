import React from 'react';
import { MapPin, Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Контакты</h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-lime-400 mt-1 flex-shrink-0" />
                <div>
                  <p>440066, г. Пенза, пр-т Победы, 124 (оф. Б2)</p>
                  <a href="#" className="text-lime-400 hover:text-lime-300 text-sm">На карте</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-lime-400" />
                <a href="mailto:info@restbest.pro" className="hover:text-lime-400 transition-colors">
                  info@restbest.pro
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Send size={20} className="text-lime-400" />
                <a href="#" className="text-lime-400 hover:text-lime-300 transition-colors">
                  Присоединяйтесь
                </a>
              </div>
            </div>
            
            {/* Company Information */}
            <div className="mt-8 text-gray-400 text-sm space-y-2">
              <p>ООО "Лидер-Проф" ИНН: 5835122022</p>
              <p>ОГРН: 1175835001649</p>
              <p>Юр. адрес: г. Пенза, ул. Лозицкой, д. 1</p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div>
            <div className="text-gray-400 text-sm mb-6">
              <p className="mb-2">2024 - 2025 Restbest.pro</p>
              <p className="mb-4">Все права защищены</p>
              <p className="text-lime-400 font-medium">Программные решения для Horeca (Хорека)</p>
            </div>
            
            <a href="#" className="text-lime-400 hover:text-lime-300 text-sm transition-colors">
              Политика обработки персональных данных
            </a>
          </div>
        </div>
        
        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12 pt-8 border-t border-gray-800">
          <a 
            href="https://wa.me/+79033230585" 
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors"
          >
            <span className="text-sm">Задать вопрос</span>
          </a>
          <a 
            href="https://t.me/legos_ivan" 
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            <Send size={16} />
            <span className="text-sm">Задать вопрос</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;