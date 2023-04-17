import React from 'react'
import { ReactSVG } from 'react-svg'

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
          <ReactSVG
            key={badge.id}
            src={badge.image}
            height={badge.height}
            aria-label={badge.alt}
            style={{ height: badge.height, width: 'auto' }}
          />
        )
      })}
    </>
  )
}
