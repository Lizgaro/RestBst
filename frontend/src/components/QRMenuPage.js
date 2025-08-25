import React from 'react';
import { QrCode, Smartphone, Zap, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { contactData } from '../data/contactData';

const QRMenuPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  const features = [
    {
      icon: <QrCode size={40} className="text-lime-400" />,
      title: "QR-код на каждом столе",
      description: "Гости сканируют код и мгновенно попадают в интерактивное меню с HD-видео блюд"
    },
    {
      icon: <Smartphone size={40} className="text-lime-400" />,
      title: "Мобильное меню",
      description: "Адаптивный дизайн для любых устройств. Быстрая загрузка даже при слабом интернете"
    },
    {
      icon: <Zap size={40} className="text-lime-400" />,
      title: "Мгновенные заказы",
      description: "От выбора блюда до оплаты — всё в одном интерфейсе без официанта"
    },
    {
      icon: <TrendingUp size={40} className="text-lime-400" />,
      title: "Рост среднего чека",
      description: "Умные рекомендации и допродажи увеличивают сумму заказа на 25-40%"
    },
    {
      icon: <Users size={40} className="text-lime-400" />,
      title: "Освобождение персонала",
      description: "Официанты занимаются обслуживанием, а не приёмом заказов"
    },
    {
      icon: <Star size={40} className="text-lime-400" />,
      title: "Персонализация",
      description: "Система запоминает предпочтения гостей и делает персональные предложения"
    }
  ];

  const benefits = [
    "Увеличение выручки на 30-50%",
    "Снижение времени обслуживания в 2 раза", 
    "Сокращение ошибок в заказах на 95%",
    "Повышение лояльности гостей",
    "Детальная аналитика продаж",
    "Интеграция с кассовыми системами"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <QrCode size={80} className="text-lime-400 mx-auto mb-6 animate-pulse" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
            QR/NFC-меню RestBest
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8">
            Революционное решение для современных ресторанов
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Интерактивное меню с видео, мгновенными заказами и оплатой. 
            Ваши гости будут в восторге, а выручка вырастет на 30-50%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContactClick}
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Получить демо-меню
            </Button>
            <Button 
              onClick={handleContactClick}
              className="bg-transparent border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Консультация {contactData.name}
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Как работает QR-меню
            </h2>
            <p className="text-xl text-gray-300">
              Современные технологии для максимальной эффективности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-lime-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Результаты внедрения
            </h2>
            <p className="text-xl text-gray-300">
              Конкретные улучшения вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-lime-400/10 rounded-xl border border-lime-400/30 hover:bg-lime-400/20 transition-all duration-300">
                <ArrowRight size={24} className="text-lime-400 mr-4 flex-shrink-0" />
                <span className="text-lime-400 font-semibold text-lg">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Посмотрите демо-версию
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Оцените все возможности QR-меню на реальном примере
          </p>
          
          <div className="bg-gradient-to-r from-lime-400/20 to-green-400/20 border border-lime-400/30 rounded-2xl p-12 mb-12">
            <QrCode size={120} className="text-lime-400 mx-auto mb-6" />
            <p className="text-lime-400 text-lg font-semibold mb-4">
              Демо QR-код
            </p>
            <p className="text-gray-300 mb-8">
              Отсканируйте код телефоном и попробуйте меню в действии
            </p>
            <Button 
              onClick={handleContactClick}
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Получить демо для своего ресторана
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Готовы внедрить QR-меню в своём ресторане?
            </p>
            <p className="text-lime-400 font-semibold text-lg mb-6">
              Свяжитесь с экспертом {contactData.name}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contactData.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Позвонить {contactData.phone}
              </a>
              <a href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                WhatsApp
              </a>
              <a href={contactData.telegramLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Telegram {contactData.telegram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRMenuPage;