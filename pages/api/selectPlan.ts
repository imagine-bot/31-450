import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  planId: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { planId } = req.body;

  // Here you would typically update the backend with the selected plan.
  // For this example, we'll just return the planId.

  res.status(200).json({ planId });
}