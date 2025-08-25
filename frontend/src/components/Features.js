import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedInView from './AnimatedInView';
const featuresData = [
  {
    title: "модуль МЕНЮ",
    description: "Меню, от которого не отрываются. Гость выбирает глазами. Выручка растёт.",
    path: "/features/menu",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest10.png"
  },
  {
    title: "модуль ЗАКАЗ",
    description: "Больше заказов — меньше нагрузки. Гость всё делает сам. Вы зарабатываете больше.",
    path: "/features/order",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest5.jpg"
  },
  {
    title: "модуль СЧЕТ",
    description: "Гость оплачивает сам — быстро и удобно. Вы зарабатываете быстрее и больше.",
    path: "/features/bill",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest13.png"
  },
  {
    title: "модуль ЧАЕВЫЕ",
    description: "Гости оставляют чаевые по QR. Персонал замотивирован, выручка растёт.",
    path: "/features/tips",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest33.jpg"
  },
  {
    title: "модуль МОДИФИКАТОРЫ",
    description: "Гость сам добавляет гарниры и соусы. Система продаёт допы без участия персонала.",
    path: "/features/modifiers",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest51.jpg"
  },
  {
    title: "модуль ВЫЗОВ",
    description: "Гость сам вызывает нужного сотрудника через QR — быстро, без лишних движений.",
    path: "/features/call",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest61.jpg"
  },
  {
    title: "модуль ОФИЦИАНТ",
    description: "Официант оформляет заказ в 2 клика. Видео, допы, без ошибок — обслуживание быстрее.",
    path: "/features/waiter",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest71.jpg"
  },
  {
    title: "модуль АКЦИИ",
    description: "Система сама предлагает бонусы и подарки. Вы управляете акциями за пару кликов.",
    path: "/features/promotions",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest82.jpg"
  },
  {
    title: "модуль ИНТЕГРАЦИИ",
    description: "iiko, R-Keeper, СБИС, CloudPayments, CloudTips, Telegram – всё работает как единая система.",
    path: "/features/integrations",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/rest95.jpg"
  },
  {
    title: "модуль ДОСТАВКА",
    description: "Гости заказывают с вашего сайта — без комиссий, агрегаторов и лишней нагрузки.",
    path: "/features/delivery",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/res111.jpg"
  },
  {
    title: "модуль ОТЧЕТЫ",
    description: "Вся выручка, заказы и работа команды — в Telegram. Контроль без таблиц и ожиданий.",
    path: "/features/reports",
    image: "https://promo.restbest.pro/wp-content/uploads/2025/04/12-1.jpg"
  }
];

const FeatureCard = ({ title, description, path, image }) => (
  <div className="bg-gray-900 rounded-2xl border border-gray-800 hover:border-lime-400/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-3 text-lime-400 uppercase">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-4 flex-grow">{description}</p>
      <Link
        to={path}
        className="text-white font-semibold hover:text-lime-400 transition-colors duration-300 flex items-center group mt-auto"
      >
        Подробнее
        <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </div>
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
            {featuresData.slice(0, 6).map((feature, index) => (
              <Link key={index} to={feature.path} className="hover:text-lime-400 transition-colors text-sm">{feature.title}</Link>
            ))}
          </div>
           <div className="flex justify-center space-x-4 text-gray-400 mt-2">
            {featuresData.slice(6).map((feature, index) => (
              <Link key={index} to={feature.path} className="hover:text-lime-400 transition-colors text-sm">{feature.title}</Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <AnimatedInView key={index} delay={index * 0.1}>
              <FeatureCard {...feature} />
            </AnimatedInView>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
