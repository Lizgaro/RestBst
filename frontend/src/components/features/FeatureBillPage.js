import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureBillPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль СЧЕТ">
      <div className="space-y-16">

        <Section
          title="Оплата, которая работает на ваш доход"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest11.png"
          imageAlt="Payment process illustration"
        >
          <p>Гость оплачивает заказ сам — онлайн, заранее или после — как удобно вашему заведению. Вы зарабатываете быстрее и больше.</p>
        </Section>

        <Section
          title="Заранее или после — решаете вы"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest12.png"
          imageAlt="Payment options"
          reverse={true}
        >
          <p>Можно включить предоплату — сначала оплата, потом приготовим заказ. Удобно для заведений быстрого питания и мероприятий: стендапов, концертов, квизов.</p>
          <p>Оплата после — классический вариант для ресторанов: покушал и оплатил счёт. Всё настраивается под ваш формат и ваши правила.</p>
        </Section>

        <Section
          title="Оплата без ожиданий"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest13.png"
          imageAlt="Fast payment on phone"
        >
          <p>Гость оплачивает заказ прямо на своём телефоне — быстро и удобно, как в интернет-магазине. Быстрее оплата — больше гостей, больше выручка.</p>
        </Section>

        <Section
          title="Деление счёта между гостями"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest14.png"
          imageAlt="Splitting the bill"
          reverse={true}
        >
          <p>Каждый платит за себя — со своего телефона. Удобно, когда за столом много гостей. Без путаницы «кто что заказывал» и долгих расчётов. Быстрая оплата — больше выручки.</p>
        </Section>

        <Section
          title="Гибкость настройки"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest15.png"
          imageAlt="Flexible payment settings"
        >
          <p>Онлайн, наличными, переводом на карту, терминалом или по QR. Оплата — по вашим правилам.</p>
        </Section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Подключаем онлайн-оплату от 1 дня</h2>
          <p className="max-w-2xl mx-auto mb-8">Обычно на рынке подключение оплаты занимает недели или даже месяцы. У нас — от 1 дня. Мы — партнёр платёжной системы CloudPay (Т-Банк). Запускаем быстро. Настраиваем выгодно. Помогаем на каждом шаге.</p>
          <Button
            onClick={handleContactClick}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Подключить модуль СЧЕТ
          </Button>
        </section>

      </div>
    </FeaturePageLayout>
  );
};

export default FeatureBillPage;
