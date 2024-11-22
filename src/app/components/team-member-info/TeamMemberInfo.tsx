import React from 'react'
import styles from './teamMemberInfo.module.css'
import PolaroidImage from '../polaroid-image/PolaroidImage'

interface TeamMemberType {
  name: string
  role: string
  quote: string
  weddingTradition: string
  imageSrc: string
  firstName: string
  right?: boolean
  id?: string
}

const TeamMemberInfo = ({
  name,
  role,
  quote,
  weddingTradition,
  imageSrc,
  firstName,
  right,
  id
}: TeamMemberType) => {
  return (
    <article className={`image-text-section ${right ? 'right' : ''}`} id={id}>
      <div className='image-container'>
        <PolaroidImage
          alt={`${name} - ${role}`}
          src={imageSrc}
          caption={firstName}
        />
      </div>
      <div className={`text-container`}>
        <h2 className='margin-xxs'>{name}</h2>
        <p className={`margin-s`}>{role}</p>
        <blockquote className={`margin-m`}>&quot;{quote}&quot;</blockquote>
        <p className={`margin-xs`}>
          What part of a wedding still makes you cry?
        </p>
        <p>{weddingTradition}</p>
      </div>
    </article>
  )
}

export default TeamMemberInfo
