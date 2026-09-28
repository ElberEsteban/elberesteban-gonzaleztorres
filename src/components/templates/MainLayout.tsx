// src/components/templates/MainLayout.tsx
import { SidebarLeft } from '../organisms/SidebarLeft';
import { SidebarRight } from '../organisms/SidebarRight';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Contenedor principal con Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Columna Izquierda: Sidebar Fijo */}
        <aside className="lg:col-span-3 lg:h-screen lg:sticky lg:top-0 overflow-y-auto border-r border-gray-200 bg-white">
          <SidebarLeft />
        </aside>

        {/* Columna Central: Contenido con Scroll */}
        <main className="lg:col-span-7 bg-white min-h-screen">
          {children}
        </main>

        {/* Columna Derecha: Redes Sociales Fijo */}
        <aside className="lg:col-span-2 lg:h-screen lg:sticky lg:top-0 flex flex-col items-center justify-center border-l border-gray-200 bg-white">
          <SidebarRight />
        </aside>
      </div>
    </div>
  );
};