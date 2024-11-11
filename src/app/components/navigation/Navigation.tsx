import React from 'react'
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <nav className='full-width bg-primary'>
      <ul className={styles.navigation}>
        <li>About</li>
        <li>Services</li>
        <li>Cherished Moments</li>
        <li>Porfolio</li>
        <li>Contact</li>
        <li>Book Now</li>
      </ul>
    </nav>
  )
}

export default Navigation
