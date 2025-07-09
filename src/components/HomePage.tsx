import React from 'react';
import { Brain, TrendingUp, Target, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onViewChange: (view: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onViewChange }) => {
  const features = [
    {
      id: 'quiz',
      title: 'Start Career Quiz',
      description: 'Take our comprehensive assessment based on the Big Five Personality Model, Holland Career Codes, Work Values, and Cognitive Style Analysis.',
      icon: Brain,
      color: 'bg-blue-500',
      highlights: [
        'Big Five Personality Model',
        'Holland Career Codes (RIASEC)',
        'Work Values Assessment',
        'Cognitive Style Analysis'
      ]
    },
    {
      id: 'trends',
      title: 'Career Guidance Chatbot',
      description: 'Get personalized guidance on career exploration, university preparation, and educational pathways from our AI assistant.',
      icon: TrendingUp,
      color: 'bg-green-500',
      highlights: [
        'Career exploration guidance',
        'University selection advice',
        'Educational pathway planning',
        'Personalized recommendations'
      ]
    },
    
    {
      id: 'bootcamp',
      title: 'Experiential Bootcamp',
      description: 'Join our hybrid experiential bootcamp program with industrial visits, hands-on projects, mentorship, and company-sponsored competitions.',
      icon: Target,
      color: 'bg-orange-500',
      highlights: [
        'Industrial visits and exposure',
        'Hands-on project experience',
        'University student mentorship',
        'Company-sponsored case competitions'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Career Path
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover your ideal career through our comprehensive assessment system. 
            Get personalized recommendations based on your personality, interests, values, and cognitive style.
          </p>
          <button
            onClick={() => onViewChange('quiz')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
          >
            <Brain className="w-5 h-5 mr-2" />
            Start Your Career Journey
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => onViewChange(feature.id)}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-blue-600 font-medium">
                  {feature.id === 'bootcamp' ? 'More Information' : 'Get Started'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default HomePage;