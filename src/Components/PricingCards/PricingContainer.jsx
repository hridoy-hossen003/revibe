import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingContainer = ({pricingData}) => {
    const pricings = use(pricingData)
   
    return (
      <>
      <div>
        <h1 className='text-3xl font-bold px-10 py-6'>Get our membership</h1>
      </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
          {pricings.map((pricing, i) => (
            <PricingCard key={i} pricing={pricing}></PricingCard>
          ))}
        </div>
      </>
    );
};

export default PricingContainer;