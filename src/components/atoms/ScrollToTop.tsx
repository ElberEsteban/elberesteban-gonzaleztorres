// src/components/atoms/ScrollToTop.tsx
'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detecta el scroll para mostrar/ocultar el botón
  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 600);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  // Scroll suave hasta arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Volver arriba"
      title="Volver arriba"
      type="button"
    >
      <ArrowUp size={20} />
    </button>
  );
};