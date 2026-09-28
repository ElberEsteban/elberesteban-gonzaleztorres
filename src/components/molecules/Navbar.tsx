// src/components/molecules/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detecta el scroll para mostrar/ocultar la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave hacia una sección
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Perfil', id: 'profile' },
    { label: 'Conocimientos', id: 'knowledge' },
    { label: 'Educación', id: 'education' },
    { label: 'Portafolio', id: 'portfolio' },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}
    >
      <div className="bg-black/90 backdrop-blur-md text-white px-2 py-2 rounded-full shadow-2xl flex gap-1 text-sm">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-medium"
            type="button"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};