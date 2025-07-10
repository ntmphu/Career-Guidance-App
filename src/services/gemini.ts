import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Gemini API key is not configured');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export const getJobMarketResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = `You are a career guidance expert specializing in job market trends and analysis. 
    
    Context: You're helping high school students understand career options, job market conditions, university preparation, and educational pathways. Focus on guidance relevant to students planning their future careers and education.
    
    User question: ${message}
    
    Please provide a comprehensive, helpful response that includes:
    - Career exploration guidance for high school students
    - University and major selection advice
    - Educational pathways and requirements
    - Skills development recommendations
    - Future job market outlook
    - Actionable steps for students
    
    Keep your response conversational, age-appropriate for high school students, informative, and encouraging. Use **bold** formatting for headings and important points.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I'm sorry, I'm having trouble accessing the latest job market data right now. Please try again in a moment, or feel free to ask a different question about career trends.";
  }
};

export const getCareerPreparationResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = `You are a personalized career preparation coach and mentor.
    
    Context: You help high school students prepare for their future careers and university journey. Focus on academic preparation, skill development, university applications, and early career planning appropriate for their age and stage.
    
    User request: ${message}
    
    Please provide detailed, actionable guidance that includes:
    - Academic preparation strategies for high school students
    - University application guidance
    - Skill development appropriate for their age
    - Extracurricular activity recommendations
    - Timeline and planning advice
    - Practical next steps they can take now
    
    Be encouraging, age-appropriate, and provide concrete advice they can implement as high school students. Use **bold** formatting for headings and important points, and emojis to make your response engaging.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I'm sorry, I'm experiencing some technical difficulties right now. Please try again in a moment, and I'll be happy to help you with your career preparation needs.";
  }
};

export const getCareerQuizAnalysis = async (responses: any[], userProfile: any): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = `You are an expert career counselor analyzing a comprehensive career assessment.
    
    Assessment Results:
    - Personality Traits: ${JSON.stringify(userProfile.personality)}
    - Interest Areas (RIASEC): ${JSON.stringify(userProfile.interests)}
    - Work Values: ${JSON.stringify(userProfile.values)}
    - Cognitive Style: ${JSON.stringify(userProfile.cognitive)}
    
    Based on this psychological profile, provide a detailed career analysis that includes:
    
    1. **Personality Summary**: Explain their key personality traits and how they impact career choices
    2. **Interest Pattern Analysis**: Describe their Holland Code (RIASEC) profile and what it means
    3. **Work Values Alignment**: Explain what motivates them and what work environments they'll thrive in
    4. **Cognitive Style**: Describe their preferred way of processing information and solving problems
    5. **Career Recommendations**: Suggest 3-5 specific career paths with detailed explanations
    6. **Development Areas**: Areas for growth and skill development
    7. **Next Steps**: Concrete actions they can take to explore these careers
    
    Make this personal, encouraging, and actionable. Use a warm, professional tone as if you're speaking directly to them.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I'm having trouble generating your detailed analysis right now. Your quiz results show strong potential in multiple career areas. Please try refreshing to get your full personalized report.";
  }
};