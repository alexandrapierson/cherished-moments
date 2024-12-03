// rafce
import React from 'react'
import styles from './decorativetext.module.css'
import Image from 'next/image'

interface DecorativeImage {
  src: string
  alt: string
  decorativeText: string
  hideDecorativeText?: boolean
}

const DecorativeImage = ({
  src,
  alt = '',
  decorativeText,
  hideDecorativeText
}: DecorativeImage) => {
  return (
    <figure
      className={`${styles.decorativeImage}
    }}`}
    >
      <Image src={src} alt={alt} width='700' height='800' />
      <figcaption>
        <p className={hideDecorativeText ? styles.hideText : ''}>
          {decorativeText}
        </p>
      </figcaption>
    </figure>
  )
}

export default DecorativeImage
