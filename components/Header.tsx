
import React from 'react';

interface HeaderProps {
  onNavigate: (view: 'home') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-[#003366] text-white shadow-md sticky top-0 z-50 border-b-2 border-[#D4A017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6 md:h-32 gap-2">
          
          {/* Lado Esquerdo: Logo e Identidade */}
          <div 
            className="flex items-center cursor-pointer group min-w-0 flex-shrink" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-white p-1 md:p-2 rounded-lg md:rounded-xl w-20 h-10 sm:w-32 sm:h-12 md:w-56 md:h-20 flex items-center justify-center overflow-hidden border-2 border-[#D4A017] shadow-lg transition-transform group-hover:scale-105 flex-shrink-0">
              <img 
                src="https://medicinadosertao.com.br/wp-content/uploads/2021/03/logo-fms-colorido.png" 
                alt="Logo FMS" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'img/logo.png';
                }}
              />
            </div>
            <div className="ml-2 md:ml-6 flex flex-col justify-center min-w-0">
              <h1 className="text-[8px] sm:text-sm md:text-lg font-black tracking-[0.05em] md:tracking-[0.15em] leading-tight text-white uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                MONITORIA VIRTUAL - FMS
              </h1>
              <h2 className="text-[6px] sm:text-[9px] md:text-xs font-bold text-[#D4A017] uppercase tracking-[0.1em] md:tracking-[0.25em] mt-0.5 md:mt-1 opacity-90 whitespace-nowrap overflow-hidden text-ellipsis">
                DESENVOLVIDO POR FABRÍCIO LUNA
              </h2>
            </div>
          </div>

          {/* Lado Direito: Links de Navegação - Empilhados no celular */}
          <nav className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5 sm:gap-4 flex-shrink-0">
            <button className="text-[7px] md:text-[10px] uppercase tracking-widest font-black text-[#D4A017] border border-[#D4A017]/30 sm:border-2 px-2 md:px-5 py-1 md:py-2.5 rounded md:rounded-lg hover:bg-[#D4A017] hover:text-[#003366] hover:border-[#D4A017] transition-all shadow-sm whitespace-nowrap">
              CALCULADORAS
            </button>
            <button className="text-[7px] md:text-[10px] uppercase tracking-widest font-black text-white/70 border border-white/10 sm:border-2 px-2 md:px-5 py-1 md:py-2.5 rounded md:rounded-lg hover:border-white hover:text-white transition-all bg-white/5 whitespace-nowrap">
              ADMIN
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
