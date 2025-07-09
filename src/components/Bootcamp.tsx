import React from 'react';
import { Target, Users, Award, Building, Calendar, MapPin, Clock, Trophy } from 'lucide-react';

interface BootcampProps {
  onViewChange: (view: string) => void;
}

const Bootcamp: React.FC<BootcampProps> = ({ onViewChange }) => {
  const features = [
    {
      icon: Building,
      title: 'Industrial Visits',
      description: 'Visit real companies and see how different industries operate firsthand'
    },
    {
      icon: Target,
      title: 'Hands-on Projects',
      description: 'Work on practical projects that mirror real-world challenges'
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Get guidance from university students and industry professionals'
    },
    {
      icon: Trophy,
      title: 'Case Competition',
      description: 'Apply your learning in company-sponsored competitions with prizes'
    }
  ];

  const programHighlights = [
    {
      icon: Calendar,
      title: '2-3 Day Challenge',
      description: 'Intensive learning experience packed with activities'
    },
    {
      icon: MapPin,
      title: 'Hybrid Format',
      description: 'Combination of online and in-person experiences'
    },
    {
      icon: Clock,
      title: 'Experiential Learning',
      description: 'Learn by doing, not just listening'
    },
    {
      icon: Award,
      title: 'Win Prizes',
      description: 'Compete for exciting rewards and recognition'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experiential
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              {' '}Bootcamp Program
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Join our hybrid experiential bootcamp program featuring industrial visits, hands-on projects, 
            mentorship with university students and professionals, and a case competition sponsored by companies, 
            where high schoolers apply their learning and win prizes over a 2–3 day challenge.
          </p>
        </div>

        {/* Program Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Program Highlights */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You'll Experience */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What You'll Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Exploration & Learning</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Industrial visits to leading companies
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Interactive workshops with industry professionals
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Mentorship sessions with university students
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Hands-on project development
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Competition & Recognition</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Present your solutions in case competition
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Judging by industry experts
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Prize ceremony and recognition
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Networking opportunities with peers and mentors
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Future?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working hard to bring you an amazing 
              experiential learning opportunity that will help shape your career journey.
            </p>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-orange-700 transition-colors">
              More Information 
            </button>
            <div className="mt-6">
              <button
                onClick={() => onViewChange('home')}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;