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
  couplesName?: string
  services?: string[]
  coupleDescription?: string
  coupleImageSrc?: string
  coupleImageAlt?: string
  serviceImages?: ServiceImage[]
}

const PortfolioCouple: React.FC<PortfolioCoupleProps> = ({
  couplesName = 'Couples Name',
  services = ['venue', 'photography', 'stationery'],
  coupleDescription = 'Couple Description',
  coupleImageSrc = '',
  coupleImageAlt = '',
  serviceImages = []
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
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
    <section className='portfolio-couple'>
      <div className='textContent'>
        <h2>{couplesName}</h2>

        <div className='services'>
          {services.map(service => {
            const Icon = getServiceIcon(service)
            return (
              <div key={service} className={styles.serviceIcon}>
                <Icon />
              </div>
            )
          })}
        </div>

        <p>{coupleDescription}</p>

        <button className='primary-button'>{couplesName}'s Wedding</button>
      </div>

      <DecorativeImage
        src={coupleImageSrc}
        alt={coupleImageAlt}
        decorativeText={couplesName}
      />

      {serviceImages.map(serviceImage => {
        return (
          <div key={`${serviceImage.serviceName}Image`}>
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
