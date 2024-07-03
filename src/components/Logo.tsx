// src/components/Logo.tsx

import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
    return (
        <div className="logo-container">
            <div className="logo-text">
                <h1 className="logo-title">CRYPTO</h1>
                <p className="logo-tagline">Trade Smart, Trade Secure</p>
            </div>
            <div className="logo-bars">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
        </div>
    );
};

export default Logo;
