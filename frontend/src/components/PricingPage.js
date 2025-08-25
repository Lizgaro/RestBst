import React from 'react';
import { Check, Star, Lightbulb, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { contactData } from '../data/contactData';

const PricingPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  const pricingPlans = [
    {
      name: "1 Год",
      badge: "Старт без рисков",
      badgeColor: "bg-lime-400 text-black",
      price: "54 000 ₽",
      period: "/ год",
      description: "(Разовая оплата. Всё включено)",
      subtitle: "Рекомендуем для первой точки",
      buttonText: "Выбрать тариф",
      buttonStyle: "bg-lime-400 hover:bg-lime-500 text-black",
      borderColor: "border-lime-400",
      benefits: [
        "Быстрый старт на 12 месяцев",
        "Без абонплат и продлений", 
        "Окупаемость за 2–4 недели"
      ],
      features: [
        "Видео-меню", "Заказы и оплата", "Чаевые", "Вызов официанта",
        "Умные допродажи", "Акции и подарки", "Интеграции с кассами",
        "Telegram-отчёты", "Доставка"
      ]
    },
    {
      name: "2 года", 
      badge: "Оплачено и забыли",
      badgeColor: "bg-orange-500 text-white",
      price: "69 000 ₽",
      period: "/ 2 года",
      description: "(Разовая оплата. Никаких продлений)",
      subtitle: "Самый популярный тариф",
      buttonText: "Подключить",
      buttonStyle: "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
      borderColor: "border-orange-500",
      benefits: [
        "Сразу выгоднее, чем продлевать",
        "Без скачков цен и подписок",
        "Окупаемость уже в первом сезоне"
      ],
      features: [
        "Видео-меню", "Заказы и оплата", "Чаевые", "Вызов официанта",
        "Умные допродажи", "Акции и подарки", "Интеграции с кассами",
        "Telegram-отчёты", "Доставка"
      ]
    },
    {
      name: "Навсегда",
      badge: "Один раз — и всё", 
      badgeColor: "bg-blue-500 text-white",
      price: "149 000 ₽",
      period: "/ без ограничений",
      description: "(Больше никогда не платите за систему)",
      subtitle: "Решение владельцев",
      buttonText: "Выбрать тариф",
      buttonStyle: "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
      borderColor: "border-blue-500",
      benefits: [
        "Через 2.5 года тариф окупается",
        "Потом — полная экономия",
        "Не нужно возвращаться к вопросу оплаты",
        "Система становится активом вашего бизнеса"
      ],
      features: [
        "Видео-меню", "Онлайн-оплата", "Вызов официанта", "Умные допродажи",
        "Акции", "Интеграции", "Интеграции с кассами", "Telegram-отчёты",
        "Доставка", "Обновления включены", "Без скрытых платежей"
      ]
    },
    {
      name: "Бесплатно",
      badge: "ознакомительный доступ",
      badgeColor: "bg-lime-400 text-black",
      price: "0 ₽",
      period: "/ 30 дней",
      description: "Полный доступ ко всем функциям",
      subtitle: "На 30 дней, без ограничений",
      buttonText: "Начать бесплатно",
      buttonStyle: "bg-transparent border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black",
      borderColor: "border-lime-400",
      benefits: [
        "Полный запуск без риска",
        "Решаете потом – платить или нет"
      ],
      features: [
        "Без ограничений", "Без карты и подписки", "С поддержкой",
        "Все сохранится при переходе на платный тариф"
      ]
    }
  ];

  const comparisonFeatures = [
    { name: "Меню", free: true, paid: true },
    { name: "Заказ", free: true, paid: true },
    { name: "Онлайн-оплата", free: true, paid: true },
    { name: "Чаевые", free: true, paid: true },
    { name: "Вызов официанта", free: true, paid: true },
    { name: "Модификаторы", free: true, paid: true },
    { name: "Акции", free: true, paid: true },
    { name: "Интеграции с iiko, R-keeper", free: "Просмотр", paid: "Вся интеграция" },
    { name: "Telegram-отчёты", free: "Просмотр", paid: true },
    { name: "Техподдержка", free: "Ограничено", paid: "7 дней в неделю" },
    { name: "Обучение персонала", free: "Просмотр", paid: true },
    { name: "Комиссия за заказы/оплату", free: "Есть", paid: "Без комиссии" },
    { name: "Длительность использования", free: "30 дней", paid: "90/365 дней" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Все функции в одном тарифе
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Никаких модулей за доплату. Всё включено сразу.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-gray-900 rounded-2xl p-8 border-2 ${plan.borderColor} hover:scale-105 transition-all duration-300 relative`}>
              {/* Badge */}
              <div className={`${plan.badgeColor} text-xs font-semibold px-3 py-1 rounded-full mb-6 text-center`}>
                {plan.badge}
              </div>
              
              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              
              {/* Description */}
              <p className="text-sm text-gray-400 mb-2">{plan.description}</p>
              <p className="text-sm text-gray-300 mb-6">{plan.subtitle}</p>
              
              {/* Button */}
              <Button 
                onClick={handleContactClick}
                className={`w-full mb-6 py-3 rounded-full font-medium transition-all duration-300 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </Button>
              
              {/* Benefits */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Lightbulb size={16} className="text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold">
                    {index < 3 ? `Что даёт этот тариф:` : `Как это работает:`}
                  </span>
                </div>
                <div className="space-y-2">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <span className="text-gray-400 mr-2">—</span>
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check size={16} className="text-lime-400 mr-2" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Expand indicator */}
              <div className="flex justify-center mt-4">
                <ChevronDown size={20} className="text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Что входит в тарифы:
        </h2>
        <h3 className="text-xl text-center text-gray-300 mb-12">
          Бесплатный и Платный
        </h3>
        
        <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-6 font-semibold">Функционал</th>
                  <th className="text-center p-6 font-semibold">
                    Бесплатный<br />
                    <span className="text-sm text-gray-400">30 дней</span>
                  </th>
                  <th className="text-center p-6 font-semibold bg-lime-400/10">
                    Платный<br />
                    <span className="text-sm text-lime-400">Год/Квартал</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="p-4 text-gray-300">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.free === true ? (
                        <Check size={20} className="text-lime-400 mx-auto" />
                      ) : (
                        <span className="text-gray-400 text-sm">{feature.free}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-lime-400/10">
                      {feature.paid === true ? (
                        <Check size={20} className="text-lime-400 mx-auto" />
                      ) : (
                        <span className="text-lime-400 text-sm font-medium">{feature.paid}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Practical Benefits */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Что это значит на практике</h2>
        <p className="text-xl text-gray-300 mb-12">
          <strong>Бесплатный тариф — это полноценный тест всех ключевых функций в течение 30 дней.</strong>
        </p>
        
        <p className="text-lg text-gray-300 mb-8">Переход на платный снимает ограничения:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Полная кассовая интеграция",
            "Telegram-отчёты",
            "Обучение и техподдержка без ограничений", 
            "Настройка и сопровождение"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-lime-400/10 rounded-lg border border-lime-400/30">
              <Star size={20} className="text-lime-400 mr-3" />
              <span className="text-lime-400 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Button 
            onClick={handleContactClick}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Получить консультацию от {contactData.name}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;