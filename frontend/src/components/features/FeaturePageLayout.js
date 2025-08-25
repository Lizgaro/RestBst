import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Section = ({ title, children, image, imageAlt, reverse = false, textFirst = false }) => (
  <section className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className={`md:w-1/2 ${textFirst ? 'md:order-first' : ''}`}>
      <h2 className="text-3xl font-bold text-lime-400 mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
    <div className="md:w-1/2">
      {image && <img src={image} alt={imageAlt} className="rounded-2xl shadow-lg w-full" />}
    </div>
  </section>
);

const FeaturePageLayout = ({ title, children }) => {
  return (
    <div className="text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="text-lime-400 hover:text-lime-300 transition-colors flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Назад на главную
          </Link>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center uppercase">{title}</h1>
        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeaturePageLayout;
