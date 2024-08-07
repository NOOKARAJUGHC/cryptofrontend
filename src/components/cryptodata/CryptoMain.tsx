import React from 'react';
import CryptoDashboard from '../CryptoMain/Crypto-dashboard';
import CryptoOverview from '../CryptoMain/CryptoOverview';
import CryptoGainersLosers from '../CryptoMain/crypto-gainers-loosers';
import MarketInfo from '../CryptoMain/Market-Info';

const CryptoMain: React.FC = () => {
  return (
    <>
      <CryptoOverview />
      <CryptoGainersLosers />
      <MarketInfo />
      <CryptoDashboard />
    </>
  );
};

export default CryptoMain;
