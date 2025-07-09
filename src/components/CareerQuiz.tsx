import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Brain, Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { questions } from '../data/questions';
import { Question, QuizResponse, Assessment, CareerResult } from '../types';
import { careerSuggestions } from '../data/questions';
import { getCareerQuizAnalysis } from '../services/gemini';

interface CareerQuizProps {
  onViewChange: (view: string) => void;
}

const CareerQuiz: React.FC<CareerQuizProps> = ({ onViewChange }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<CareerResult[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [isGeneratingAnalysis, setIsGeneratingAnalysis] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = async (answerIndex: number) => {
    const newResponse: QuizResponse = {
      questionId: currentQuestion.id,
      answer: answerIndex
    };

    const updatedResponses = [...responses.filter(r => r.questionId !== currentQuestion.id), newResponse];
    setResponses(updatedResponses);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      await calculateResults(updatedResponses);
      setIsCompleted(true);
    }
  };

  const calculateResults = async (responses: QuizResponse[]) => {
    setIsGeneratingAnalysis(true);
    
    const assessment: Assessment = {
      personality: {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0
      },
      interests: {
        realistic: 0,
        investigative: 0,
        artistic: 0,
        social: 0,
        enterprising: 0,
        conventional: 0
      },
      values: {
        autonomy: 0,
        security: 0,
        creativity: 0,
        leadership: 0,
        helping: 0,
        recognition: 0
      },
      cognitive: {
        analytical: 0,
        creative: 0,
        practical: 0,
        social: 0
      }
    };

    // Calculate scores based on responses
    responses.forEach(response => {
      const question = questions.find(q => q.id === response.questionId);
      if (question) {
        const score = response.answer + 1; // Convert 0-4 to 1-5 scale
        
        // Simplified scoring logic
        if (question.category === 'personality') {
          if (question.id === 'p1') assessment.personality.extraversion += score;
          if (question.id === 'p2') assessment.personality.conscientiousness += score;
          if (question.id === 'p3') assessment.personality.openness += score;
          if (question.id === 'p4') assessment.personality.agreeableness += score;
          if (question.id === 'p5') assessment.personality.neuroticism += score;
        } else if (question.category === 'interests') {
          if (question.id === 'i1') assessment.interests.realistic += score;
          if (question.id === 'i2') assessment.interests.investigative += score;
          if (question.id === 'i3') assessment.interests.artistic += score;
          if (question.id === 'i4') assessment.interests.social += score;
          if (question.id === 'i5') assessment.interests.enterprising += score;
          if (question.id === 'i6') assessment.interests.conventional += score;
        } else if (question.category === 'values') {
          if (question.id === 'v1') assessment.values.autonomy += score;
          if (question.id === 'v2') assessment.values.security += score;
          if (question.id === 'v3') assessment.values.creativity += score;
          if (question.id === 'v4') assessment.values.leadership += score;
          if (question.id === 'v5') assessment.values.helping += score;
          if (question.id === 'v6') assessment.values.recognition += score;
        } else if (question.category === 'cognitive') {
          if (question.id === 'c1') assessment.cognitive.analytical += score;
          if (question.id === 'c2') assessment.cognitive.creative += score;
          if (question.id === 'c3') assessment.cognitive.practical += score;
          if (question.id === 'c4') assessment.cognitive.social += score;
        }
      }
    });

    // Generate career recommendations
    const recommendations: CareerResult[] = [];
    
    // Simplified recommendation logic
    if (assessment.interests.investigative >= 4 && assessment.cognitive.analytical >= 4) {
      recommendations.push({
        major: 'Computer Science',
        matchScore: 95,
        ...careerSuggestions['Computer Science']
      });
    }
    
    if (assessment.interests.social >= 4 && assessment.values.helping >= 4) {
      recommendations.push({
        major: 'Psychology',
        matchScore: 88,
        ...careerSuggestions['Psychology']
      });
    }
    
    if (assessment.interests.enterprising >= 4 && assessment.values.leadership >= 4) {
      recommendations.push({
        major: 'Business Administration',
        matchScore: 85,
        ...careerSuggestions['Business Administration']
      });
    }

    // Always provide at least 3 recommendations
    if (recommendations.length < 3) {
      const remaining = ['Engineering', 'Healthcare', 'Education'].slice(0, 3 - recommendations.length);
      remaining.forEach((major, index) => {
        recommendations.push({
          major,
          matchScore: 80 - (index * 5),
          ...careerSuggestions[major]
        });
      });
    }

    setResults(recommendations.slice(0, 3));

    // Generate AI analysis
    try {
      const analysis = await getCareerQuizAnalysis(responses, assessment);
      setAiAnalysis(analysis);
    } catch (error) {
      console.error('Error generating AI analysis:', error);
      setAiAnalysis('Unable to generate detailed analysis at this time. Your quiz results show strong potential in multiple career areas.');
    } finally {
      setIsGeneratingAnalysis(false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'personality': return Brain;
      case 'interests': return Heart;
      case 'values': return Target;
      case 'cognitive': return Lightbulb;
      default: return Brain;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'personality': return 'Personality';
      case 'interests': return 'Interests';
      case 'values': return 'Values';
      case 'cognitive': return 'Cognitive Style';
      default: return 'Assessment';
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h2>
              <p className="text-gray-600">Based on your comprehensive assessment, here's your personalized career analysis:</p>
            </div>

            {/* AI Analysis Section */}
            {isGeneratingAnalysis ? (
              <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
                  <p className="text-blue-700 font-medium">Generating your personalized career analysis...</p>
                </div>
              </div>
            ) : aiAnalysis && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Brain className="w-5 h-5 text-blue-600 mr-2" />
                  Your Personalized Career Analysis
                </h3>
                <div className="prose prose-blue max-w-none">
                  <div 
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: aiAnalysis
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br />')
                    }}
                  ></div>
                </div>
              </div>
            )}

            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Top Career Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{result.major}</h3>
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {result.matchScore}% Match
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-700">
                      <strong>Key Traits:</strong> {result.keyTraits.join(', ')}
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Career Paths:</strong> {result.careerPaths.join(', ')}
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Avg. Salary:</strong> {result.averageSalary}
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Job Outlook:</strong> {result.jobOutlook}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setResponses([]);
                  setIsCompleted(false);
                  setResults([]);
                  setAiAnalysis('');
                }}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => onViewChange('trends')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Chatbot
              </button>
              <button
                onClick={() => onViewChange('home')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Icon = getCategoryIcon(currentQuestion.category);
  const categoryName = getCategoryName(currentQuestion.category);
  const currentResponse = responses.find(r => r.questionId === currentQuestion.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-gray-700">
                {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Category Badge */}
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              {categoryName}
            </span>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {currentQuestion.text}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:border-blue-300 ${
                    currentResponse?.answer === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      currentResponse?.answer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {currentResponse?.answer === index && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentQuestionIndex === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </button>

            {currentResponse && (
              <button
                onClick={() => handleAnswer(currentResponse.answer)}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {currentQuestionIndex === questions.length - 1 ? 'Complete' : 'Next'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;