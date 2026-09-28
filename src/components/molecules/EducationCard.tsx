// src/components/molecules/EducationCard.tsx
import { Badge } from '../atoms/Badge';

interface EducationCardProps {
  institution: string;
  degree: string;
  date: string;
  description: string;
}

export const EducationCard = ({ institution, degree, date, description }: EducationCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 card-hover">
      <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
        <h3 className="text-lg font-bold text-black">{institution}</h3>
        <Badge>{date}</Badge>
      </div>
      <h4 className="text-md font-semibold text-gray-700 mb-2">{degree}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};