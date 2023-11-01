import React, { useState, useEffect } from 'react';

type PricingPlan = {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
};

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [plans, setPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    fetch('/api/plans')
      .then(response => response.json())
      .then(data => setPlans(data));
  }, []);

  const selectPlan = (planId: string) => {
    fetch('/api/selectPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planId }),
    });
  };

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
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 bg-white"
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
            <button onClick={() => selectPlan(plan.id)} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">Signup</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;