import Image from 'next/image'
import Navigation from './components/navigation/Navigation'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='content-grid'>
      <Navigation />
      <video width='2048' height='2048' autoPlay muted loop>
        <source src='/videos/wedding-venue.mp4' type='video/mp4' />
      </video>

      <section className={`${styles.sectionContainer}`}>
        <div className={`${styles.imageContainer}`}>
          <Image
            src='/images/couple-pixabay.jpg'
            alt='Wedding aisle with white rose bouquets on either side.'
            width='2048'
            height='2048'
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
          <Link href='#'>Book An Appointment</Link>
        </div>
      </section>

      <section className={`${styles.servicesContainer} ${styles.rightImage}`}>
        <div className={`${styles.textContainer}`}>
          <h2>See how our services can make your day</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat, neque ac scelerisque convallis, dui odio mattis lorem, eu
            venenatis ante nisl vel mi. Praesent maximus laoreet augue, eget
            dignissim dui pulvinar eu. Fusce accumsan ipsum a enim interdum
            finibus. Aenean non lacinia dolor, at rutrum sapien. Nam elementum
            nisl tincidunt ex consequat, nec feugiat velit aliquet.
          </p>
          <Link href='/services'>View Our Services</Link>
        </div>

        <div className={`${styles.imageContainer}`}>
          <Image
            src='/images/couple-pixabay.jpg'
            alt=''
            width='2048'
            height='2048'
          />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Venue</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>

        <div className={`${styles.imageContainer}`}>
          <Image
            src='/images/couple-pixabay.jpg'
            alt=''
            width='2048'
            height='2048'
          />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Attire</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>

        <div className={`${styles.imageContainer}`}>
          <Image
            src='/images/couple-pixabay.jpg'
            alt=''
            width='2048'
            height='2048'
          />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Stationery</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>

        <div className={`${styles.imageContainer}`}>
          <Image
            src='/images/couple-pixabay.jpg'
            alt=''
            width='2048'
            height='2048'
          />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Catering</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionContainer}`}>
        <div className={styles.imageContainer}>
          <Image
            src='/images/couple-pixabay.jpg'
            alt=''
            width='2048'
            height='2048'
          />
        </div>
        <div className={`${styles.textContainer}`}>
          <h3>Emily & James</h3>
          <p>Full Service Planning</p>
          <blockquote>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat, neque ac scelerisque convallis, dui odio mattis lorem, eu
            venenatis ante nisl vel mi. Praesent maximus laoreet augue, eget
            dignissim dui pulvinar eu. Fusce accumsan ipsum a enim interdum
            finibus. Aenean non lacinia dolor, at rutrum sapien. Nam elementum
            nisl tincidunt ex consequat, nec feugiat velit aliquet.&quot;
          </blockquote>
        </div>
      </section>
    </div>
  )
}
