import Image from 'next/image'
import React from 'react'

export type TBadge = {
  image: string
  id: string
  alt: string
}

type TBadegesProps = {
  badges?: TBadge[]
}

export default function Badges({ badges }: TBadegesProps) {
  return (
    <>
      {badges?.map((badge) => {
        return (
          <Image 
            src={badge?.image} 
            width={100} 
            height={22} 
            alt={badge.alt}
            key={badge.id}
          />
        )
      })}
    </>
  )
}