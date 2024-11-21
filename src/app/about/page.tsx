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
          name='Ethan Martinez'
          role='Event Coordinator'
          quote='For me, it’s all about making sure everything runs perfectly so couples can focus on enjoying their day. There’s nothing better than seeing everyone laughing, dancing, and having the time of their lives, knowing I helped make that happen.'
          weddingTradition='Father Daughter Dance - I always tear up during the father-daughter dance. It’s such an emotional moment, full of love and memories.'
          imageSrc=''
          firstName='Ethan'
        />

        <TeamMemberInfo
          name='Sarah Patel'
          role='Floral Designer'
          quote='Flowers are my love language. There’s something so special about picking the perfect flowers to match a couple’s vibe and seeing their faces light up when they see it all come to life.'
          weddingTradition='Handwritten Vows - The vows always get me. The emotion and love they share in that moment is so raw and beautiful.'
          imageSrc=''
          firstName='Sarah'
        />
      </main>
    </div>
  )
}

export default About
