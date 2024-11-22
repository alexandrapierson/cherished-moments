import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import DecorativeImage from './components/decorative-image/DecorativeImage'
import PolaroidImage from './components/polaroid-image/PolaroidImage'
import Logo from './svg/logo'

export default function Home() {
  return (
    <div className='content-grid'>
      <section className={`${styles.hero}`}>
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
        <Logo
          width='200'
          height='200'
          className='logo'
          color='#f4f4f6'
          alt='Cherished Moments Logo'
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
          src='/images/home-page/couple-photo-1.jpg'
          alt='Hana & James Wedding Photo'
          caption='Hana & James'
        />

        <PolaroidImage
          src='/images/home-page/couple-photo-2.jpg'
          alt='Josh & Andrea Wedding Photo'
          caption='Josh & Andrea'
        />

        <PolaroidImage
          src='/images/home-page/couple-photo-3.jpg'
          alt='Kyle & Hayler Wedding Photo'
          caption='Kyle & Hayley'
        />

        <PolaroidImage
          src='/images/home-page/couple-photo-4.jpg'
          alt='Hannah & Jason Wedding Photo'
          caption='Hannah & Jason'
        />

        <PolaroidImage
          src='/images/home-page/couple-photo-5.jpg'
          alt='Samantha & Chris Wedding Photo'
          caption='Samantha & Chris'
        />
      </section>

      <section className={`${styles.servicesContainer} ${styles.rightImage}`}>
        <div className={`${styles.textContainer}`}>
          <h2 className='margin-s'>Our Wedding Planning Services</h2>
          <p className='margin-m'>
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
          src='/images/home-page/floral-wedding-venue.jpg'
          alt='Wedding hall with vibrant flower center pieces on carefully crafted circle tables. Fit to serve a wedding of over 100 people.'
          decorativeText='Venue'
        />

        <DecorativeImage
          src='/images/home-page/bride-and-groom-with-champaigne.jpg'
          alt='Groom holding champaign glasses with brides arm linked around his elbow.'
          decorativeText='Attire'
        />

        <DecorativeImage
          src='/images/home-page/die-cut-wedding-stationery.jpg'
          alt='Wedding invitations that have been die cut with a floral design and a silk ribbon tying the trifold shut.'
          decorativeText='Stationery'
        />

        <DecorativeImage
          src='/images/home-page/pouring-wine-for-wedding-guests.jpg'
          alt='Wedding guest pouring champaign for another guest at a long filled table.'
          decorativeText='Catering'
        />
      </section>

      <section className='image-text-section'>
        <div className='image-container'>
          <Image
            src='/images/home-page/emily-and-james-couple-photo-2024.jpg'
            alt='Emily & James Wedding Photo'
            width='700'
            height='800'
          />
        </div>
        <div className={`text-container ${styles.testimonialContainer}`}>
          <h3 className='margin-xs'>Emily & James</h3>
          <p className='margin-m'>Full Service Planning</p>
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
