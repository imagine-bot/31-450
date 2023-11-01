import React, { useState } from 'react';

type PricingPlan = {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
};

type PricingProps = {
  plans: PricingPlan[];
};

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <label className="mr-2">Monthly</label>
        <input
          type="radio"
          checked={isMonthly}
          onChange={() => setIsMonthly(true)}
        />
        <label className="mr-2 ml-4">Yearly</label>
        <input
          type="radio"
          checked={!isMonthly}
          onChange={() => setIsMonthly(false)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-2xl mb-2">{plan.name}</h2>
            <p className="text-4xl mb-4">
              ${isMonthly ? plan.price.monthly : plan.price.yearly}
            </p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;