
import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './views/HomeView';
import DisciplineView from './views/DisciplineView';
import QuizView from './views/QuizView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string | null>(null);

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedDisciplineId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDiscipline = (id: string) => {
    setSelectedDisciplineId(id);
    setCurrentView('discipline');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDisciplineOption = (type: 'quiz' | 'summary') => {
    if (type === 'quiz') {
      setCurrentView('quiz');
    } else {
      alert("A seção de resumos compartilhados está sendo alimentada pela comunidade acadêmica.");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Header onNavigate={navigateToHome} />
      
      <div className="flex-grow">
        {currentView === 'home' && (
          <HomeView onSelectDiscipline={handleSelectDiscipline} />
        )}
        
        {currentView === 'discipline' && selectedDisciplineId && (
          <DisciplineView 
            disciplineId={selectedDisciplineId} 
            onBack={navigateToHome} 
            onSelectOption={handleDisciplineOption}
          />
        )}
        
        {currentView === 'quiz' && selectedDisciplineId && (
          <QuizView 
            quizId={selectedDisciplineId} 
            onBack={() => setCurrentView('discipline')} 
          />
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] tracking-widest uppercase font-black">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 mb-8 md:mb-0">
             <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
               <img 
                 src="https://medicinadosertao.com.br/wp-content/uploads/2021/03/logo-fms-colorido.png" 
                 alt="Logo FMS" 
                 className="h-20 w-auto object-contain hover:scale-110 transition-all duration-500" 
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = 'img/logo.png';
                 }}
               />
             </div>
             <div className="flex flex-col text-center md:text-left">
               <span className="text-[#003366] text-xs">© 2026 Medicina do Sertão • Portal Acadêmico</span>
               <span className="mt-1">Desenvolvido por Fabrício Luna • Estudante FMS</span>
             </div>
          </div>
          <div className="italic border-t md:border-t-0 md:border-l-2 border-gray-100 pt-6 md:pt-0 md:pl-6 py-2 text-center md:text-right">
            Projeto de Monitoria Virtual Independente<br/>
            Focado em Metodologias Ativas
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
