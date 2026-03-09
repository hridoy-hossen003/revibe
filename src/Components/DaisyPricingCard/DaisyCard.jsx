import React from "react";

const DaisyCard = ({ feature }) => {
  const { planName, subtitle, price, duration, features } = feature;
  return (
    <div className="h-full bg-base-100 rounded-xl border border-gray-200 shadow-lg ">
      <div className="flex h-full flex-col p-8">
        <span className="badge badge-xs badge-warning">Most Popular</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{planName}</h2>
          <span className="text-xl">${price}/Session</span>
        </div>
        <div className="flex-1">
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((list) => (
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg">{list}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default DaisyCard;
