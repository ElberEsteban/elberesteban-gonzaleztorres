// src/components/organisms/SidebarRight.tsx
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { cvData } from '../../data/cvData';
import Link from 'next/link';

// Mapa de iconos oficiales de marcas (react-icons)
const iconMap = {
  Github: FaGithub,
  Instagram: FaInstagram,
};

export const SidebarRight = () => {
  const { socialLinks } = cvData;

  return (
    <div className="flex lg:flex-col gap-4 p-4">
      {socialLinks.map((social) => {
        // Obtenemos el componente del icono desde el mapa
        const IconComponent = iconMap[social.icon as keyof typeof iconMap];
        if (!IconComponent) return null;

        return (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
            aria-label={social.name}
            title={social.name}
          >
            <IconComponent size={28} />
          </Link>
        );
      })}
    </div>
  );
};
