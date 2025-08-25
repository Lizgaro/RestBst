import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureModifiersPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль МОДИФИКАТОРЫ">
      <div className="space-y-16">

        <Section
          title="Модификаторы, которые увеличивают выручку"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest51.jpg"
          imageAlt="Modifiers example"
        >
          <p>Гость сам добавляет соусы, гарниры, сиропы и опции. Без ошибок. Без участия персонала. До +30% к чеку. Без хаоса и лишней нагрузки.</p>
        </Section>

        <Section
          title="Умная логика. Меньше ошибок."
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest52.jpg"
          imageAlt="Smart logic interface"
          reverse={true}
        >
          <p>Система сама ограничивает выбор, подсказывает и направляет гостя. Никаких лишних действий. Никаких жалоб. Всё работает чётко. Без сбоев. Без переспросов.</p>
        </Section>

        <Section
          title="Всё подтягивается из кассы. Без ручной работы."
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest53.jpg"
          imageAlt="POS integration"
        >
          <p>Автоматическая синхронизация с iiko, R-Keeper и СБИС. Меньше рутинных задач. Больше контроля.</p>
        </Section>

        <Section
          title="Автопродажи. Без участия персонала."
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest54.jpg"
          imageAlt="Automated upselling"
          reverse={true}
        >
          <p>Система предлагает нужные дополнения — вовремя и без давления. Увеличивается чек. Персонал занимается обслуживанием, а не продажей.</p>
        </Section>

        <Section
          title="Управление в пару кликов. Всё под контролем."
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest55.jpg"
          imageAlt="Easy management interface"
        >
          <p>Лимиты, цены, обязательные параметры — настраиваются за минуты. Вы управляете модификаторами сами — легко и точно.</p>
        </Section>

        <Section
          title="Видно. Понятно. Работает на выручку."
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest56.jpg"
          imageAlt="Clear and effective interface"
          reverse={true}
        >
          <p>Все модификаторы на виду — гость сразу выбирает нужное. Клиент заказывает быстрее. Вы зарабатываете больше.</p>
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

export default FeatureModifiersPage;
