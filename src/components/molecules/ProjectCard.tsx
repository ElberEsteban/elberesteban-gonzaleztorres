// src/components/molecules/ProjectCard.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../atoms/Button';
import { Modal } from '../atoms/Modal';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  details: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  details,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tarjeta del proyecto */}
      <div className="min-w-[300px] max-w-[300px] bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-400 transition-all duration-300 flex-shrink-0 card-hover">
        <div className="relative h-40 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="300px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-black mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
            type="button"
          >
            Saber más →
          </button>
        </div>
      </div>

      {/* Modal con detalles del proyecto */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">{details}</p>
        {link && link !== '#' && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" type="button">
              Ver Proyecto
            </Button>
          </a>
        )}
      </Modal>
    </>
  );
};