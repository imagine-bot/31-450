import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pricing from '../components/Pricing'

const inter = Inter({ subsets: ['latin'] })

const plans = [
  {
    name: 'Basic',
    price: {
      monthly: 9,
      yearly: 90,
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: {
      monthly: 19,
      yearly: 190,
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Pricing plans={plans} />
    </main>
  )
}