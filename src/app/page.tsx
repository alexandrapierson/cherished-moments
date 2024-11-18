import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import DecorativeImage from './components/decorative-image/DecorativeImage'
import PolaroidImage from './components/polaroid-image/PolaroidImage'

export default function Home() {
  return (
    <div className='content-grid'>
      <video
        width='1280'
        height='720'
        autoPlay
        muted
        loop
        className={`${styles.heroVideo}`}
      >
        <source src='/videos/wedding-venue.mp4' type='video/mp4' />
      </video>

      <section className={`${styles.sectionContainer}`}>
        <div className={`${styles.imageContainer}`}>
          <Image
            src='/images/couple-pixabay.jpg'
            alt='Wedding aisle with white rose bouquets on either side.'
            width='700'
            height='800'
          />
        </div>
        <div className={`${styles.textContainer}`}>
          <h1>Plan your wedding with us</h1>
          <p>
            Your wedding day is one of the most memorable moments of your life,
            and we’re here to make it unforgettable. From the initial planning
            stages to the final touches, our dedicated team will guide you every
            step of the way. With personalized services and a commitment to
            bringing your vision to life, we’ll handle every detail so you can
            focus on celebrating. Let us transform your dream into reality,
            creating a wedding that’s perfectly you.
          </p>
          <Link href='#' className='primary-button'>
            Book An Appointment
          </Link>
        </div>
      </section>

      <section className={`${styles.polaroidContainer}`}>
        <PolaroidImage
          src='/images/couple-photo-1.jpg'
          alt=''
          caption='Hana & James'
        />
        <PolaroidImage
          src='/images/couple-photo-2.jpg'
          alt=''
          caption='Josh & Andrea'
        />{' '}
        <PolaroidImage
          src='/images/couple-photo-3.jpg'
          alt=''
          caption='Kyle & Hayley'
        />{' '}
        <PolaroidImage
          src='/images/couple-photo-4.jpg'
          alt=''
          caption='Hannah & Jason'
        />
        <PolaroidImage
          src='/images/couple-photo-5.jpg'
          alt=''
          caption='Samantha & Chris'
        />
      </section>

      <section className={`${styles.servicesContainer} ${styles.rightImage}`}>
        <div className={`${styles.textContainer}`}>
          <h2>Our Wedding Planning Services</h2>
          <p>
            We offer a full suite of wedding planning services to bring your
            vision to life. Whether you need help with every detail or just a
            few final touches, our expert team is here to make the process
            effortless and enjoyable. From venue selection and vendor
            coordination to custom décor and day-of management, we handle it all
            with precision and care. Our goal is to create a wedding experience
            that reflects your unique style and story.
          </p>
          <Link href='/services' className='primary-button'>
            View Our Services
          </Link>
        </div>

        <DecorativeImage
          src='/images/floral-wedding-venue.jpg'
          alt=''
          decorativeText='Venue'
        />

        <DecorativeImage
          src='/images/bride-and-groom-with-champaigne.jpg'
          alt=''
          decorativeText='Attire'
        />

        <DecorativeImage
          src='/images/die-cut-wedding-stationery.jpg'
          alt=''
          decorativeText='Stationery'
        />

        <DecorativeImage
          src='/images/pouring-wine-for-wedding-guests.jpg'
          alt=''
          decorativeText='Catering'
        />
      </section>

      <section className={`${styles.sectionContainer}`}>
        <div className={styles.imageContainer}>
          <Image
            src='/images/emily-and-james-couple-photo-2024.jpg'
            alt=''
            width='700'
            height='800'
          />
        </div>
        <div className={`${styles.testimonialContainer}`}>
          <h3>Emily & James</h3>
          <p>Full Service Planning</p>
          <blockquote>
            &quot;Our wedding was everything we dreamed of and more! From the
            first meeting to the final moments of our big day, the team took
            care of every detail with so much heart and dedication. We couldn’t
            have asked for a more perfect day, and our guests are still talking
            about how beautiful everything was. Thank you for making our vision
            come to life!&quot;
          </blockquote>
        </div>
      </section>
    </div>
  )
}
