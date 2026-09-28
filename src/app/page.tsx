// src/app/page.tsx
import { MainLayout } from '@/components/templates/MainLayout';
import { ProfileSection } from '@/components/organisms/ProfileSection';
import { KnowledgeSection } from '@/components/organisms/KnowledgeSection';
import { EducationSection } from '@/components/organisms/EducationSection';
import { PortfolioSection } from '@/components/organisms/PortfolioSection';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/molecules/Navbar';
import { ScrollToTop } from '@/components/atoms/ScrollToTop';

export default function Home() {
  return (
    <MainLayout>
      {/* Navbar flotante (aparece al hacer scroll) */}
      <Navbar />

      {/* Secciones principales */}
      <ProfileSection />
      <KnowledgeSection />
      <EducationSection />
      <PortfolioSection />

      {/* Footer */}
      <Footer />

      {/* Botón flotante para volver arriba */}
      <ScrollToTop />
    </MainLayout>
  );
}