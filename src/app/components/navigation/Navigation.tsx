import React from 'react'
import styles from './navigation.module.css'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='content-grid full-width bg-primary'>
      <ul className={styles.navigation}>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/services'>Services</Link>
        </li>
        <li className={styles.brand}>
          <Link href='/'>Cherished Moments</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='/book-an-appointment' className='primary-button'>
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
