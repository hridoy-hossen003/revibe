import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import PricingContainer from './Components/PricingCards/PricingContainer';
import DaisyPricingCard from './Components/DaisyPricingCard/DaisyPricingCard';

const pricingData = fetch('PricingData.json').then(res => res.json())
function App() {


  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <PricingContainer pricingData={pricingData}></PricingContainer>
      </Suspense>

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <DaisyPricingCard pricingData={pricingData}></DaisyPricingCard>
      </Suspense>
    </>
  );
}

export default App
