import Image from 'next/image'
import React from 'react'

const Carousel = () => {
  return (
    <section aria-label='Carousel'>
      <button className='handle left-handle'>
        <div className='text'>&#8249;</div>
      </button>
      <div className='slider'>
        <Image src='https://via.placeholder.com/210?text=1' alt='' />
        <Image src='https://via.placeholder.com/220?text=2' alt='' />
        <Image src='https://via.placeholder.com/230?text=3' alt='' />
        <Image src='https://via.placeholder.com/240?text=4' alt='' />
        <Image src='https://via.placeholder.com/250?text=5' alt='' />
        <Image src='https://via.placeholder.com/260?text=6' alt='' />
        <Image src='https://via.placeholder.com/270?text=7' alt='' />
        <Image src='https://via.placeholder.com/280?text=8' alt='' />
        <Image src='https://via.placeholder.com/290?text=9' alt='' />
      </div>
      <button className='handle right-handle'>
        <div className='text'>&#8250;</div>
      </button>
    </section>
  )
}

export default Carousel
