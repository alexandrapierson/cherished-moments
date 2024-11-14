import React from 'react'
import styles from './navigation.module.css'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='full-width bg-primary'>
      <ul className={styles.navigation}>
        <li>
          <Link href='#'>About</Link>
        </li>
        <li>
          <Link href='#'>Services</Link>
        </li>
        <li>
          <Link href='#'>Cherished Moments</Link>
        </li>
        <li>
          <Link href='#'>Porfolio</Link>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
        <li>
          <Link href='#' className='primary-button'>
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
