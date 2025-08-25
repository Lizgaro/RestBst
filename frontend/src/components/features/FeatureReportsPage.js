import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureReportsPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль ОТЧЕТЫ">
      <div className="space-y-16">

        <Section
          title="Контроль выручки без лишних действий"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/12-1.jpg"
          imageAlt="Revenue control in Telegram"
        >
          <p>Для вас, как руководителя, это моментальный доступ к выручке и активности без необходимости вручную проверять смены. Вы всегда видите реальную картину продаж прямо в Telegram.</p>
          <p className="font-semibold mt-2">Что это вам даст: экономию времени на контроль процессов и ускорение принятия решений, которые напрямую влияют на рост прибыли.</p>
        </Section>

        <Section
          title="Быстрая реакция на ситуацию в бизнесе"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/12-2.jpg"
          imageAlt="Reacting to business situations"
          reverse={true}
        >
          <p>Отчёты позволяют заметить падение продаж или всплеск активности сразу, а не спустя недели. Это даёт возможность быстро скорректировать действия команды и минимизировать потери.</p>
          <p className="font-semibold mt-2">Выгода: уменьшение потерь, увеличение продаж и сохранение оборота без провалов.</p>
        </Section>

        <Section
          title="Прозрачность работы команды"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/12-3.jpg"
          imageAlt="Team performance transparency"
        >
          <p>Вы точно видите, кто из сотрудников приносит деньги, а кто работает вхолостую. Нет догадок — только факты. Можно поощрять сильных и вовремя обучать или заменять слабых.</p>
          <p className="font-semibold mt-2">Что вы получите: рост выручки за счёт усиления команды и снижение затрат на неэффективных сотрудников.</p>
        </Section>

        <Section
          title="Индивидуальные отчёты под ваш бизнес"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/12-4.jpg"
          imageAlt="Custom reports"
          reverse={true}
        >
          <p>Если нужны особые отчёты под вашу модель — разработаем их для вас. Поможем сформулировать задачи, подскажем, как сделать ещё эффективнее, рассчитаем стоимость работы. Обычно такие доработки занимают от 1 до 5 часов и обходятся недорого.</p>
          <p className="font-semibold mt-2">Результат: точная аналитика под ваш бизнес, грамотные управленческие решения и рост прибыли без лишних расходов.</p>
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

export default FeatureReportsPage;
