import { Feather } from 'lucide-react';
import React, { use } from 'react';
import DaisyCard from './DaisyCard';

const DaisyPricingCard = ({pricingData}) => {
    const pricings = use(pricingData)
    console.log(pricings);


    return (
      <>
      <div className='grid grid-cols-3 gap-4 mx-10 my-6'>
        {
            pricings.map(Feather => <DaisyCard feature={Feather}></DaisyCard>)
        }
      </div>
      </>
    );
};

export default DaisyPricingCard;