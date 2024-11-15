import Image from 'next/image'
import React from 'react'
import styles from './polaroidimage.module.css'

interface PolaroidImage {
  src: string
  alt: string
  caption: string
}

const PolaroidImage = ({ src = '', alt = '', caption = '' }: PolaroidImage) => {
  return (
    <figure className={styles.polaroidImage}>
      <Image src={src} alt={alt} width='500' height='500' />
      <p>{caption}</p>
    </figure>
  )
}

export default PolaroidImage
