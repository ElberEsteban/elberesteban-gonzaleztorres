// src/components/organisms/KnowledgeSection.tsx
import { cvData } from '../../data/cvData';
import { KnowledgeCard } from '../molecules/KnowledgeCard';
import type { ComponentProps } from 'react';

export const KnowledgeSection = () => {
  return (
    <section id="knowledge" className="p-8 lg:p-12 border-b border-gray-200">
      {/* Encabezado unificado */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-black text-black mb-3">
          Mis Conocimientos
        </h2>
        <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Áreas de especialización y experiencia técnica adquirida a lo largo de mi carrera profesional.
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cvData.knowledge.map((item) => (
          <KnowledgeCard
            key={item.title}
            {...item}
            icon={item.icon as ComponentProps<typeof KnowledgeCard>['icon']}
          />
        ))}
      </div>
    </section>
  );
};