import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeaturePromotionsPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль АКЦИИ">
      <div className="space-y-16">

        <Section
          title="Маркетинг, который работает сам"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest81.jpg"
          imageAlt="Automated marketing"
        >
          <p>Настроили один раз — и всё: акция срабатывает автоматически, без участия персонала и без риска ошибки. Вы экономите время, не отвлекаете команду и получаете стабильный результат — без ручного включения и постоянных напоминаний.</p>
        </Section>

        <Section
          title="Рост среднего чека без давления"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest82.jpg"
          imageAlt="Gentle upselling pop-up"
          reverse={true}
        >
          <p>Если сумма заказа меньше заданного порога, система показывает pop-up и предлагает гостю добавить недостающую сумму, чтобы получить подарок. Всё происходит мягко, в игровой форме. Вы увеличиваете средний чек, не перегружая персонал и не оказывая давления на гостя.</p>
        </Section>

        <Section
          title="Гибкие условия под ваш бизнес"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest83.jpg"
          imageAlt="Flexible promotion conditions"
        >
          <p>Вы сами выбираете, когда и как будет работать акция: в ресторане или на доставку, по дням недели или месяцам, с выбором конкретных подарков и сумм. Всё настраивается в админке — под ваш формат, цели и аудиторию. Гибкость управления позволяет запускать акции, которые действительно работают на результат.</p>
        </Section>

        <Section
          title="Визуальный pop-up, который продаёт"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest84.jpg"
          imageAlt="Visual pop-up with progress bar"
          reverse={true}
        >
          <p>Гость видит красивое всплывающее окно с прогресс-баром и каруселью подарков. Это не просто напоминание — это инструмент продаж, встроенный в корзину. Вы вовлекаете гостя до завершения заказа, повышая вероятность допродаж и создавая ощущение ценности предложения.</p>
        </Section>

        <Section
          title="Управление акциями в два клика"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest85.jpg"
          imageAlt="Easy promotion management"
        >
          <p>Все настройки собраны в модуле «Маркетинг»: включение/отключение акции, сроки действия, выбор подарков, условия срабатывания. Простая и логичная структура — вы управляете акциями без помощи программистов, напрямую через админку. Быстро, понятно, под контроль.</p>
        </Section>

        <Section
          title="Индивидуальные акции под ваш бизнес"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest86.jpg"
          imageAlt="Custom promotion development"
          reverse={true}
        >
          <p>Хотите акцию к 8 марта, 23 февраля, Новому году или запуск уникальной бонусной механики для своих гостей? Мы разработаем её под вас. Настроим любые условия, визуалы, тексты и логику отображения. Оцениваем трудозатраты, согласовываем сроки и стоимость — и запускаем готовое решение. Вы получаете эксклюзивную акцию, которая работает именно на ваш формат.</p>
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

export default FeaturePromotionsPage;
