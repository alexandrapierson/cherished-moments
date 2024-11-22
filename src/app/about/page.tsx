import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import TeamMemberInfo from '../components/team-member-info/TeamMemberInfo'
import DecorativeImage from '../components/decorative-image/DecorativeImage'
import Link from 'next/link'

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

      <section className={`image-text-section right`}>
        <div className={`text-container`}>
          <h1 className={`margin-s`}>Meet the Wedding Planning Team</h1>
          <p>
            At Cherished Moments, the team is more than just planners &#45;
            we&#39;re passionate creatives, meticulous organizers, and skilled
            coordinators dedicated to bringing every dream wedding to life. Each
            member brings a unique blend of talents and a deep love for
            celebrating love, ensuring that every step of the planning journey
            is handled with care and artistry. With guidance, unwavering
            support, and a personal touch, Cherished Moments creates weddings as
            special, unforgettable, and one-of-a-kind as the couples themselves.
          </p>
        </div>
        <div className='image-container'>
          <Image
            src='/images/about-page/about-page-photographer.jpg'
            alt='Digital Screen of camera taking a photo of a couple during ceremony.'
            width='700'
            height='800'
          />
        </div>
      </section>

      <main>
        <TeamMemberInfo
          name='Olivia Thompson'
          role='Lead Wedding Planner'
          quote='I love helping couples create the wedding of their dreams. There&#39;s something magical about seeing their faces when everything comes together on the big day. It&#39;s the best feeling in the world knowing I played a part in such an important moment.'
          weddingTradition='Personalized vows &#45; it&#39;s always so touching to hear couples express their love in their own words.'
          imageSrc='/images/about-page/olivia-thompson-lead-wedding-planner.jpg'
          firstName='Olivia'
        />

        <TeamMemberInfo
          name='Ethan Martinez'
          role='Event Coordinator'
          quote='For me, it&#39;s all about making sure everything runs perfectly so couples can focus on enjoying their day. There&#39;s nothing better than seeing everyone laughing, dancing, and having the time of their lives, knowing I helped make that happen.'
          weddingTradition='Father Daughter Dance - I always tear up during the father-daughter dance. It&#39;s such an emotional moment, full of love and memories.'
          imageSrc='/images/about-page/ethan-martinez-event-coordinator.jpg'
          firstName='Ethan'
          right
        />

        <TeamMemberInfo
          name='Sarah Patel'
          role='Floral Designer'
          quote='Flowers are my love language. There&#39;s something so special about picking the perfect flowers to match a couple&#39;s vibe and seeing their faces light up when they see it all come to life.'
          weddingTradition='Handwritten Vows - The vows always get me. The emotion and love they share in that moment is so raw and beautiful.'
          imageSrc='/images/about-page/sarah-patel-floral-designer.jpg'
          firstName='Sarah'
        />

        <section className={`${styles.employeeGrid} margin-l`}>
          <Link href='#lucas-johnson'>
            <DecorativeImage
              src='/images/about-page/lucas-johson-decor-&-design-consultant.jpg'
              alt='Lucas Johnson'
              decorativeText='Lucas'
            />
          </Link>

          <Link href='#emma-flores'>
            <DecorativeImage
              src='/images/about-page/emma-flores-catering-&-menu-specialist.jpg'
              alt='Emma Flores'
              decorativeText='Emma'
            />
          </Link>

          <Link href='#danielle-smithson'>
            <DecorativeImage
              src='/images/about-page/danielle-smithson-day-of-coordinator.jpg'
              alt='Danielle Smithson'
              decorativeText='Danielle'
            />
          </Link>

          <Link href='#mia-chen'>
            <DecorativeImage
              src='/images/about-page/mia-chen-venue-specialist.jpg'
              alt='Mia Chen'
              decorativeText='Mia'
            />
          </Link>
        </section>

        <TeamMemberInfo
          id='lucas-johnson'
          name='Lucas Johnson'
          role='Decor & Design Consultant'
          quote='Designing wedding spaces is where I get to be creative. I love taking a couple&#39;s ideas and turning them into something real and beautiful. Seeing their faces when they walk into the space is everything.'
          weddingTradition='When the couple sees the full setup for the first time. The happiness and surprise is always so heartfelt.'
          imageSrc='/images/about-page/lucas-johnson-decor-&-design-consultant.jpg'
          firstName='Lucas'
        />

        <TeamMemberInfo
          id='emma-flores'
          name='Emma Flores'
          role='Catering & Menu Specialist'
          quote='Food is one of the best parts of any celebration. I love working with couples to create menus that feel personal and reflect their tastes &#45; seeing guests enjoy every bite makes it all worth it.'
          weddingTradition='The speeches. The toasts from parents and friends always get me, especially when they share their personal stories about the couple.'
          imageSrc='/images/about-page/emma-flores-catering-&-menu-specialist.jpg'
          firstName='Emma'
        />

        <TeamMemberInfo
          id='danielle-smithson'
          name='Danielle Smithson'
          role='Day-Of Coordinator'
          quote='I&#39;m there to make sure everything goes off without a hitch so couples can relax and enjoy their day. It&#39;s all about making sure they don&#39;t have to worry about a thing, just focus on celebrating.'
          weddingTradition='When the couple exchanges their vows, especially if they&#39;re written themselves. It&#39;s such a raw, emotional moment.'
          imageSrc='/images/about-page/danielle-smithson-day-of-coordinator.jpg'
          firstName='Danielle'
        />

        <TeamMemberInfo
          id='mia-chen'
          name='Mia Chen'
          role='Venue Specialist'
          quote='Helping couples find the perfect venue is such a rewarding part of the process. Every venue has a story to tell, and I love matching couple&#39;s personalities to a place that feels right just right.'
          weddingTradition='Processional - Watching the couple walk down the aisle and seeing the emotion is always overwhelming, and it reminds me how beautiful love truly is.'
          imageSrc='/images/about-page/mia-chen-venue-specialist.jpg'
          firstName='Mia'
        />
      </main>
    </div>
  )
}

export default About
