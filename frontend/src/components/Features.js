import React from 'react';
import { ArrowRight } from 'lucide-react';

const featuresData = [
  {
    title: "модуль МЕНЮ",
    description: "Меню, от которого не отрываются. Гость выбирает глазами. Выручка растёт.",
    link: "https://promo.restbest.pro/features/modulmenu/"
  },
  {
    title: "модуль ЗАКАЗ",
    description: "Больше заказов — меньше нагрузки. Гость всё делает сам. Вы зарабатываете больше.",
    link: "https://promo.restbest.pro/features/modul-zakaz/"
  },
  {
    title: "модуль СЧЕТ",
    description: "Гость оплачивает сам — быстро и удобно. Вы зарабатываете быстрее и больше.",
    link: "https://promo.restbest.pro/features/modul-schet/"
  },
  {
    title: "модуль ЧАЕВЫЕ",
    description: "Гости оставляют чаевые по QR. Персонал замотивирован, выручка растёт. До +80% больше чаевых.",
    link: "https://promo.restbest.pro/features/modul-chaevye/"
  },
  {
    title: "модуль МОДИФИКАТОРЫ",
    description: "Гость сам добавляет гарниры и соусы. Система продаёт допы без участия персонала. Рост выручки без усилий.",
    link: "https://promo.restbest.pro/features/modul-modifikator/"
  },
  {
    title: "модуль ВЫЗОВ",
    description: "Гость сам вызывает нужного сотрудника через QR — быстро, без лишних движений. Официанты обслуживают на 30% больше гостей.",
    link: "https://promo.restbest.pro/features/modul-vyzov/"
  },
  {
    title: "модуль ОФИЦИАНТ",
    description: "Официант оформляет заказ в 2 клика. Видео, допы, без ошибок — обслуживание быстрее. Средний чек растёт стабильно.",
    link: "https://promo.restbest.pro/features/modul-ofitsiant/"
  },
  {
    title: "модуль АКЦИИ",
    description: "Система сама предлагает бонусы и подарки. Вы управляете акциями за пару кликов. Средний чек растёт без затрат.",
    link: "https://promo.restbest.pro/features/modul-aktsii/"
  },
  {
    title: "модуль ИНТЕГРАЦИИ",
    description: "iiko, R-Keeper, СБИС, CloudPayments, CloudTips, Telegram – всё работает как единая система. Без ручного ввода и дублирования.",
    link: "https://promo.restbest.pro/features/modul-integratsii/"
  },
  {
    title: "модуль ДОСТАВКА",
    description: "Гости заказывают с вашего сайта — без комиссий, агрегаторов и лишней нагрузки. Зарабатываете на 30–50% больше, чем с агрегаторами.",
    link: "https://promo.restbest.pro/features/modul-dostavka/"
  },
  {
    title: "модуль ОТЧЕТЫ",
    description: "Вся выручка, заказы и работа команды — в Telegram. Контроль без таблиц и ожиданий. Решения, которые сразу дают прибыль.",
    link: "https://promo.restbest.pro/features/modul-otchety/"
  }
];

const FeatureCard = ({ title, description, link }) => (
  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 transform hover:-translate-y-2">
    <h3 className="text-xl font-semibold mb-4 text-lime-400 uppercase">{title}</h3>
    <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-semibold hover:text-lime-400 transition-colors duration-300 flex items-center group"
    >
      Подробнее
      <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  </div>
);

const Features = () => {
  return (
    <div className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Возможности
          </h2>
          <div className="flex justify-center space-x-4 text-gray-400">
            {featuresData.slice(0, 5).map((feature, index) => (
              <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">{feature.title}</a>
            ))}
          </div>
           <div className="flex justify-center space-x-4 text-gray-400 mt-2">
            {featuresData.slice(5, 11).map((feature, index) => (
              <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">{feature.title}</a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}

          <div className="lg:col-span-1 md:col-span-2 rounded-2xl overflow-hidden">
            <img
              src="https://promo.restbest.pro/wp-content/uploads/2025/06/modulvozmozhnosti.png"
              alt="Waiter with QR code"
              className="w-full h-full object-cover"
            />
          </div>

          {featuresData.slice(3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
