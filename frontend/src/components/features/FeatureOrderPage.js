import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureOrderPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль ЗАКАЗ">
      <div className="space-y-16">
        <Section
          title="Больше заказов, меньше нагрузки на персонал"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest5.jpg"
          imageAlt="Guests ordering from phone"
        >
          <p>Гость собирает заказ сам, с официантом или всей компанией. Каждый видит, что заказал, может добавить или изменить позиции. Увеличивается скорость обслуживания и средний чек.</p>
        </Section>

        <Section
          title="Каждый QR-код знает своё место"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest40-2.png"
          imageAlt="QR code on a table"
          reverse={true}
        >
          <p>Столик, номер в отеле или кресло в кино — заказ сразу привязан к нужной точке. Система точно знает, откуда заказ, без ошибок и лишних действий. Можно создать сколько угодно QR — подходит для любых локаций.</p>
        </Section>

        <Section
          title="Собрать заказ - просто и понятно"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest6.jpg"
          imageAlt="Interface of ordering app"
        >
          <p>Гость добавляет блюда как в интернет-магазине: всё с фото, составом, калорийностью. Можно оставить комментарий: “без соуса”, “без лука”. Позиции можно менять и удалять до подтверждения.</p>
        </Section>

        <section className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-lime-400 mb-6">Управление заказом - под каждого гостя</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-center max-w-2xl mx-auto">
            <li>В заказе видно, кто его создал: официант или это “мой заказ”</li>
            <li>К каждому блюду можно добавить комментарий или пожелание</li>
            <li>Состав, добавки и аллергены всегда под рукой</li>
            <li>Гость может собрать заказ сам без официанта</li>
            <li>Работает как для одного человека, так и для компании</li>
            <li>Повышает выручку и ускоряет оборот гостей в зале</li>
          </ul>
        </section>

        <Section
          title="Хаос заказов уходит в прошлое"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest9.png"
          imageAlt="Order management system"
        >
          <p>При устном заказе — путаница, забытые пожелания, ошибки. С RestBest всё фиксируется в системе: кто заказал, что выбрал, какие комментарии. Ничего не теряется, официант не путается, гость доволен.</p>
        </Section>

        <Section
          title="Работает с интеграцией или вообще без неё — как удобно вам"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest10.jpg"
          imageAlt="Integration logos"
          reverse={true}
        >
          <p>Модуль ЗАКАЗ можно запустить даже без POS-системы — заказы будут приходить в закрытый Telegram-канал. Хочешь всё по-серьёзному? Подключим iiko, R-Keeper, СБИС или любую другую систему. Все сценарии — кафе, фастфуд, отель, доставка — включаются за секунду.</p>
        </Section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Подключи модуль ЗАКАЗ и обслуживай в 2 раза быстрее</h2>
          <p className="max-w-2xl mx-auto mb-8">Модуль ЗАКАЗ снимает нагрузку с персонала, ускоряет обслуживание и повышает лояльность гостей. Включи — и система начнёт работать уже сегодня.</p>
          <Button
            onClick={handleContactClick}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Подключить модуль ЗАКАЗ
          </Button>
        </section>
      </div>
    </FeaturePageLayout>
  );
};

export default FeatureOrderPage;
