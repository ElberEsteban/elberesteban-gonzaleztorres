// src/components/organisms/SidebarLeft.tsx
import { cvData } from '../../data/cvData';
import { ProgressBar } from '../atoms/ProgressBar';
import { Icon } from '../atoms/Icon';
import Image from 'next/image';
import { PhoneCallIcon, MapPin, Briefcase, Mail, Languages, Code2, Sparkles } from 'lucide-react';

export const SidebarLeft = () => {
  const { personalInfo, languages, programmingLanguages, extraSkills } = cvData;

  return (
    <div className="p-6 space-y-8">
      {/* Foto y Nombre */}
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Anillo decorativo exterior */}
          <div className="absolute inset-0 rounded-full border-2 border-black"></div>
          {/* Anillo interior gris */}
          <div className="absolute inset-1 rounded-full border border-gray-200"></div>
          {/* Foto */}
          <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-100">
            <Image
              src={personalInfo.photo || '/profile-placeholder.png'}
              alt={personalInfo.name}
              fill
              sizes="128px"
              className="object-cover"
              loading="eager"
            />
          </div>
        </div>
        <h2 className="text-xl font-black text-black">{personalInfo.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{personalInfo.title}</p>
      </div>

      {/* Datos de Contacto */}
      <div className="space-y-3 text-sm border-t border-b border-gray-200 py-5">
        <div className="flex items-center gap-3">
          <PhoneCallIcon size={16} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-500 flex-1">Teléfono:</span>
          <span className="font-medium text-black">{personalInfo.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-500 flex-1">Residencia:</span>
          <span className="font-medium text-black text-right">{personalInfo.residence}</span>
        </div>
        <div className="flex items-center gap-3">
          <Briefcase size={16} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-500 flex-1">Freelance:</span>
          <span className="font-medium text-green-600 flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {personalInfo.freelance}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-500 flex-1">Email:</span>
          <span className="font-medium text-black text-right">{personalInfo.email}</span>
        </div>
      </div>

      {/* Idiomas */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Languages size={14} className="text-gray-400" />
          <h3 className="text-xs uppercase tracking-widest font-bold text-black">
            Idiomas
          </h3>
        </div>
        {languages.map((lang) => (
          <ProgressBar key={lang.name} label={lang.name} level={lang.level} />
        ))}
      </div>

      {/* Lenguajes de Programación */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Code2 size={14} className="text-gray-400" />
          <h3 className="text-xs uppercase tracking-widest font-bold text-black">
            Lenguajes de Programación
          </h3>
        </div>
        {programmingLanguages.map((lang) => (
          <ProgressBar key={lang.name} label={lang.name} level={lang.level} />
        ))}
      </div>

      {/* Habilidades Extra */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={14} className="text-gray-400" />
          <h3 className="text-xs uppercase tracking-widest font-bold text-black">
            Habilidades Extra
          </h3>
        </div>
        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600">
          {extraSkills.map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <Icon name="CheckCircle" size={14} className="text-black flex-shrink-0" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};