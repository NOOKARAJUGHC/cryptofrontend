import React from 'react'
import CryptoDashboard from '../CryptoMain/Crypto-dashboard'
import CryptoOverview from '../CryptoMain/CryptoOverview'
import CryptoGainersLosers from '../CryptoMain/crypto-gainers-loosers'
const CryptoMain = () => {
  return (
<>
<CryptoOverview />
<CryptoGainersLosers />
<CryptoDashboard />
</>  )
}
export default CryptoMain