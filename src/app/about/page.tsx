import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import TeamMemberInfo from '../components/team-member-info/TeamMemberInfo'

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

      <main>
        <TeamMemberInfo
          name='Olivia Thompson'
          role='Lead Wedding Planner'
          quote='I love helping couples create the wedding of their dreams. There’s something magical about seeing their faces when everything comes together on the big day. It’s the best feeling in the world knowing I played a part in such an important moment.'
          weddingTradition='Personalized vows – it’s always so touching to hear couples express their love in their own words.'
          imageSrc=''
          firstName='Olivia'
        />

        <TeamMemberInfo
          name=''
          role=''
          quote=''
          weddingTradition=''
          imageSrc=''
          firstName=''
        />

        <TeamMemberInfo
          name=''
          role=''
          quote=''
          weddingTradition=''
          imageSrc=''
          firstName=''
        />
      </main>
    </div>
  )
}

export default About
