import React from 'react'
import Logo from '../svg/logo'
import Image from 'next/image'
import Link from 'next/link'
import ServiceSquare from '../components/service-square/ServiceSquare'
import styles from './page.module.css'
import PackageOption from '../components/package-options/PackageOptions'

const Services = () => {
  return (
    <main className='content-grid margin-top'>
      <section className={`image-text-section`}>
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
          <p className='margin-m'>
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
