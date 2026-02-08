
import { Question, SimulationInfo } from './types';

export const THEME = {
  primary: '#003366', // Azul Medicina
  accent: '#D4A017',  // Ocre Sertão
  highlight: '#E31B23', // Vermelho do Guia
  bg: '#f4f7f6',
  text: '#333333'
};

export const SIMULATIONS: SimulationInfo[] = [
  {
    id: 'uciv',
    title: 'UCIV - Funções Biológicas',
    description: 'Controle neuroendócrino, cardio, resp, renal e termorregulação.',
    meta: '110h • Ciclo da Homeostase',
    icon: '🫀',
    status: 'active'
  },
  {
    id: 'ucv',
    title: 'UCV - Agressão e Defesa',
    description: 'Imunologia, Microbiologia, Patologia e Inflamação.',
    meta: '110h • Mecanismos de Lesão',
    icon: '🛡️',
    status: 'coming-soon'
  },
  {
    id: 'ucvi',
    title: 'UCVI - Percepção e Emoção',
    description: 'Sistema Nervoso, Sono, Vigília, Memória e Límbico.',
    meta: '110h • Neurociências',
    icon: '🧠',
    status: 'coming-soon'
  },
  {
    id: 'hm2',
    title: 'HM2 - Habilidades Médicas II',
    description: 'Anamnese, Exame Físico e Relação Médico-Paciente.',
    meta: '120h • Prática Clínica',
    icon: '🩺',
    status: 'active'
  },
  {
    id: 'iesc2',
    title: 'IESC2 - Interação Comunitária',
    description: 'Epidemiologia, Vigilância e Cuidado na UBS.',
    meta: '80h • Saúde da Família',
    icon: '🏘️',
    status: 'active'
  },
  {
    id: 'uccg2',
    title: 'UCCG2 - Conhecimentos Gerais',
    description: 'Análise Social, Relações Étnico-Raciais e História.',
    meta: '80h • Humanidades',
    icon: '⚖️',
    status: 'active'
  }
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    tag: "UCIV - Cardiovascular",
    q: "No contexto do ciclo cardíaco descrito no guia, qual mecanismo é fundamental para a regulação do débito cardíaco a longo prazo via controle da pressão arterial?",
    options: [
      "Sistema Parassimpático isolado",
      "Mecanismo de Frank-Starling imediato",
      "Sistema Renina-Angiotensina-Aldosterona (SRAA)",
      "Reflexo Barorreceptor apenas"
    ],
    answer: 2,
    explanation: "O SRAA é o principal mecanismo de controle neuroendócrino para a manutenção da volemia e pressão arterial a longo prazo, influenciando o equilíbrio hidroeletrolítico renal."
  },
  {
    id: 2,
    tag: "UCV - Imunologia",
    q: "Sobre os mecanismos de agressão e defesa, qual característica define a Resposta Imune Adaptativa em comparação à Inata?",
    options: [
      "Rapidez de ação imediata (minutos)",
      "Especificidade e Memória Imunológica",
      "Uso exclusivo de barreiras físicas",
      "Independência de células fagocitárias"
    ],
    answer: 1,
    explanation: "A imunidade adaptativa é caracterizada pela sua alta especificidade contra antígenos e pela capacidade de gerar células de memória para exposições futuras."
  },
  {
    id: 3,
    tag: "UCVI - Neurociência",
    q: "Qual estrutura encefálica é apontada como central para o processamento das emoções e comportamento no módulo UCVI?",
    options: [
      "Bulbo Olfatório",
      "Sistema Límbico",
      "Cerebelo",
      "Medula Espinal"
    ],
    answer: 1,
    explanation: "O sistema límbico, que inclui estruturas como o hipocampo e a amígdala, é responsável pela regulação das emoções, memória e instintos."
  },
  {
    id: 4,
    tag: "HM2 - Habilidades Médicas",
    q: "Durante a realização da Anamnese, como se define a 'Queixa Principal' do paciente?",
    options: [
      "O diagnóstico final elaborado pelo médico",
      "O motivo que levou o paciente a buscar atendimento, usando as palavras dele",
      "A lista completa de doenças pregressas da família",
      "O registro técnico de todos os sinais vitais"
    ],
    answer: 1,
    explanation: "A Queixa Principal (QP) deve ser breve e, preferencialmente, escrita com as palavras do próprio paciente, indicando o sintoma mais incomodativo."
  },
  {
    id: 5,
    tag: "UCIV - Fisiologia Respiratória",
    q: "Qual o papel do sistema tampão no contexto da homeostase respiratória abordado na UCIV?",
    options: [
      "Aumentar a temperatura corporal durante o exercício",
      "Manutenção do equilíbrio ácido-básico (pH sanguíneo)",
      "Bloquear a entrada de patógenos nos alvéolos",
      "Produzir surfactante para expansão pulmonar"
    ],
    answer: 1,
    explanation: "O sistema tampão (como o bicarbonato) atua na regulação do pH, compensando variações respiratórias para evitar acidose ou alcalose metabólica."
  },
  {
    id: 6,
    tag: "UCV - Patologia",
    q: "A inflamação aguda é uma resposta estereotipada a lesões. Qual evento vascular marca o início do processo inflamatório?",
    options: [
      "Vasoconstrição persistente",
      "Vasodilatação e aumento da permeabilidade vascular",
      "Diminuição da migração leucocitária",
      "Atrofia tecidual imediata"
    ],
    answer: 1,
    explanation: "A vasodilatação aumenta o fluxo sanguíneo local (calor/rubor) e o aumento da permeabilidade permite a saída de exsudato (edema)."
  },
  {
    id: 7,
    tag: "UCVI - Fisiologia do Sono",
    q: "Sobre o ciclo sono-vigília, qual estrutura atua como o 'marcapasso central' dos ritmos circadianos?",
    options: [
      "Glândula Tireoide",
      "Núcleo Supraquiasmático do Hipotálamo",
      "Córtex Occipital",
      "Gânglios da Base"
    ],
    answer: 1,
    explanation: "O Núcleo Supraquiasmático recebe informações luminosas e coordena a liberação de melatonina pela glândula pineal."
  },
  {
    id: 8,
    tag: "IESC2 - Epidemiologia",
    q: "Qual a importância da 'Notificação Compulsória' de doenças mencionada no guia?",
    options: [
      "Apenas para cobrança de taxas hospitalares",
      "Monitoramento epidemiológico para ações rápidas de vigilância em saúde",
      "Garantir a privacidade total do paciente para que ninguém saiba da doença",
      "Substituir o tratamento clínico pela estatística"
    ],
    answer: 1,
    explanation: "A notificação compulsória permite que os órgãos de saúde identifiquem surtos precocemente e planejem estratégias de controle e prevenção."
  },
  {
    id: 9,
    tag: "HM2 - Ética Clínica",
    q: "De acordo com o HM2, o que é fundamental na comunicação de más notícias?",
    options: [
      "Ser o mais técnico possível para evitar emoções",
      "Delegar a tarefa para a equipe de enfermagem",
      "Preparar o ambiente, ser empático e verificar o entendimento do paciente",
      "Informar rapidamente e sair do quarto imediatamente"
    ],
    answer: 2,
    explanation: "A comunicação de más notícias exige empatia, um ambiente privativo, linguagem clara e acolhimento das reações do paciente/família."
  },
  {
    id: 10,
    tag: "UCCG2 - Humanidades",
    q: "A Declaração Universal dos Direitos Humanos (1948) é um pilar da UCCG2. Qual seu princípio básico fundamental?",
    options: [
      "Diferenciação de direitos por classe social",
      "Soberania econômica acima da vida humana",
      "Universalidade, indivisibilidade e interdependência dos direitos de todos",
      "Exclusividade de direitos para cidadãos de países desenvolvidos"
    ],
    answer: 2,
    explanation: "A DUDH estabelece que todos os seres humanos nascem livres e iguais em dignidade e direitos, sem distinção de qualquer espécie."
  }
];
