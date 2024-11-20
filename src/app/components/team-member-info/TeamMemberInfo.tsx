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
  left?: boolean
}

const TeamMemberInfo = ({
  name,
  role,
  quote,
  weddingTradition,
  imageSrc,
  firstName,
  left
}: TeamMemberType) => {
  return (
    <article
      className={`${styles.sectionContainer} ${left ? styles.left : ''}`}
    >
      <div className={styles.textContainer}>
        <h2>{name}</h2>
        <p className={styles.role}>{role}</p>
        <blockquote>&quot;{quote}&quot;</blockquote>
        <p className={styles.weddingFavorite}>
          What part of weddings, still makes you cry?
        </p>
        <p>{weddingTradition}</p>
      </div>
      <PolaroidImage
        alt={`${name} - ${role}`}
        src={imageSrc}
        caption={firstName}
      />
    </article>
  )
}

export default TeamMemberInfo
