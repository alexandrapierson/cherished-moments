import React from 'react'
import Logo from '../svg/logo'
import Image from 'next/image'
import Link from 'next/link'
import ServiceSquare from '../components/service-square/ServiceSquare'
import styles from './page.module.css'
import PackageOption from '../components/package-options/PackageOptions'
import ServiceSection from '../components/service-section/ServiceSection'

const Services = () => {
  const serviceOrder = [
    'Venue',
    'Attire',
    'Catering',
    'Floral',
    'Photography',
    'Videography',
    'Stationery',
    'Theme',
    'Timeline',
    'Event',
    'Travel',
    'Guest'
  ]

  return (
    <main className='content-grid margin-top'>
      <section className={`image-text-section logo-section`}>
        <div className={`image-container`}>
          <Logo
            width='200'
            height='200'
            className='logo'
            alt='Cherished Moments Logo'
            color='#1a1a1e'
          />
        </div>
        <div className={`text-container`}>
          <h1 className='margin-s'>
            Tailored Wedding Services for Your Precious Day
          </h1>
          <p>
            Whether you need full-service planning, day-of coordination, or
            assistance with specific elements like décor or catering, we&#39;re
            here to bring your vision to life. Our team is dedicated to crafting
            a celebration that reflects your unique love story and ensures every
            detail is perfect. Explore our services and see how we can help
            create the wedding of your dreams.
          </p>
        </div>
      </section>

      <section className={`margin-xl ${styles.serviceGrid}`}>
        <ServiceSquare service='Venue' serviceName='Venue' />
        <ServiceSquare service='Attire' serviceName='Apparel' />
        <ServiceSquare service='Catering' serviceName='Catering' />
        <ServiceSquare service='Floral' serviceName='Florals' />
        <ServiceSquare service='Photography' serviceName='Photography' />
        <ServiceSquare service='Videography' serviceName='Videography' />
        <ServiceSquare service='Stationery' serviceName='Stationery' />
        <ServiceSquare service='Theme' serviceName='Theme' />
        <ServiceSquare service='Timeline' serviceName='Timeline' />
        <ServiceSquare service='Event' serviceName='Events' />
        <ServiceSquare service='Travel' serviceName='Destination' />
        <ServiceSquare service='Guest' serviceName='Guest' />
      </section>

      <section>
        <ServiceSection
          service='Venue'
          serviceName='Venue Selection & Booking'
          serviceDescription='We help you find the perfect venue that fits your style, guest count, and vision. Whether it&#39;s an intimate space or a grand ballroom, we guide you through the selection and booking process to ensure your venue is as special as your day.'
          serviceImages={[
            {
              imageAlt: 'Destination Outdoor Venue',
              imageSrc: '/images/services/venue/destination-outdoor-venue.jpg'
            },
            {
              imageAlt: 'Destination Venue',
              imageSrc: '/images/services/venue/destination-venue.jpg'
            },
            {
              imageAlt: 'Indoor Venue',
              imageSrc: '/images/services/venue/indoor-venue.jpg'
            },
            {
              imageAlt: 'Outdoor Venue',
              imageSrc: '/images/services/venue/outdoor-venue.jpg'
            },
            {
              imageAlt: 'Indoor Historical Venue',
              imageSrc: '/images/services/venue/indoor-historical-venue.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Attire'
          serviceName='Apparel Consulation'
          serviceDescription='From the bride&#39;s gown to the groom&#39;s suit, we assist in selecting the perfect attire for your entire wedding party. We help you choose outfits that align with your wedding theme and ensure everything fits perfectly for the big day.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Catering'
          serviceName='Catering Coordination & Menu Planning'
          serviceDescription='We work with top caterers to design a menu that reflects your tastes and satisfies your guests. Whether it&#39;s a plated dinner or a buffet, we help you create a dining experience that&#39;s both delicious and memorable.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Floral'
          serviceName='Florals & Decor Setup'
          serviceDescription='We create stunning floral arrangements that complement your wedding theme and color palette. From bouquets to centerpieces, we ensure your flowers add beauty and elegance to your celebration.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Photography'
          serviceName='Photography Management'
          serviceDescription='Capture every moment of your wedding day with a photographer who understands your style. From candid shots to posed portraits, we help you select a photographer that will immortalize your love story.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Videography'
          serviceName='Videography Management'
          serviceDescription='A wedding video is a beautiful way to relive your day. We work with talented videographers who will create a cinematic story of your wedding, capturing every special moment and emotion.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Stationery'
          serviceName='Stationery Design'
          serviceDescription='We design personalized wedding stationery that sets the tone for your event. From invitations to thank-you notes, our custom designs will reflect your style and theme.

'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Theme'
          serviceName='Design & Theme Planning'
          serviceDescription='We help you choose and develop a wedding theme that reflects your personality and vision. From décor to colors, we ensure every detail aligns with your chosen theme.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Timeline'
          serviceName='Timeline Planning & Management'
          serviceDescription='We create a detailed wedding timeline to ensure your day flows smoothly. From the ceremony to the reception, we make sure every moment is perfectly scheduled and coordinated.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Event'
          serviceName='Event Coordination & Booking'
          serviceDescription='In addition to your wedding day, we help plan and coordinate rehearsal dinners, bridal showers, and other special events. We handle the details so you can focus on enjoying the celebrations.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Travel'
          serviceName='Destination Wedding Planning'
          serviceDescription='Planning a destination wedding? We assist in choosing the perfect location and coordinate all the logistics, from travel to accommodations, ensuring a seamless and memorable experience.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />

        <ServiceSection
          service='Guest'
          serviceName='Guest List & RSVP Management'
          serviceDescription='We assist with managing your guest list, RSVPs, and seating arrangements. Our goal is to ensure your guests feel welcome and enjoy every moment of your celebration.'
          serviceImages={[
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            },
            {
              imageAlt: '',
              imageSrc: '/images/default.jpg'
            }
          ]}
        />
      </section>

      <section className={`image-text-section`}>
        <div className={`image-container`}>
          <Image
            src='/images/home-page/couple-pixabay.jpg'
            alt='Wedding aisle with white rose bouquets on either side.'
            width='700'
            height='800'
          />
        </div>
        <div className={`text-container`}>
          <h1 className='margin-s'>Plan your wedding with us</h1>
          <p className='margin-m'>
            Your wedding day is one of the most memorable moments of your life,
            and we&#39;re here to make it unforgettable. From the initial
            planning stages to the final touches, our dedicated team will guide
            you every step of the way. With personalized services and a
            commitment to bringing your vision to life, we&#39;ll handle every
            detail so you can focus on celebrating. Let us transform your dream
            into reality, creating a wedding that&#39;s perfectly you.
          </p>
          <Link href='#' className='primary-button'>
            Book An Appointment
          </Link>
        </div>
      </section>

      <section className={`${styles.packageOptions} margin-l`}>
        <PackageOption
          packageName='Full Service Package'
          packageDescriptions={[
            'Comprehensive wedding planning and coordination from start to finish.'
          ]}
          packageOptions={[
            'Venue Selection & Booking',
            'Apparel Consultation',
            'Catering Coordination & Menu Planning',
            'Florals & Decor Setup',
            'Photography & Videography Management',
            'Stationery Design',
            'Design & Theme Planning',
            'Complete Timeline Management',
            'Full Event Coordination',
            'Destination Wedding Planning',
            'Guest List & RSVP Management'
          ]}
          emphasized
        />

        <PackageOption
          packageName='Basic Package'
          packageDescriptions={[
            'Core services to cover the essentials for a smooth wedding.'
          ]}
          packageOptions={[
            'Venue Selection & Booking',
            'Apparel Consultation',
            'Catering Coordination',
            'Florals & Decor Setup',
            'Photography Management',
            'Stationery Design',
            'Timeline Management',
            'Basic Event Coordination'
          ]}
        />

        <PackageOption
          packageName='Custom Package'
          packageDescriptions={[
            'Tailor your wedding experience to fit your unique vision with our Custom Package.',
            'This flexible option allows you to select only the services you need, ensuring a completely personalized approach to planning your big day.',
            'You choose the services that align with your preferences and budget.',
            'Create the wedding of your dreams with a package designed exclusively for you.'
          ]}
        />
      </section>
    </main>
  )
}

export default Services
