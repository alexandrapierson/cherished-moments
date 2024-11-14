import React from 'react'
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <nav className='full-width bg-primary'>
      <ul className={styles.navigation}>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Cherished Moments</a>
        </li>
        <li>
          <a href='#'>Porfolio</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>Book Now</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
