'use client'

import React from 'react'
import styles from './navigation.module.css'
import Link from 'next/link'
import AnimatedX from './animated-x/AnimatedX'

const Navigation = () => {
  return (
    <nav className={`content-grid full-width bg-primary ${styles.container}`}>
      <AnimatedX />

      <Link href='/' className={styles.brand}>
        Cherished Moments
      </Link>

      <ul className={styles.navigation}>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/services'>Services</Link>
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
