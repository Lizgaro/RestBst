import React from 'react';
import FeaturePageLayout, { Section } from './FeaturePageLayout';
import { Button } from '../ui/button';
import { contactData } from '../../data/contactData';

const FeatureDeliveryPage = () => {
  const handleContactClick = () => {
    window.open(contactData.telegramLink, '_blank');
  };

  return (
    <FeaturePageLayout title="модуль ДОСТАВКА">
      <div className="space-y-16">

        <Section
          title="Готовый сайт доставки — по вашей ссылке"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/res111.jpg"
          imageAlt="Delivery website on different devices"
        >
          <p>У модуля доставки — отдельная ссылка, которую можно использовать в рекламе: Instagram, Яндекс.Директ, на флаерах или в социальных сетях. Клиент переходит по ссылке — попадает на ваш полноценный сайт, где сразу оформляет заказ: выбирает, добавляет в корзину, оплачивает и сам решает — оформить доставку или забрать самовывозом.</p>
          <p className="font-semibold mt-2">Работает как интернет-магазин, но заточен под еду. Адаптирован под мобильные и компьютерные устройства — удобно и с телефона, и с ПК.</p>
        </Section>

        <Section
          title="Интеграция с кассой или Telegram"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/res112.jpg"
          imageAlt="Integration with POS or Telegram"
          reverse={true}
        >
          <p>Система подключается к R-Keeper, iiko и СБИС — заказы сразу уходят на кухню, в кассу и в отчёты. Если кассы нет — не проблема. Все заказы приходят в Telegram-чат, где их видит администратор, повар или курьер.</p>
          <p className="font-semibold mt-2">Всё работает — с кассой или без неё. Главное, чтобы была еда.</p>
        </Section>

        <Section
          title="Тайм-слоты и предварительные заказы"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/res113.jpg"
          imageAlt="Time slots for delivery"
        >
          <p>Клиент сам выбирает удобное время доставки. Система рассчитывает ближайший свободный слот автоматически, учитывая: время на приготовление и среднее время на доставку. Если гость зашёл в 19:00, а кухня загружена, система предложит реальное время доставки — например, 20:30.</p>
          <p className="font-semibold mt-2">Никаких обещаний “на глаз” — только точный расчёт.</p>
        </Section>

        <Section
          title="Минимальная сумма заказа и гибкая доплата"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/res114.jpg"
          imageAlt="Minimum order amount feature"
          reverse={true}
        >
          <p>Вы сами устанавливаете минимальную сумму, при которой доставка остаётся рентабельной — например, 1 500 ₽ или 2 000 ₽. Если гость не набрал нужную сумму, система вежливо предложит два варианта: добавить позиции в корзину или просто доплатить разницу. Всё работает автоматически.</p>
        </Section>

        <Section
          title="Умная форма: сдача с суммы при оплате наличными"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/res115.jpg"
          imageAlt="Change calculation for cash payment"
        >
          <p>Если гость выбирает оплату наличными, система автоматически уточняет: с какой суммы нужна сдача. Эта информация сразу передаётся курьеру. Больше никаких звонков и уточнений на ходу. Курьер всегда подготовлен.</p>
        </Section>

        <Section
          title="В доставке работают все те же функции, что и в обычном меню"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/res117.jpg"
          imageAlt="Full menu features in delivery"
          reverse={true}
        >
          <p>Гость может выбирать модификаторы, оставлять комментарии к блюдам и указывать любые пожелания — всё работает так же, как в ресторане. Вы можете настроить отображение только нужных позиций, которые актуальны для доставки. Интерфейс полностью адаптирован под смартфон, работает быстро и удобно.</p>
        </Section>

        <Section
          title="Любые способы оплаты — на ваших условиях"
          image="https://promo.restbest.pro/wp-content/uploads/2025/04/res118.jpg"
          imageAlt="Multiple payment options"
        >
          <p>Система поддерживает все популярные способы расчёта: СБП, СберPay, Тинькофф Pay, оплата картой, наличные, терминал у курьера — всё подключается всего за один день. Вы сами выбираете, какие способы включить, а какие скрыть.</p>
        </Section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Telegram и полная прозрачность</h2>
          <p className="max-w-3xl mx-auto mb-8">Все заказы моментально поступают в Telegram-чат. Можно подключить ежедневные отчёты — выручка, количество заказов, популярные позиции, средний чек. Сводка приходит прямо в Telegram, в удобное время. Вы управляете бизнесом из телефона.</p>
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

export default FeatureDeliveryPage;
