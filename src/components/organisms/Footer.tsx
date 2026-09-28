// src/components/organisms/Footer.tsx
'use client';

import { FaGithub, FaInstagram } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import { cvData } from '../../data/cvData';

// Mapa de iconos oficiales
const iconMap = {
  Github: FaGithub,
  Instagram: FaInstagram,
};

export const Footer = () => {
  const { personalInfo, socialLinks } = cvData;

  // Enlaces rápidos a secciones
  const quickLinks = [
    { label: 'Perfil', id: 'profile' },
    { label: 'Conocimientos', id: 'knowledge' },
    { label: 'Educación', id: 'education' },
    { label: 'Portafolio', id: 'portfolio' },
  ];

  // Scroll suave a secciones
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Sección principal del footer */}
      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Columna 1: Info personal */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-white">
            {personalInfo.name}
          </h3>
          <p className="text-sm text-gray-400">
            {personalInfo.title}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Comprometido con la innovación y la mejora continua en el área de TI.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">
            Navegación
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  type="button"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300"></span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">
            Sígueme
          </h4>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap];
              if (!IconComponent) return null;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                  title={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            type="button"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
            Volver arriba
          </button>
        </div>
      </div>

      {/* Barra inferior con copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p>
            Hecho con <span className="text-white">Next.js</span> + <span className="text-white">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};