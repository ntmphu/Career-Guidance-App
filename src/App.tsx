import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CareerQuiz from './components/CareerQuiz';
import JobMarketTrends from './components/JobMarketTrends';
import CareerPreparation from './components/CareerPreparation';
import MobileMenu from './components/MobileMenu';
import Bootcamp from './components/Bootcamp';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onViewChange={handleViewChange} />;
      case 'quiz':
        return <CareerQuiz onViewChange={handleViewChange} />;
      case 'trends':
        return <JobMarketTrends onViewChange={handleViewChange} />;
      case 'prepare':
        return <CareerPreparation onViewChange={handleViewChange} />;
      case 'menu':
        return <MobileMenu currentView={currentView} onViewChange={handleViewChange} />;
      case 'bootcamp':
        return <Bootcamp onViewChange={handleViewChange} />;
      default:
        return <HomePage onViewChange={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} onViewChange={handleViewChange} />
      {renderCurrentView()}
    </div>
  );
}

export default App;