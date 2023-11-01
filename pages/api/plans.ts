import type { NextApiRequest, NextApiResponse } from 'next'

type Plan = {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
};

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: {
      monthly: 9,
      yearly: 90,
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 19,
      yearly: 190,
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Plan[]>
) {
  res.status(200).json(plans);
}