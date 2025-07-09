import React from 'react';
import { Brain, TrendingUp, Target, Home, X } from 'lucide-react';

interface MobileMenuProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'quiz', label: 'Career Quiz', icon: Brain },
    { id: 'trends', label: 'Chatbot', icon: TrendingUp },
    { id: 'bootcamp', label: 'Bootcamp', icon: Target }
  ];

  const handleItemClick = (id: string) => {
    onViewChange(id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="bg-white w-64 h-full shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Pathfinders</h2>
            </div>
            <button
              onClick={() => onViewChange('home')}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <nav className="py-4">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                  currentView === item.id
                    ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;