import { ArrowRight, CircleCheckBig, Hourglass } from 'lucide-react';
import React from 'react';

const PricingCard = ({pricing}) => {
//    "id": 3,
//     "planName": "Premium Plan",
//     "price": 10000,
//     "duration": "12 Months",
//     "features": [
//       "Unlimited gym access",
//       "Personal trainer support",
//       "Custom workout plan",
//       "Diet & nutrition plan",
//       "Body composition tracking",
//       "Locker + shower + towel service",
//       "Priority support"
//     ]

const {planName , subtitle ,price , duration, features} = pricing
    return (
      <div className="bg-green-100 border rounded-2xl p-4 flex  flex-col">
        <div>
          <h2 className="text-2xl font-bold">{planName}</h2>
          <h4 className="text-xl font-semibold">${price}/Session</h4>
          <h4 className="text-lg text-gray-600">{subtitle}</h4>
        </div>
        <div className='flex-1'>
          <ul className='mt-2 space-y-1'>
            {features.map((feature, i) => (
              <li className='flex items-center gap-2' key={i}>
                {" "}
                <CircleCheckBig size={20}/> {feature}
              </li>
            ))}
          </ul>
          
        </div>
        <div>
            <h4 className='mt-4 flex items-center gap-1'>Duration :  <Hourglass size={15} /> {duration}</h4>
        </div>
        <div>
            <button className='btn w-full mt-4 bg-black text-white'>Subscribe</button>
        </div>
      </div>
    );
};

export default PricingCard;