import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureCallPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль ВЫЗОВ">
      <div className="space-y-16">

        <Section
          title="Каждый вызов — это деньги"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest61.jpg"
          imageAlt="Waiter receiving a call notification"
        >
          <p>Гость нажимает «Вызвать» — официант получает уведомление. Без задержек, без суеты. Быстрее обслужили — быстрее сделали доп. заказ — выше чек.</p>
        </Section>

        <Section
          title="Персональный вызов нужному сотруднику"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest62.jpg"
          imageAlt="Calling specific staff"
          reverse={true}
        >
          <p>Гость выбирает, кого вызвать: официанта, кальянщика, администратора. Не тратится время на уточнения — каждый сразу делает своё. Система работает как команда.</p>
        </Section>

        <Section
          title="Подробности сразу — не нужно переспрашивать"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest63.jpg"
          imageAlt="Call details on phone"
        >
          <p>«Принести счёт», «Наличными», «Дозаказ», «Нужны салфетки» — гость указывает всё сразу, официант получает полный контекст. Меньше слов — меньше ошибок — выше скорость.</p>
        </Section>

        <Section
          title="Уведомления в Telegram — кому нужно"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest64.jpg"
          imageAlt="Telegram notifications"
          reverse={true}
        >
          <p>Можно настроить:– каждый официант получает вызов только по своим столам– или вся команда видит вызов в общем чате. Контроль и скорость — в любой загрузке.</p>
        </Section>

        <Section
          title="Надёжнее и дешевле, чем физические кнопки"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest65.jpg"
          imageAlt="Comparison with physical buttons"
        >
          <p>– Не ломается<br/>– Не требует замены батареек<br/>– Не стоит 3–6 тысяч ₽ за штуку<br/>– Не требует шлюза и установки</p>
          <p className="font-semibold mt-2">Экономия на оборудовании — сразу. Работает всегда.</p>
        </Section>

        <Section
          title="Отчёты, статистика, полная прозрачность"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest66.jpg"
          imageAlt="Reports and statistics"
          reverse={true}
        >
          <p>Все вызовы фиксируются: кто, кого, зачем и когда. Владелец видит эффективность, управляет качеством, усиливает сервис.</p>
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

export default FeatureCallPage;
