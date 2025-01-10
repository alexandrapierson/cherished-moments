import styles from './serviceSquare.module.css'
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

interface ServiceSquareProps {
  serviceName: string
  service: string
}

const ServiceSquare: React.FC<ServiceSquareProps> = ({
  serviceName,
  service
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
    <a className={styles.serviceSquare} href={`#${service}`}>
      <p>{serviceName}</p>

      {(() => {
        const Icon = getServiceIcon(service)
        return (
          <div key={service} className={styles.serviceIcon}>
            <Icon />
          </div>
        )
      })()}
    </a>
  )
}

export default ServiceSquare
