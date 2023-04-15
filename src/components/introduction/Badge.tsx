import Image from 'next/image'
import React from 'react'

export type TBadge = {
  image: string
  id: string
  alt: string
  width: number
  height: number
}

type TBadegesProps = {
  badges?: TBadge[]
}

export default function Badges({ badges }: TBadegesProps) {
  if (!Array.isArray(badges)) {
    return <></>
  }
  return (
    <>
      {badges?.map((badge) => {
        return (
          <Image
            src={badge?.image}
            width={badge.width}
            height={badge.height}
            alt={badge.alt}
            key={badge.id}
          />
        )
      })}
    </>
  )
}
