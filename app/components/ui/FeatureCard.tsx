'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

interface FeatureCardProps {
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const FeatureCard = ({
  image,
  title,
  description,
  buttonText,
  buttonLink
}: FeatureCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link href={buttonLink}>
          <Button>{buttonText}</Button>
        </Link>
      </div>
    </div>
  )
}

export default FeatureCard 