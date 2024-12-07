'use client'

import styles from './page.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
  const [roleFieldSet, setRoleFieldSet] = useState({
    selectedOption: '',
    otherText: ''
  })
  const [interestFieldSet, setInterestFieldSet] = useState({
    selectedOption: '',
    otherText: ''
  })
  const [serviceFieldSet, setServiceFieldSet] = useState({
    selectedOption: '',
    otherText: ''
  })
  const [FieldSet, setAdditionalInformationFieldSet] = useState({
    selectedOption: '',
    otherText: ''
  })

  const handleFieldsetChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldsetSetter: React.Dispatch<
      React.SetStateAction<{ selectedOption: string; otherText: string }>
    >
  ) => {
    const { value } = e.target
    fieldsetSetter(prev => ({
      ...prev,
      selectedOption: value,
      otherText: value !== 'other' ? '' : prev.otherText
    }))
  }

  const handleOtherTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldsetSetter: React.Dispatch<
      React.SetStateAction<{ selectedOption: string; otherText: string }>
    >
  ) => {
    const { value } = e.target
    fieldsetSetter(prev => ({ ...prev, otherText: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(
      'Fieldset 1:',
      roleFieldSet.selectedOption === 'other'
        ? roleFieldSet.otherText
        : roleFieldSet.selectedOption
    )
    console.log(
      'Fieldset 2:',
      interestFieldSet.selectedOption === 'other'
        ? interestFieldSet.otherText
        : interestFieldSet.selectedOption
    )
  }

  return (
    <div className='content-grid margin-top'>
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
          <h1 className='margin-s'>We&#39;d Love to Hear From You</h1>
          <p className='margin-m'>
            Whether you&#39;re ready to start planning your dream wedding or
            have a few questions, our team is here to help. Reach out today, and
            let&#39;s discuss how we can bring your vision to life. We&#39;re
            excited to be part of your wedding journey and look forward to
            connecting soon.
          </p>
        </div>
      </section>

      <form className={`${styles.contactForm}`}>
        <fieldset className={`${styles.contactInformation}`}>
          <legend>Contact Information</legend>

          <div>
            <input />
            <input />
            <input />
            <input />
          </div>

          <div className={`${styles.radioGroup}`}>
            <h3>Preferred Contact Method:</h3>
            <label className={`${styles.radioItem}`}>
              <input type='radio' name='contactMethod' value='email' />
              Email
            </label>

            <label className={`${styles.radioItem}`}>
              <input type='radio' name='contactMethod' value='phone' />
              Phone Call
            </label>

            <label className={`${styles.radioItem}`}>
              <input type='radio' name='contactMethod' value='textMessage' />
              Text Message
            </label>
          </div>
        </fieldset>

        <div>
          <fieldset>
            <legend>What best describes your role?</legend>

            <label className={`${styles.radioGroup}`}>
              <input type='radio' name='weddingRole' value='couple' />
              I'm a couple planning a wedding
            </label>

            <label className={`${styles.radioGroup}`}>
              <input type='radio' name='weddingRole' value='secondary' />
              I'm a family member or friend helping with planning a wedding
            </label>

            <label className={`${styles.radioGroup}`}>
              <input type='radio' name='weddingRole' value='vendor' />
              I'm a vendor interesting in collaboration (e.g., florist,
              photographer, musician, etc.)
            </label>

            <label className={`${styles.radioGroup}`}>
              <input type='radio' name='weddingRole' value='venue' />I represent
              a venue or event space
            </label>

            <label className={`${styles.radioGroup}`}>
              <input type='radio' name='weddingRole' value='exploring' />
              I'm just exploring options / gathering information
            </label>

            <label className={`${styles.radioGroup}`}>
              <input
                type='radio'
                name='weddingRole'
                value='exploring'
                id='other-radio'
              />
              I'm just exploring options / gathering information
            </label>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default Contact
