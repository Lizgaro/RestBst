import React from 'react';
import FeaturePageLayout from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';
import AnimatedInView from '../AnimatedInView';

const FeatureMenuPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль МЕНЮ">
      <div className="space-y-12">
        <AnimatedInView>
          <section>
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Меню, которое продаёт — без слов</h2>
            <p>Гость не читает — он смотрит. Формат сторис вовлекает и вызывает эмоцию быстрее, чем любое описание. Уже на первом экране. Гость выбирает глазами.</p>
          </section>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <section>
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Вкус, который разлетается</h2>
            <p>Гость может поделиться блюдом — в сторис или в чат, прямо из меню. Одно нажатие — и ваше блюдо уже видят его друзья. Чем больше делятся — тем выше интерес. Популярные позиции выходят в топ, а меню начинает работать на вас, без рекламы и лишних затрат.</p>
            <p className="font-semibold mt-2">Вирусная реклама без бюджета.</p>
          </section>
        </AnimatedInView>

        <AnimatedInView delay={0.2}>
          <img src="https://promo.restbest.pro/wp-content/uploads/2025/04/rest10.png" alt="Digital Menu Example" className="rounded-2xl shadow-lg w-full" />
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <section>
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Как Instagram, только про еду</h2>
            <p>Гость может ставить лайки, видеть популярные блюда, добавлять в “Избранное” и быстро возвращаться к выбору. Еда превращается в контент.</p>
          </section>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <section>
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Поиск, который ускоряет заказы</h2>
            <p>Гость находит нужное блюдо за секунды — без лишней навигации и уточнений. Это особенно важно при большом меню или для постоянных гостей. Меню работает на вас: меньше вопросов — быстрее заказ — выше выручка.</p>
            <p className="font-semibold mt-2">Поиск, который продаёт.</p>
          </section>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <section className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Меню, от которого отказываются</h2>
            <p>Бумажное меню — прошлый век. Его не листают, не читают и не помнят. Скучное, неудобное, трудно обновляемое. Новое меню — это видео, сторис и быстрые правки. Обновляется за минуту. Вовлекает с первого экрана. Продаёт само.</p>
            <p className="font-semibold mt-2">Меню превращается в инструмент продаж.</p>
          </section>
        </AnimatedInView>

        <AnimatedInView delay={0.2}>
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Подключи. Покажи. Продай.</h2>
            <p className="max-w-2xl mx-auto mb-6">NFC — как магия для заведения. Гость подносит телефон — меню открывается само, без камеры и ожиданий. Каждая метка — к своему столику. Система точно знает, откуда заказ. Покажи блюдо — и гость заказывает. До +37% к выручке, до +60% повторных визитов.</p>
            <p className="font-semibold text-lime-400 text-lg mb-8">Меньше действий — больше продаж.</p>
            <Button
              onClick={handleContactClick}
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Подключить модуль
            </Button>
          </section>
        </AnimatedInView>
      </div>
    </FeaturePageLayout>
  );
};

export default FeatureMenuPage;
