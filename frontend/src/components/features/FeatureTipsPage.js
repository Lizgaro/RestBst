import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureTipsPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль ЧАЕВЫЕ">
      <div className="space-y-16">

        <Section
          title="Чаевые включаются за 1 клик"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest31.png"
          imageAlt="One click activation"
        >
          <p>Просто нажмите кнопку в личном кабинете — и у гостей появится вкладка “Чаевые”. Без договоров, подключений и ожиданий.</p>
          <p className="font-semibold mt-2">Работает сразу — без лишнего.</p>
        </Section>

        <Section
          title="Без путаницы с чаевыми"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest32.png"
          imageAlt="Integration with POS"
          reverse={true}
        >
          <p>Интеграция с iiko, R-Keeper и модулем “Официант” показывает, кто обслуживал стол. Гость видит своего официанта — и оставляет чаевые именно ему. Вы контролируете процесс.</p>
        </Section>

        <Section
          title="Больше чаевых за счёт видео и фото"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest33.jpg"
          imageAlt="Waiter profile with video"
        >
          <p>Официант может загрузить фото или видео-сторис в личном кабинете. Гость видит живого человека, улыбку, харизму — и оставляет больше чаевых. Такой подход увеличивает чаевые до 80%.</p>
        </Section>

        <Section
          title="Как получать чаевые — выбирает официант"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest34.jpg"
          imageAlt="Payout options"
          reverse={true}
        >
          <p>Можно получать чаевые сразу на карту — после каждого перевода. А можно копить и выводить одной суммой, когда удобно. Всё просто — официант сам выбирает в личном кабинете, как ему удобно. Можно настроить перевод на карту — быстро и без комиссии.</p>
        </Section>

        <Section
          title="Онлайн или на карту — выбор за гостем"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest35.jpg"
          imageAlt="Guest payment choice"
        >
          <p>Два способа чаевых в одном QR. Официант сам выбирает, что показать первым. Когда удобно и просто — чаевых больше.</p>
        </Section>

        <Section
          title="Чаевые — не только официанту"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/rest36.jpg"
          imageAlt="Tipping multiple staff members"
          reverse={true}
        >
          <p>Можно настроить чаевые для повара, бармена, администратора — кого захотите. Гость сам выбирает, кого отблагодарить. Для вас — простая настройка и дополнительная мотивация команды.</p>
        </Section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Чаевые, которые работают на бизнес</h2>
          <p className="max-w-2xl mx-auto mb-8">Гостю удобно — он чаще благодарит. Персонал замотивирован — работает лучше. Выручка растёт. Атмосфера в зале — сильнее.</p>
          <Button
            onClick={handleContactClick}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Попробовать бесплатно
          </Button>
        </section>

      </div>
    </FeaturePageLayout>
  );
};

export default FeatureTipsPage;
