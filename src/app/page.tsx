import styles from './page.module.css'
import Navigation from './components/navigation/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='content-grid'>
      <Navigation />
      <main>
        <img
          src='/images/bridal-flowers-with-ring.jpg'
          alt='Wedding ring nestled into a bridal bouquet.'
        />

        <section>
          <img
            src='/images/antique-wedding-venue.jpg'
            alt='Wedding aisle with white rose bouquets on either side.'
          />
          <h1>Plan your wedding with us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat, neque ac scelerisque convallis, dui odio mattis lorem, eu
            venenatis ante nisl vel mi. Praesent maximus laoreet augue, eget
            dignissim dui pulvinar eu. Fusce accumsan ipsum a enim interdum
            finibus. Aenean non lacinia dolor, at rutrum sapien. Nam elementum
            nisl tincidunt ex consequat, nec feugiat velit aliquet.
          </p>
          <Link href='#'>Book An Appointment</Link>
        </section>

        <section>
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
        </section>
      </main>
    </div>
  )
}
