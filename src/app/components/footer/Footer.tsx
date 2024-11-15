import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={`content-grid full-width bg-primary `}>
      <footer className={`${styles.footerPadding} ${styles.footerGrid}`}>
        {/* Site Navigation Links */}
        <nav>
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <nav>
          <h3>Connect with Us</h3>
          <ul>
            <li>
              <Link href='#'>Facebook</Link>
            </li>
            <li>
              <Link href='#'>Instagram</Link>
            </li>
            <li>
              <Link href='#'>Pinterest</Link>
            </li>
            <li>
              <Link href='#'>TikTok</Link>
            </li>
          </ul>
        </nav>

        {/* SVG Logo */}
        <Image
          src='./svg/logo.svg'
          alt='Cherished Moments Logo'
          width='200'
          height='200'
          className='logo'
        />

        <form>
          <h3>Sign Up for Our Newsletter</h3>
          <input
            required
            name='firstName'
            type='text'
            placeholder='First Name'
          />
          <input required name='lastName' type='text' placeholder='Last Name' />
          <input
            required
            name='email'
            type='text'
            placeholder='Email Address'
          />
          <button className='primary-button'>Subscribe</button>
        </form>
      </footer>
    </div>
  )
}

export default Footer
