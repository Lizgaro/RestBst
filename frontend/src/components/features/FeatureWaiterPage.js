import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureWaiterPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль ОФИЦИАНТ">
      <div className="space-y-16">

        <Section
          title="Стажёр становится уверенным за 10 минут"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest71.jpg"
          imageAlt="New waiter using the app"
        >
          <p>Меню с видео, фото и ценами у официанта в телефоне. Быстро ориентируется, без стресса и переспросов. С первого дня работает как будто в теме.</p>
          <p className="font-semibold mt-2">Быстрое включение в работу — без затрат на обучение и долгой адаптации.</p>
        </Section>

        <Section
          title="Продаёт прямо у стола — показывает видео блюда"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest72.jpg"
          imageAlt="Showing video of a dish"
          reverse={true}
        >
          <p>Гость спрашивает: как выглядит? что в составе? сколько калорий? — всё в телефоне официанта. Видео, описание, цифры. Быстро. Убедительно. Без запинок.</p>
          <p className="font-semibold mt-2">Гость принимает решение быстрее — заказов больше, обслуживание быстрее.</p>
        </Section>

        <Section
          title="Допродажи встроены — система подскажет"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest73.jpg"
          imageAlt="Upselling suggestions"
        >
          <p>К кофе — пирожное, к пасте — вино. Даже стажёр предлагает как профи: система сама показывает, что допродать. Средний чек растёт стабильно, без контроля и напоминаний.</p>
        </Section>

        <Section
          title="Только актуальные позиции — никаких “этого нет”"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest74.jpg"
          imageAlt="Live menu availability"
          reverse={true}
        >
          <p>Официант видит в меню только то, что есть в наличии. Исключены стоп-листы и неловкие возвраты к гостю. Больше точности — меньше отказов и потерянных заказов.</p>
        </Section>

        <Section
          title="Скрытые позиции — только для официанта"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest75.jpg"
          imageAlt="Staff-only menu items"
        >
          <p>Можно настроить отдельное меню, которое видит только персонал: алкоголь, спецблюда, VIP-наборы. Дополнительные продажи — без лишнего в клиентском меню.</p>
        </Section>

        <Section
          title="Всё сразу в кассу — без ошибок и задержек"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest76.jpg"
          imageAlt="POS integration"
          reverse={true}
        >
          <p>Интеграция с iiko, R-Keeper и СБИС. Заказ оформлен — и уже на кухне. Скорость, точность и контроль — без ручной работы и пересказов.</p>
        </Section>

        <Section
          title="Больше чаевых — без доплат от вас"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest77.jpg"
          imageAlt="Tips for waiters"
        >
          <p>У официанта свой профиль с фото, видео или сторис. Гость видит, кому благодарит. Мотивация команды растёт — атмосфера и сервис становятся сильнее.</p>
        </Section>

        <Section
          title="Контроль выручки — в Telegram, без лишних действий"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest78.jpg"
          imageAlt="Telegram reports"
          reverse={true}
        >
          <p>Отчёты по заказам, столам и работе официантов приходят каждый день. Вы всегда в курсе, даже если не в зале — управление идёт автоматически.</p>
        </Section>

        <section className="text-center">
          <Button
            onClick={handleContactClick}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Подключить модуль
          </Button>
        </section>

      </div>
    </FeaturePageLayout>
  );
};

export default FeatureWaiterPage;
