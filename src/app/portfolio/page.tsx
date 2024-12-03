import React from 'react'
import PortfolioCouple from '../components/portfolio-couple/PortfolioCouple'

const Portfolio = () => {
  return (
    <div className='content-grid'>
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
            serviceImageAlt:
              'Dani&#39;s dress day of holding her bouquet with diamond necklace.',
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
            serviceImageAlt:
              'Dallas and Dani&#39;s wedding stationery, invitation, table placement cards, and itinerary with pink florals detailing.',
            serviceImageSrc:
              '/images/portfolio/dallas-and-dani/dallas-and-dani-stationery.jpg',
            serviceName: 'Stationery'
          }
        ]}
      />
    </div>
  )
}

export default Portfolio
