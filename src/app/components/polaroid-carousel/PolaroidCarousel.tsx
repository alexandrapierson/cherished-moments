import React from 'react'
import styles from './polaroidCarousel.module.css'
import PolaroidImage from '../polaroid-image/PolaroidImage'

interface PolaroidImageProps {
  src: string
  alt: string
  caption: string
}

interface PolaroidImageCarouselProps {
  polaroidImages: PolaroidImageProps[]
}

const PolaroidCarousel: React.FC<PolaroidImageCarouselProps> = ({
  polaroidImages = []
}) => {
  return (
    <div className={`margin-xxl ${styles.polaroidCarousel}`}>
      {polaroidImages.map((polaroidImage, index) => {
        return (
          <div key={`polaroid${index}`}>
            <PolaroidImage
              src={polaroidImage.src}
              alt={polaroidImage.alt}
              caption={polaroidImage.caption}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PolaroidCarousel
