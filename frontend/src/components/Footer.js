import React from 'react';
import { MapPin, Mail, Send, Phone } from 'lucide-react';
import { contactData } from '../data/contactData';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Контакты</h3>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <div className="flex items-center space-x-3 hover:text-lime-400 transition-colors cursor-pointer">
                <Phone size={20} className="text-lime-400" />
                <a href={`tel:${contactData.phone}`} className="hover:text-lime-400 transition-colors">
                  {contactData.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3 hover:text-lime-400 transition-colors cursor-pointer">
                <Mail size={20} className="text-lime-400" />
                <a href={`mailto:${contactData.email}`} className="hover:text-lime-400 transition-colors">
                  {contactData.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3 hover:text-lime-400 transition-colors cursor-pointer">
                <Send size={20} className="text-lime-400" />
                <a href={contactData.telegramLink} target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition-colors">
                  {contactData.telegram}
                </a>
              </div>
            </div>

            {/* Expert Information */}
            <div className="bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-xl p-4 mb-6">
              <h4 className="text-lime-400 font-semibold mb-2">Ваш эксперт</h4>
              <p className="text-white text-lg font-medium">{contactData.name}</p>
              <p className="text-gray-300 text-sm">Специалист по ресторанным решениям</p>
            </div>
            
            {/* Company Information */}
            <div className="text-gray-400 text-sm space-y-2">
              {/* <p>ООО "Лидер-Проф" ИНН: 5835122022</p>
              <p>ОГРН: 1175835001649</p>
              <p>Юр. адрес: г. Пенза, ул. Лозицкой, д. 1</p> */}
            </div>
          </div>
          
          {/* Additional Info */}
          <div>
            <div className="text-gray-400 text-sm mb-6">
              <p className="mb-2">2024 - 2025 Restbest.pro</p>
              <p className="mb-4">Все права защищены</p>
              <p className="text-lime-400 font-medium">Программные решения для Horeca (Хорека)</p>
            </div>
            
            <a href="#privacy" className="text-lime-400 hover:text-lime-300 text-sm transition-colors block mb-6">
              Политика обработки персональных данных
            </a>

            {/* Quick Benefits */}
            <div className="space-y-3">
              <div className="flex items-center text-lime-400 text-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Ускорение обслуживания в 1.5 раза
              </div>
              <div className="flex items-center text-lime-400 text-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Увеличение среднего чека на 30%
              </div>
              <div className="flex items-center text-lime-400 text-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Возврат гостей до 40%
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12 pt-8 border-t border-gray-800">
          <a 
            href={contactData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Phone size={16} />
            <span className="text-sm">WhatsApp {contactData.name}</span>
          </a>
          <a 
            href={contactData.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Send size={16} />
            <span className="text-sm">Telegram {contactData.telegram}</span>
          </a>
          <a 
            href={`mailto:${contactData.email}`}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Mail size={16} />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;