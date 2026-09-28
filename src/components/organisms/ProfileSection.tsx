// src/components/organisms/ProfileSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cvData } from '@/data/cvData';
import { Button } from '../atoms/Button';
import { Modal } from '../atoms/Modal';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { personalInfo, contact } = cvData;

  return (
    <>
      <section
        id="profile"
        className="p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50 border-b border-gray-200"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Columna de Texto */}
          <div className="space-y-8 animate-slide-up">
            <div>
              {/* Etiqueta superior */}
              <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Hola, soy
              </p>

              {/* Nombre con más impacto */}
              <h1 className="text-4xl lg:text-6xl font-black text-black leading-tight tracking-tight">
                {personalInfo.name}
              </h1>

              {/* Línea decorativa */}
              <div className="w-20 h-1 bg-black mt-5 mb-5"></div>

              {/* Título profesional */}
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-600">
                {personalInfo.title}
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-gray-600 leading-relaxed text-justify">
              {personalInfo.profile}
            </p>

            {/* Botón de contacto */}
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="group"
              type="button"
            >
              Contáctame
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Button>
          </div>

          {/* Columna de Imagen del Hero */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gray-200 rounded-full blur-3xl opacity-50" />
              <Image
                src={personalInfo.photo || '/profile-placeholder.png'}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-contain relative z-10 drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Contacto */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Información de Contacto"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            ¡Gracias por tu interés! Puedes contactarme a través de los siguientes medios:
          </p>
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="text-black" size={20} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-black hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="text-black" size={20} />
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="font-medium text-black hover:underline"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="text-black" size={20} />
              <div>
                <p className="text-sm text-gray-500">Ubicación</p>
                <p className="font-medium text-black">{personalInfo.residence}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};