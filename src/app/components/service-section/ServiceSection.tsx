import React from 'react'
import styles from './serviceSection.module.css'
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
import Image from 'next/image'

interface ServiceImage {
  imageSrc: string
  imageAlt: string
  width?: number
  height?: number
}

interface ServiceSectionProps {
  service: string
  serviceName: string
  serviceDescription: string
  serviceImages: ServiceImage[]
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  service,
  serviceName,
  serviceDescription,
  serviceImages
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
    <section className={`margin-xl ${styles.serviceSection}`} id={service}>
      <div className={`margin-m ${styles.serviceDetails}`}>
        {(() => {
          const Icon = getServiceIcon(service)
          return (
            <div key={service} className={styles.serviceIcon}>
              <Icon width='150' height='150' />
            </div>
          )
        })()}

        <div className={`${styles.serviceInformation}`}>
          <p className={styles.serviceName}>{serviceName}</p>
          <p className={styles.serviceDescription}>{serviceDescription}</p>
        </div>
      </div>

      <div className={styles.serviceImages}>
        {serviceImages.map((serviceImage, index) => (
          <Image
            key={`serviceImage-${index}`}
            src={serviceImage.imageSrc}
            alt={serviceImage.imageAlt}
            width={serviceImage.width || 700}
            height={serviceImage.height || 800}
            id={`image${service}-${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
