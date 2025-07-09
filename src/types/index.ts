export interface Question {
  id: string;
  category: 'personality' | 'interests' | 'values' | 'cognitive';
  text: string;
  options: string[];
  weight: number;
}

export interface QuizResponse {
  questionId: string;
  answer: number;
}

export interface CareerResult {
  major: string;
  description: string;
  matchScore: number;
  keyTraits: string[];
  careerPaths: string[];
  averageSalary: string;
  jobOutlook: string;
}

export interface Assessment {
  personality: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
  interests: {
    realistic: number;
    investigative: number;
    artistic: number;
    social: number;
    enterprising: number;
    conventional: number;
  };
  values: {
    autonomy: number;
    security: number;
    creativity: number;
    leadership: number;
    helping: number;
    recognition: number;
  };
  cognitive: {
    analytical: number;
    creative: number;
    practical: number;
    social: number;
  };
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}