
import React from 'react';
import { SIMULATIONS } from '../constants';

interface DisciplineViewProps {
  disciplineId: string;
  onBack: () => void;
  onSelectOption: (type: 'quiz' | 'summary') => void;
}

const DisciplineView: React.FC<DisciplineViewProps> = ({ disciplineId, onBack, onSelectOption }) => {
  const discipline = SIMULATIONS.find(s => s.id === disciplineId);

  if (!discipline) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="group flex items-center text-[#003366] font-bold mb-12 transition-all hover:text-[#D4A017]"
      >
        <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> 
        Voltar para Disciplinas
      </button>

      <div className="text-center mb-16">
        <div className="text-6xl mb-6">{discipline.icon}</div>
        <h2 className="text-4xl font-black text-[#003366] mb-4 uppercase tracking-tighter">
          {discipline.title}
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
          Selecione o tipo de atividade que deseja realizar para esta Unidade Curricular.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card de Simulados */}
        <div 
          onClick={() => onSelectOption('quiz')}
          className="bg-white rounded-[2.5rem] p-10 border-2 border-transparent hover:border-[#003366] shadow-lg cursor-pointer transition-all hover:-translate-y-2 group"
        >
          <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform">
            📝
          </div>
          <h3 className="text-2xl font-black text-[#003366] mb-4">Simulados Interativos</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Questões integradas com feedback imediato e explicações detalhadas baseadas no Guia Acadêmico.
          </p>
          <span className="inline-block bg-[#003366] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            Acessar Agora
          </span>
        </div>

        {/* Card de Resumos Compartilhados */}
        <div 
          className="bg-gray-50 rounded-[2.5rem] p-10 border-2 border-dashed border-gray-200 flex flex-col opacity-80 cursor-not-allowed transition-all"
        >
          <div className="w-16 h-16 bg-gray-200 text-gray-400 rounded-2xl flex items-center justify-center text-3xl mb-8">
            📚
          </div>
          <h3 className="text-2xl font-black text-gray-400 mb-4">Resumos Compartilhados</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Materiais doados por alunos da faculdade para auxiliar no estudo colaborativo e revisão dos temas essenciais.
          </p>
          <span className="inline-block bg-gray-100 text-gray-400 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            Em breve
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisciplineView;
