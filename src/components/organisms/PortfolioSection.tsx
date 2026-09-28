// src/components/organisms/PortfolioSection.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cvData } from '../../data/cvData';
import { ProjectCard } from '../molecules/ProjectCard';

export const PortfolioSection = () => {
  // Referencia al contenedor del carrusel
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Estado del índice activo (proyecto visible)
  const [activeIndex, setActiveIndex] = useState(0);

  // Estado para saber si las flechas deben estar habilitadas
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Detecta la posición del scroll para actualizar dots y flechas
  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const cardWidth = clientWidth * 0.8; // ancho aproximado de cada tarjeta visible

    // Índice activo aproximado
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, cvData.portfolio.length - 1));

    // ¿Se puede hacer scroll a la izquierda?
    setCanScrollLeft(scrollLeft > 10);

    // ¿Se puede hacer scroll a la derecha?
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Escucha el scroll del contenedor
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollState);
    updateScrollState(); // estado inicial

    return () => container.removeEventListener('scroll', updateScrollState);
  }, []);

  // Navegar a un proyecto específico
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.8;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
  };

  // Navegar con las flechas
  const scrollBy = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section id="portfolio" className="p-8 lg:p-12 border-b border-gray-200">
      {/* Encabezado unificado */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-black text-black mb-3">
          Portafolio
        </h2>
        <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Proyectos y soluciones TI en los que he participado.
        </p>
      </div>

      {/* Contenedor del carrusel con flechas */}
      <div className="relative max-w-6xl mx-auto">

        {/* Flecha izquierda */}
        <button
          onClick={() => scrollBy('left')}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black text-white shadow-lg transition-all duration-300 ${
            canScrollLeft
              ? 'opacity-100 hover:scale-110 cursor-pointer'
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Proyecto anterior"
          type="button"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={() => scrollBy('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black text-white shadow-lg transition-all duration-300 ${
            canScrollRight
              ? 'opacity-100 hover:scale-110 cursor-pointer'
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Siguiente proyecto"
          type="button"
        >
          <ChevronRight size={24} />
        </button>

        {/* Contenedor con scroll horizontal */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 px-12 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        >
          {cvData.portfolio.map((project, i) => (
            <div key={i} className="snap-start">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores (dots) */}
      <div className="flex justify-center gap-2 mt-6">
        {cvData.portfolio.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === i
                ? 'w-8 h-2 bg-black'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-500'
            }`}
            aria-label={`Ir al proyecto ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};