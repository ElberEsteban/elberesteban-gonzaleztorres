// src/components/organisms/EducationSection.tsx
import { cvData } from '../../data/cvData';
import { EducationCard } from '../molecules/EducationCard';

export const EducationSection = () => {
  return (
    <section id="education" className="p-8 lg:p-12 border-b border-gray-200">
      {/* Encabezado unificado */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-black text-black mb-3">
          Educación
        </h2>
        <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Mi formación académica y técnica a lo largo de los años.
        </p>
      </div>

      {/* Lista de tarjetas de educación */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {cvData.education.map((item, i) => (
          <EducationCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
};