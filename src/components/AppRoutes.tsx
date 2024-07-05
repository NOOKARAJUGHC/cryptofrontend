// AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardSummary from './CryptoIndicators/DashboardSummary';
import PortfolioReturns from './CryptoIndicators/PortfolioReturns';
import RiskOverview from './CryptoIndicators/RiskOverview';
import CryptoMonitor from './CryptoData/CryptoMonitor';
import IndexWizard from './CryptoData/IndexWizard';
import MyWatchlists from './CryptoData/MyWatchlists';
import TechnicalAnalysis from './CryptoData/TechnicalAnalysis';
import Myportfolio from './CryptoIndicators/Myportfolio';
import CryptoMain from './CryptoData/CryptoMain';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CryptoMain />} />
            <Route path="/monitor" element={<CryptoMonitor />} />
            <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
            <Route path="/index-wizard" element={<IndexWizard />} />
            <Route path="/my-watclists" element={<MyWatchlists />} />
            <Route path="/portfolios" element={<Myportfolio />} />
            <Route path="/dashboard-summary" element={<DashboardSummary />} />
            <Route path="/portfolio-returns" element={<PortfolioReturns />} />
            <Route path="/risk-overview" element={<RiskOverview />} />


            
            {/* Add other routes here as needed */}
        </Routes>
    );
};

export default AppRoutes;
