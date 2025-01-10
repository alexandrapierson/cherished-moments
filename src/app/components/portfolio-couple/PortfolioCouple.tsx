import React from 'react'
import {
  AttireIcon,
  CateringIcon,
  EventIcon,
  FloralIcon,
  GuestIcon,
  PhotographyIcon,
  StationeryIcon,
  ThemeIcon,
  TimelineIcon,
  TravelIcon,
  VenueIcon,
  VideographyIcon
} from '@/app/svg/ServiceIcons'
import DecorativeImage from '../decorative-image/DecorativeImage'
import styles from './portfolioCouple.module.css'

interface ServiceImage {
  serviceImageSrc: string
  serviceImageAlt: string
  serviceName: string
}

interface PortfolioCoupleProps {
  couplesName: string
  services: string[]
  coupleQuote: string
  coupleImageSrc: string
  coupleImageAlt?: string
  serviceImages: ServiceImage[]
  hrefLink: string
}

const PortfolioCouple: React.FC<PortfolioCoupleProps> = ({
  couplesName = 'Couples Name',
  services = ['venue', 'photography', 'stationery'],
  coupleQuote = 'Couple Description',
  coupleImageSrc = '',
  coupleImageAlt = `${couplesName} wedding photo.`,
  serviceImages = [],
  hrefLink = '#'
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'attire':
        return AttireIcon
      case 'catering':
        return CateringIcon
      case 'event':
        return EventIcon
      case 'floral':
        return FloralIcon
      case 'guest':
        return GuestIcon
      case 'photography':
        return PhotographyIcon
      case 'stationery':
        return StationeryIcon
      case 'theme':
        return ThemeIcon
      case 'timeline':
        return TimelineIcon
      case 'travel':
        return TravelIcon
      case 'venue':
        return VenueIcon
      case 'videography':
        return VideographyIcon
      default:
        return VenueIcon
    }
  }

  return (
    <section className={`${styles.portfolioCouple} margin-xxl`}>
      <div className={styles.textContent}>
        <h2>{couplesName}</h2>

        <div className={styles.services}>
          {services.map(service => {
            const Icon = getServiceIcon(service)
            return (
              <div key={service} className={styles.serviceIcon}>
                <Icon />
              </div>
            )
          })}
        </div>

        <blockquote>&#34;{coupleQuote}&#34;</blockquote>

        <a href={hrefLink} className='primary-button'>
          {couplesName}&#39;s Wedding
        </a>
      </div>

      <div className={styles.coupleImage}>
        <DecorativeImage
          src={coupleImageSrc}
          alt={coupleImageAlt}
          decorativeText={couplesName}
          hideDecorativeText
        />
      </div>

      {serviceImages.map(serviceImage => {
        return (
          <div
            key={`${serviceImage.serviceName}Image`}
            className={`${styles.serviceImage}`}
          >
            <DecorativeImage
              src={serviceImage.serviceImageSrc}
              alt={serviceImage.serviceImageAlt}
              decorativeText={serviceImage.serviceName}
            />
          </div>
        )
      })}
    </section>
  )
}

export default PortfolioCouple
