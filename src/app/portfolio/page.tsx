import React from 'react'
import PortfolioCouple from '../components/portfolio-couple/PortfolioCouple'
import Image from 'next/image'
import Link from 'next/link'
import PolaroidCarousel from '../components/polaroid-carousel/PolaroidCarousel'

const Portfolio = () => {
  return (
    <main className='content-grid margin-top'>
      <section className={`image-text-section right`}>
        <div className={`image-container`}>
          <Image
            src='/images/home-page/couple-pixabay.jpg'
            alt='Wedding aisle with white rose bouquets on either side.'
            width='700'
            height='800'
          />
        </div>
        <div className={`text-container`}>
          <h1 className='margin-s'>
            Our Pride is Creating Captivating Memories for You and Your Partner
          </h1>
          <p className='margin-m'>
            At Cherished Moments, we take pride in turning each wedding into a
            unique celebration of love. From intimate gatherings to grand
            affairs, we design weddings that reflect the personalities and
            dreams of those we serve. Our portfolio showcases the beauty of each
            couple&#39;s special day, filled with heartfelt moments, stunning
            décor, and a celebration of love in every detail. Explore our work
            and see how we turn dreams into timeless memories.
          </p>
        </div>
      </section>
      <PortfolioCouple
        couplesName='Dallas & Dani'
        services={[
          'venue',
          'attire',
          'catering',
          'floral',
          'stationery',
          'guest'
        ]}
        coupleQuote='Walking down the aisle and seeing Dallas standing there, waiting for me, was a moment I will never forget. It felt like time stopped, and everything around us disappeared. I was overwhelmed with emotion, knowing this was the beginning of forever with the love of my life.'
        coupleImageSrc='/images/portfolio/dallas-and-dani/dallas-and-dani-wedding-photo.jpg'
        hrefLink='portfolio/dallas-and-dani'
        serviceImages={[
          {
            serviceImageAlt:
              '2 tiered white wedding cake with decorative flowers on each tier.',
            serviceImageSrc:
              '/images/portfolio/dallas-and-dani/dallas-and-dani-wedding-cake.jpg',
            serviceName: 'Wedding Cake'
          },
          {
            serviceImageAlt: `Dani's dress day of holding her bouquet with diamond necklace.`,
            serviceImageSrc:
              '/images/portfolio/dallas-and-dani/dallas-and-dani-wedding-dress-accessories.jpg',
            serviceName: 'Accessories'
          },
          {
            serviceImageAlt:
              '2 tiered white wedding cake with decorative flowers on each tier.',
            serviceImageSrc:
              '/images/portfolio/dallas-and-dani/dallas-and-dani-venue.jpg',
            serviceName: 'Venue'
          },
          {
            serviceImageAlt: `Dallas and Dani's wedding stationery, invitation, table placement cards, and itinerary with pink floral detailing.`,
            serviceImageSrc:
              '/images/portfolio/dallas-and-dani/dallas-and-dani-stationery.jpg',
            serviceName: 'Stationery'
          }
        ]}
      />
      <PortfolioCouple
        couplesName='Joshua & Piper'
        services={['venue', 'catering', 'floral', 'stationery', 'event']}
        coupleQuote='Our wedding day was everything we dreamed of and more. When we exchanged our vows, I couldn&#39;t help but tear up, thinking about all the memories we&#39;d already made and the future we&#39;re about to create together. The love we felt from our family and friends made everything even more meaningful.'
        coupleImageSrc='/images/portfolio/joshua-and-piper/joshua-and-piper-wedding-photo.jpg'
        hrefLink='portfolio/joshua-and-piper'
        serviceImages={[
          {
            serviceImageAlt:
              '4 tiered wedding cake with blue ribbon tied around the tiers. While flowers made of fondue are placed on each tier.',
            serviceImageSrc:
              '/images/portfolio/joshua-and-piper/joshua-and-piper-wedding-cake.jpg',
            serviceName: 'Wedding Cake'
          },
          {
            serviceImageAlt: `Joshua's watch and cufflink accessories in his blue wedding suit.`,
            serviceImageSrc:
              '/images/portfolio/joshua-and-piper/joshua-and-piper-cufflinks-and-watch.jpg',
            serviceName: 'Accessories'
          },
          {
            serviceImageAlt: `Joshua and Piper's Outdoor wedding venue with chairs arranged before a cloth and floral covered pathway.`,
            serviceImageSrc:
              '/images/portfolio/joshua-and-piper/joshua-and-piper-outdoor-venue.jpg',
            serviceName: 'Venue'
          },
          {
            serviceImageAlt: `Joshua and Piper's wedding stationery, invitation, table placement cards, and itinerary with blue floral detailing.`,
            serviceImageSrc:
              '/images/portfolio/joshua-and-piper/joshua-and-piper-stationery.jpg',
            serviceName: 'Stationery'
          }
        ]}
      />

      <section className='full-width'>
        <PolaroidCarousel
          polaroidImages={[
            {
              src: '/images/portfolio/jane-and-parker-couple-photo.png',
              alt: 'Jane and Parker kissing outside of their wedding venue.',
              caption: 'Jane & Parker'
            },
            {
              src: '/images/portfolio/britney-and-gabriela-couple-photo.png',
              alt: 'Britney and Gabriela holding their bouquets outside of their wedding venue.',
              caption: 'Britney & Gabriela'
            },
            {
              src: '/images/portfolio/emily-and-james-couple-photo.png',
              alt: 'Emily wishing on a daffodil while James adoringly watches.',
              caption: 'Emily & James'
            },
            {
              src: '/images/portfolio/andrea-and-stephen-couple-photo.png',
              alt: `Andrea and Stephen's after ceremony photo.`,
              caption: 'Andrea & Stephen'
            },
            {
              src: '/images/portfolio/tiffany-and-andre-couple-photo.png',
              alt: `Andre kissing Tiffany's hand outside of their wedding venue.`,
              caption: 'Tiffany & Andre'
            }
          ]}
        />
      </section>

      <PortfolioCouple
        couplesName='Brandon & Lily'
        services={[
          'venue',
          'attire',
          'catering',
          'floral',
          'stationery',
          'destination'
        ]}
        coupleQuote='The moment I saw Brandon waiting for me at the altar, all the nerves disappeared. I could only focus on him, feeling like the luckiest person alive. The joy, love, and excitement we felt that day is something I will carry with me forever. It was a day that felt like it was made just for us.'
        coupleImageSrc='/images/portfolio/brandon-and-lily/brandon-and-lily-wedding-photo.jpg'
        hrefLink='portfolio/brandon-and-lily'
        serviceImages={[
          {
            serviceImageAlt:
              '4 tiered wedding cake with flowers placed on each tier.',
            serviceImageSrc:
              '/images/portfolio/brandon-and-lily/brandon-and-lily-wedding-cake.jpg',
            serviceName: 'Wedding Cake'
          },
          {
            serviceImageAlt: `Lily's accessories featuring her earrings and shoes.`,
            serviceImageSrc:
              '/images/portfolio/brandon-and-lily/brandon-and-lily-heels-and-earrings.jpg',
            serviceName: 'Accessories'
          },
          {
            serviceImageAlt: `Brandon and Lily's wedding venue with beautiful greenery and palm trees.`,
            serviceImageSrc:
              '/images/portfolio/brandon-and-lily/brandon-and-lily-destination-venue.jpg',
            serviceName: 'Venue'
          },
          {
            serviceImageAlt: `Brandon and Lily's wedding stationery, invitation, table placement cards, and itinerary with green floral detailing.`,
            serviceImageSrc:
              '/images/portfolio/brandon-and-lily/brandon-and-lily-stationery.jpg',
            serviceName: 'Stationery'
          }
        ]}
      />

      <section className={`image-text-section right`}>
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
    </main>
  )
}

export default Portfolio
