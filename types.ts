
export interface Question {
  id: number;
  tag: string;
  q: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface SimulationInfo {
  id: string;
  title: string;
  description: string;
  meta: string;
  icon: string;
  status: 'active' | 'coming-soon' | 'locked';
}

export type ViewState = 'home' | 'discipline' | 'quiz';
