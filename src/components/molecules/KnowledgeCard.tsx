// src/components/molecules/KnowledgeCard.tsx
import { Icon } from '../atoms/Icon';
import type { ComponentProps } from 'react';

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: ComponentProps<typeof Icon>['name'];
}

export const KnowledgeCard = ({ title, description, icon }: KnowledgeCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 group card-hover">
      {/* Icono con fondo negro degradado */}
      <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon name={icon} size={30} className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};