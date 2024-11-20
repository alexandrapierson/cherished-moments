import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

const About = () => {
  return (
    <div className='content-grid'>
      <section className={`${styles.hero}`}>
        <Image
          src='/images/about-page/about-page-couple.jpg'
          alt='Couple'
          width='1198'
          height='812'
        />
      </section>

      <section className={styles.sectionContainer}>
        <div className={styles.textContainer}>
          <h1>Meet the Wedding Planning Team</h1>
          <p>
            At Cherished Moments, the team is more than just planners – we’re
            passionate creatives, meticulous organizers, and skilled
            coordinators dedicated to bringing every dream wedding to life. Each
            member brings a unique blend of talents and a deep love for
            celebrating love, ensuring that every step of the planning journey
            is handled with care and artistry. With guidance, unwavering
            support, and a personal touch, Cherished Moments creates weddings as
            special, unforgettable, and one-of-a-kind as the couples themselves.
          </p>
        </div>
        <Image
          src='/images/about-page/about-page-photographer.jpg'
          alt='Digital Screen of camera taking a photo of a couple during ceremony.'
          width='700'
          height='800'
        />
      </section>
    </div>
  )
}

export default About
