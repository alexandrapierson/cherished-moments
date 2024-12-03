import React from 'react'
import PortfolioCouple from '../components/portfolio-couple/PortfolioCouple'

const Portfolio = () => {
  return (
    <main className='content-grid'>
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
    </main>
  )
}

export default Portfolio
