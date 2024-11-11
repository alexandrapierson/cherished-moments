import Navigation from './components/navigation/Navigation'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='content-grid'>
      <Navigation />
      <img
        src='/images/bridal-flowers-with-ring.jpg'
        alt='Wedding ring nestled into a bridal bouquet.'
      />

      <section className={`${styles.sectionContainer}`}>
        <div className={`${styles.imageContainer}`}>
          <img
            src='/images/couple-pixabay.jpg'
            alt='Wedding aisle with white rose bouquets on either side.'
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
          <img src='/images/couple-pixabay.jpg' alt='' />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Venue</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>

        <div className={`${styles.imageContainer}`}>
          <img src='/images/couple-pixabay.jpg' alt='' />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Attire</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>

        <div className={`${styles.imageContainer}`}>
          <img src='/images/couple-pixabay.jpg' alt='' />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Stationery</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>

        <div className={`${styles.imageContainer}`}>
          <img src='/images/couple-pixabay.jpg' alt='' />
          <div className={styles.decorativeText}>
            <div className={styles.decorativeLine}></div>
            <p className='script-text'>Catering</p>
            <div className={styles.decorativeLine}></div>
          </div>
        </div>
      </section>

      <section className={`${styles.servicesContainer}`}>
        <div className={styles.imageContainer}>
          <img src='/images/couple-pixabay.jpg' alt='' />
        </div>
        <div className={`${styles.textContainer}`}>
          <h3>Emily & James</h3>
          <p>Full Service Planning</p>
          <blockquote>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat, neque ac scelerisque convallis, dui odio mattis lorem, eu
            venenatis ante nisl vel mi. Praesent maximus laoreet augue, eget
            dignissim dui pulvinar eu. Fusce accumsan ipsum a enim interdum
            finibus. Aenean non lacinia dolor, at rutrum sapien. Nam elementum
            nisl tincidunt ex consequat, nec feugiat velit aliquet.""
          </blockquote>
          <Link href='/services'>View Our Services</Link>
        </div>
      </section>
    </div>
  )
}
