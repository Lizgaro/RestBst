import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ModuleTabs from './components/ModuleTabs';
import ModuleCard from './components/ModuleCard';
import ConsultationWidget from './components/ConsultationWidget';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import { modulesData } from './data/mockData';

function App() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pb-20">
        <ModuleTabs 
          activeModule={activeModule}
          setActiveModule={setActiveModule}
        />
        
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="space-y-8">
            {modulesData.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                description={module.description}
                highlight={module.highlight}
                image={module.image}
                hasGradientBorder={module.hasGradientBorder}
              />
            ))}
          </div>
          
          {/* Gift section */}
          <div className="mt-16 bg-gradient-to-r from-lime-400/10 to-lime-400/20 border border-lime-400/30 rounded-2xl p-8 text-center">
            <div className="text-lime-400 text-sm font-medium mb-2">Подарок</div>
            <h3 className="text-white text-3xl font-bold mb-4">Получите 5 000 ₽</h3>
            <p className="text-white text-xl mb-6">на запуск мечты</p>
            
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center text-lime-400">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Ускорим обслуживание — ×1.5
              </div>
              <div className="flex items-center text-lime-400">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Увеличим средний чек — +30 %
              </div>
              <div className="flex items-center text-lime-400">
                <span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>
                Вернём гостей — до 40 % возврата
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">Скидка действует 5 дней. Мы свяжемся после заявки.</p>
          </div>
        </div>
      </main>

      <ConsultationWidget />
    </div>
  );
}

export default App;