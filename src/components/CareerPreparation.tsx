import React, { useState } from 'react';
import { Target, Send, BookOpen, Users, Trophy, Briefcase } from 'lucide-react';
import { ChatMessage } from '../types';
import { getCareerPreparationResponse } from '../services/gemini';

interface CareerPreparationProps {
  onViewChange: (view: string) => void;
}

const CareerPreparation: React.FC<CareerPreparationProps> = ({ onViewChange }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: "Welcome to your personalized career preparation assistant for high school students! I'm here to help you prepare for your future career and university journey.\n\nI can help you with:\n\n📚 **Academic & Skill Preparation**\n• High school course selection\n• Essential skills for your chosen field\n• Extracurricular activities recommendations\n• Study strategies and time management\n\n🎓 **University Preparation**\n• Application essay guidance\n• Interview preparation for admissions\n• Scholarship application strategies\n• Major selection advice\n\n💼 **Early Career Development**\n• Building a strong foundation\n• Internship and volunteer opportunities\n• Professional networking for students\n• Future career planning\n\nWhat aspect of your career preparation would you like to focus on?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const preparationAreas = [
    {
      title: "Technical Skills",
      icon: BookOpen,
      description: "Programming, tools, and technical certifications",
      color: "bg-blue-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      description: "Communication, leadership, and teamwork",
      color: "bg-green-500"
    },
    {
      title: "Interview Prep",
      icon: Trophy,
      description: "Practice questions and presentation skills",
      color: "bg-purple-500"
    },
    {
      title: "Professional Brand",
      icon: Briefcase,
      description: "Resume, portfolio, and networking",
      color: "bg-orange-500"
    }
  ];

  const quickActions = [
    "Help me create a 90-day learning plan",
    "What technical skills should I learn for data science?",
    "How can I improve my communication skills?",
    "Prepare me for software engineering interviews",
    "Help me build a professional portfolio",
    "What certifications should I pursue?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await getCareerPreparationResponse(currentInput);
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I'm sorry, I'm experiencing some technical difficulties right now. Please try again in a moment, and I'll be happy to help you with your career preparation needs.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
            <div className="flex items-center">
              <Target className="w-8 h-8 text-white mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-white">Career Preparation</h1>
                <p className="text-purple-100">Get personalized guidance for your career development</p>
              </div>
            </div>
          </div>

          {/* Preparation Areas */}
          {messages.length === 1 && (
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Focus Areas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {preparationAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={() => handleQuickAction(`Help me develop my ${area.title.toLowerCase()}`)}
                    >
                      <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">{area.title}</h4>
                      <p className="text-xs text-gray-600">{area.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div 
                    className={message.type === 'bot' ? '' : 'whitespace-pre-line'}
                    dangerouslySetInnerHTML={
                      message.type === 'bot' 
                        ? {
                            __html: message.content
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\n/g, '<br />')
                          }
                        : undefined
                    }
                  >
                    {message.type === 'user' ? message.content : null}
                  </div>
                  <p className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-purple-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-600 mb-3">Quick actions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about career preparation..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPreparation;