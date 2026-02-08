
import React, { useState } from 'react';
import InteractiveQuiz from '../components/InteractiveQuiz';
import { QUIZ_QUESTIONS, SIMULATIONS } from '../constants';

interface QuizViewProps {
  quizId: string;
  onBack: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ quizId, onBack }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const discipline = SIMULATIONS.find(s => s.id === quizId);
  // Filtramos questões se houver tag correspondente, ou usamos todas como fallback
  // Por enquanto, como o array é pequeno e misto, usamos todas para demonstração
  const filteredQuestions = QUIZ_QUESTIONS; 

  const handleFinish = (score: number) => {
    setFinalScore(score);
    setIsFinished(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <button 
          onClick={onBack}
          className="group flex items-center text-[#003366] font-bold transition-all hover:text-[#D4A017] w-fit"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> 
          Voltar para {discipline?.title || 'Painel'}
        </button>
        <div className="text-left md:text-right">
          <h2 className="text-2xl font-black text-[#003366] uppercase tracking-tight leading-none">
            Simulado Interativo
          </h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black mt-1">
            {discipline?.title || 'Conhecimentos Integrados'} • Prática Deliberada
          </p>
        </div>
      </div>

      {!isFinished ? (
        <InteractiveQuiz questions={filteredQuestions} onFinish={handleFinish} />
      ) : (
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center animate-in zoom-in duration-500 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#D4A017]"></div>
          
          <div className="text-7xl mb-8">🩺</div>
          <h3 className="text-4xl font-black text-[#003366] mb-4 uppercase tracking-tighter">Desempenho Final</h3>
          <p className="text-gray-400 font-medium mb-12 max-w-md mx-auto">
            A repetição é a mãe da retenção. Revise os comentários das questões onde houve dúvida.
          </p>
          
          <div className="relative inline-flex items-center justify-center mb-12">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-gray-100"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 - (552.92 * finalScore) / filteredQuestions.length}
                className="text-[#D4A017] transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-6xl font-black text-[#003366]">{finalScore}</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">de {filteredQuestions.length}</span>
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="p-6 bg-blue-50 rounded-2xl text-sm text-[#003366] font-medium leading-relaxed border border-blue-100">
              {finalScore / filteredQuestions.length >= 0.7 
                ? "Excelente aproveitamento! Seu raciocínio clínico para estes temas está bem consolidado."
                : "Bom começo! Medicina exige persistência. Utilize os feedbacks das questões para reforçar os pontos cegos."
              }
            </div>
            
            <div className="grid grid-cols-1 gap-3 pt-4">
              <button 
                onClick={onBack}
                className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-[#D4A017] transition-all shadow-lg hover:shadow-[#D4A017]/20"
              >
                Retornar ao Módulo
              </button>
              
              <button 
                onClick={() => setIsFinished(false)}
                className="w-full bg-white text-[#003366] border-2 border-[#003366] py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-gray-50 transition-all"
              >
                Refazer Simulado
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizView;
