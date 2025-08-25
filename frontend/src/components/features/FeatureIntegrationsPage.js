import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureIntegrationsPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль ИНТЕГРАЦИИ">
      <div className="space-y-16">

        <Section
          title="Интеграция с iiko"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest91.jpg"
          imageAlt="iiko logo"
        >
          <p>Запросили ключ, вставили — меню загружено. Цены, модификаторы, стоп-листы подтягиваются автоматически. Заказы — с подтверждением официанта или сразу на кухню.</p>
          <ul className="list-disc list-inside mt-4">
            <li>API бесплатный.</li>
            <li>Меню всегда актуально.</li>
            <li>Гость уверен в заказе.</li>
            <li>Команда не тратит время.</li>
          </ul>
        </Section>

        <Section
          title="Интеграция с R-Keeper"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest92.jpg"
          imageAlt="R-Keeper logo"
          reverse={true}
        >
          <p>Работаем через официальный интерфейс WS. Ключ запрашивается у вашего представителя R-Keeper. Стоимость — 12 000 ₽ в год. Мы — официальный партнёр и агрегатор.</p>
          <p>Меню, цены, модификаторы и стоп-листы — подтягиваются автоматически. Передаём статусы заказа: принят, в пути, готов. Номер заказа из R-Keeper показываем гостю в приложении.</p>
        </Section>

        <Section
          title="Интеграция с СБИС"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest93.jpg"
          imageAlt="Saby (SBIS) logo"
        >
          <p>Подходит всем, у кого используется касса СБИС. Меню, цены, модификаторы, стоп-листы — всё обновляется само. API-ключ бесплатный, генерируется в личном кабинете СБИС.</p>
          <p>Передаём: заказ, адрес, состав, сумму, оплату, сдачу.</p>
        </Section>

        <Section
          title="Интеграция с Telegram"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest94.jpg"
          imageAlt="Telegram logo"
          reverse={true}
        >
          <p>Все события — в одном канале: заказы, оплаты, вызовы, отчёты. Официанты регистрируются и подписываются на уведомления через Telegram. Владелец получает ежедневную выручку, статистику по заказам и столам. Настройка за 1 минуту. Всё видно без входа в систему.</p>
        </Section>

        <Section
          title="Онлайн-оплата: CloudPayments и B2P"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest95.jpg"
          imageAlt="Payment system logos"
        >
          <p>Карты, СБП, СберPay, Тинькофф Pay — всё работает. Подключены два оператора. Если один даёт сбой — система сама переключается. Оплата встроена в меню. Гость платит удобно, вы получаете стабильно. Уведомления о сбоях — в Telegram.</p>
        </Section>

        <Section
          title="Чаевые: CloudTips"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest96.jpg"
          imageAlt="CloudTips logo"
          reverse={true}
        >
          <p>После оплаты гость может оставить чаевые через CloudTips. Без регистрации, без скачиваний — прямо в интерфейсе. Можно указать имя, фото, должность — и получать чаевые напрямую на карту. Удобно для гостя. Мотивация для команды.</p>
        </Section>

        <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Индивидуальные интеграции: CRM, кассы, бонусы, доставка</h2>
            <p className="max-w-3xl mx-auto mb-8">Хотите подключить другую кассу, свою CRM, платёжную систему, Яндекс.Доставку, 2ГИС или что-то уникальное? Интегрируемся с чем угодно — на коммерческой основе. Вы пишете, что нужно. Мы считаем, называем срок и стоимость — и делаем. Любая система. Любые данные. Прозрачные условия. Работаем под ваш сценарий.</p>
          <Button
            onClick={handleContactClick}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Обсудить интеграцию
          </Button>
        </section>

      </div>
    </FeaturePageLayout>
  );
};

export default FeatureIntegrationsPage;
