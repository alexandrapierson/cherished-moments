'use client'

import styles from './page.module.css'
import Image from 'next/image'
import React, { useState } from 'react'
import RadioButton from '../components/radio-button/RadioButton'
import Checkbox from '../components/checkbox/Checkbox'

type ContactInformation = {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  contactMethod: string
  contactTime: string
}

type InquiryDetailRadio = {
  selectedOption: string
  otherText: string
}

type InquiryDetailSelection = {
  selectedOption: string[] | string
  otherText: string
}

type InquiryDetails = {
  weddingRole: InquiryDetailRadio
  interest: InquiryDetailRadio
  serviceInterest: InquiryDetailSelection
  additionalComment: string
  referral: InquiryDetailRadio
}

type FormData = {
  contactInformation: ContactInformation
  inquiryDetails: InquiryDetails
}

type NestedForm<T> = {
  [K in keyof T]: T[K] extends object ? [K, ...NestedForm<T[K]>] : [K]
}[keyof T]

const Contact = () => {
  const [formData, setFormData] = useState({
    contactInformation: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      contactMethod: '',
      contactTime: ''
    },
    inquiryDetails: {
      weddingRole: {
        selectedOption: '',
        otherText: ''
      },
      interest: {
        selectedOption: '',
        otherText: ''
      },
      serviceInterest: {
        selectedOptions: [''],
        otherText: ''
      },
      additionalComment: '',
      referral: {
        selectedOption: '',
        otherText: ''
      }
    }
  })

  const isInquiryDetail = (field: unknown): field is InquiryDetailRadio => {
    return (
      typeof field === 'object' &&
      field !== null &&
      'selectedOption' in field &&
      'otherText' in field &&
      (typeof (field as InquiryDetailRadio).selectedOption === 'string' ||
        Array.isArray((field as InquiryDetailRadio).selectedOption))
    )
  }

  const handleSelectionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: NestedForm<FormData>
  ) => {
    const { value } = e.target

    setFormData(prev => {
      const updatedData = { ...prev }
      path.reduce((acc: any, key, index) => {
        if (index === path.length - 1) {
          if (isInquiryDetail(acc[key])) {
            if (typeof acc[key].selectedOption === 'string') {
              acc[key].selectedOption = value
              acc[key].otherText =
                value !== 'other' ? '' : acc[key].otherText || ''
            }
          }
        } else {
          acc[key] = { ...acc[key] } // Maintain immutability
        }
        return acc[key]
      }, updatedData)

      return updatedData
    })
  }

  const handleOtherTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: NestedForm<FormData>
  ) => {
    const { value } = e.target

    setFormData(prev => {
      const updatedData = { ...prev }
      path.reduce((acc: any, key, index) => {
        if (index === path.length - 1 && isInquiryDetail(acc[key])) {
          acc[key].otherText = value
        } else {
          acc[key] = { ...acc[key] }
        }
        return acc[key]
      }, updatedData)
      return updatedData
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target

    setFormData(prev => {
      const updatedData = { ...prev }

      const field = updatedData.inquiryDetails.serviceInterest

      if (isInquiryDetail(field) && Array.isArray(field.selectedOption)) {
        field.selectedOptions = checked
          ? [...field.selectedOption, value]
          : field.selectedOption.filter(option => option !== value)
      }

      return updatedData
    })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: NestedForm<FormData>
  ) => {
    const { name, value } = e.target

    setFormData(prev => {
      const updatedData = { ...prev }
      path.reduce((acc: any, key, index) => {
        if (index === path.length - 1) {
          acc[key] = { ...acc[key], [name]: value }
        } else {
          acc[key] = { ...acc[key] }
        }
        return acc[key]
      }, updatedData)
      return updatedData
    })
  }

  const validateForm = (): boolean => {
    const { inquiryDetails } = formData

    if (
      inquiryDetails.weddingRole.selectedOption === 'other' &&
      !inquiryDetails.weddingRole.otherText.trim()
    ) {
      alert("Please describe your role in the 'Other' field.")
      return false
    }

    return true
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      console.log(formData)
    }
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

      <main className={`${styles.formContainer} margin-xxl`}>
        <Image
          src='/images/home-page/couple-pixabay.jpg'
          alt='Wedding aisle with white rose bouquest on either side.'
          width='200'
          height='1000'
        />

        <form className={`${styles.contactForm}`}>
          <fieldset className={`${styles.contactInformation}`}>
            <legend>Contact Information</legend>

            <div className={`${styles.formSectionContainer}`}>
              <h2 className='margin-s'>Contact Information</h2>

              <div className={`${styles.contactInformationContainer} margin-m`}>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
                <input type='email' placeholder='Email Address' />
                <input type='phone' placeholder='Phone Number' />
              </div>
            </div>

            <div className={`${styles.formSectionContainer} margin-m`}>
              <h3 className='margin-xs'>Preferred Contact Method:</h3>
              <label className={`radioItem`}>
                <input type='radio' name='contactMethod' value='email' />
                Email
              </label>

              <label className={`radioItem`}>
                <input type='radio' name='contactMethod' value='phone' />
                Phone Call
              </label>

              <label className={`radioItem`}>
                <input type='radio' name='contactMethod' value='textMessage' />
                Text Message
              </label>
            </div>
          </fieldset>

          <fieldset className={`${styles.inqueryDetails}`}>
            <legend id='wedding-role-legend'>Inquery Details</legend>

            <div className={`${styles.formSectionContainer} margin-m`}>
              <h2 className='margin-xs'> What best describes your role?</h2>

              {[
                { value: 'couple', label: "I'm a couple planning a wedding" },
                {
                  value: 'secondary',
                  label:
                    "I'm a family member or friend helping with planning a wedding"
                },
                {
                  value: 'vendor',
                  label:
                    "I'm a vendor interested in collaboration (e.g., florist, photographer, musician, etc.)"
                },
                { value: 'venue', label: 'I represent a venue or event space' },
                {
                  value: 'exploring',
                  label: "I'm just exploring options / gathering information"
                },
                { value: 'other', label: 'Other' }
              ].map(({ value, label }) => (
                <RadioButton
                  key={value}
                  name='weddingRole'
                  value={value}
                  checked={
                    formData.inquiryDetails.weddingRole.selectedOption === value
                  }
                  // onChange={e => ()
                  //   // handleSelectionChange(e, [
                  //   //   'inquiryDetails',
                  //   //   'weddingRole',
                  //   //   'selectedOption'
                  //   // ])

                  // }
                  label={label}
                />
              ))}

              {formData.inquiryDetails.weddingRole.selectedOption ===
                'other' && (
                <input
                  className={styles.otherInput}
                  type='text'
                  id='wedding-other'
                  value={formData.inquiryDetails.weddingRole.otherText}
                  // onChange={e =>
                  //   handleOtherTextChange(e, [
                  //     'inquiryDetails',
                  //     'weddingRole',
                  //     'otherText'
                  //   ])
                  // }
                  placeholder='Please specify your role'
                />
              )}
            </div>

            <div className={`${styles.formSectionContainer} margin-m`}>
              <h2 className='margin-xs'>What brings you to us?</h2>

              {[
                {
                  value: 'learnMore',
                  label: 'Learn more about wedding planning services'
                },
                {
                  value: 'consultationMeeting',
                  label: 'Request a consultation or meeting'
                },
                {
                  value: 'pricingPackaging',
                  label: 'Ask about pricing and packaging'
                },
                {
                  value: 'vendorPartnership',
                  label: 'Explore vendor partnership opportunities'
                },
                {
                  value: 'venueRelated',
                  label: 'Venue-related questions or partnership inquiry'
                },
                { value: 'other', label: 'Other' }
              ].map(({ value, label }) => (
                <RadioButton
                  key={value}
                  name='interest'
                  value={value}
                  checked={
                    formData.inquiryDetails.interest.selectedOption === value
                  }
                  // onChange={e =>
                  //   handleSelectionChange(e, [
                  //     'inquiryDetails',
                  //     'interest',
                  //     'selectedOption'
                  //   ])
                  // }
                  label={label}
                />
              ))}

              {formData.inquiryDetails.interest.selectedOption === 'other' && (
                <input
                  className={styles.otherInput}
                  type='text'
                  id='wedding-other'
                  value={formData.inquiryDetails.interest.otherText}
                  // onChange={e =>
                  //   handleOtherTextChange(e, [
                  //     'inquiryDetails',
                  //     'interest',
                  //     'otherText'
                  //   ])
                  // }
                  placeholder='Please specify your inquiry'
                  aria-describedby='interest-legend'
                />
              )}
            </div>

            <div className={`${styles.formSectionContainer} margin-m`}>
              <h2 className='margin-xs'>
                What services are you interest in? (Select all that apply)
              </h2>

              {[
                {
                  value: 'full-service-planning',
                  label: 'Full wedding planning services'
                },
                {
                  value: 'partial-planning',
                  label: 'Partial planning or day-of coordination'
                },
                {
                  value: 'vendor-recommendations',
                  label: 'Vendor recommendations'
                },
                {
                  value: 'design-decor-theme',
                  label: 'Design, decor, or theme consultation'
                },
                {
                  value: 'destination-wedding-planning',
                  label: 'Destination wedding planning'
                },
                {
                  value: 'budget-planning',
                  label: 'Budget planning assistance'
                },
                { value: 'other', label: 'Other' }
              ].map(({ value, label }) => (
                <Checkbox
                  key={value}
                  name='serviceInterest'
                  value={value}
                  checked={formData.inquiryDetails.serviceInterest.selectedOptions.includes(
                    value
                  )}
                  // onChange={e => handleCheckboxChange(e)}
                  label={label}
                />
              ))}
              {formData.inquiryDetails.serviceInterest.selectedOptions.includes(
                'other'
              ) && (
                <input
                  className={styles.otherInput}
                  type='text'
                  id='service-interest-other'
                  value={formData.inquiryDetails.serviceInterest.otherText}
                  // onChange={e =>
                  //   handleOtherTextChange(e, [
                  //     'inquiryDetails',
                  //     'serviceInterest',
                  //     'otherText'
                  //   ])
                  // }
                  placeholder='Describe what services you are interested in'
                />
              )}
            </div>

            <div className={`${styles.formSectionContainer} margin-m`}>
              <h3 className='margin-xs'>
                Please share any additonal details, questions, or specific
                needs.
              </h3>

              <input type='text' placeholder='Additional Comments...' />
            </div>

            <div className={`${styles.formSectionContainer} margin-m`}>
              <h2 className='margin-xs'>How did you hear about us?</h2>

              {[
                {
                  value: 'friend-or-family',
                  label: 'Referral from friend or family'
                },
                {
                  value: 'social-media',
                  label: 'Social Media (Instagram, Facebook, etc.)'
                },
                {
                  value: 'search-engine',
                  label: 'Search Engine (Google, Bing, etc.)'
                },
                {
                  value: 'wedding-site',
                  label: 'Wedding Site (The Knot, Zola, etc.)'
                },
                {
                  value: 'venue-recommendation',
                  label: 'Venue Recommendation'
                },
                { value: 'other', label: 'Other' }
              ].map(({ value, label }) => (
                <RadioButton
                  key={value}
                  name='referral'
                  value={value}
                  checked={
                    formData.inquiryDetails.referral.selectedOption === value
                  }
                  // onChange={e =>
                  //   handleSelectionChange(e, ['referral', 'selectedOption'])
                  // }
                  label={label}
                />
              ))}
              {formData.inquiryDetails.referral.otherText.includes('other') && (
                <input
                  className={styles.otherInput}
                  type='text'
                  id='service-interest-other'
                  value={formData.inquiryDetails.referral.otherText}
                  // onChange={e =>
                  //   handleOtherTextChange(e, [
                  //     'inquiryDetails',
                  //     'serviceInterest',
                  //     'otherText'
                  //   ])
                  // }
                  placeholder='Describe how you came to find our service.'
                />
              )}
            </div>

            <div className={`${styles.formSectionContainer} margin-m`}>
              <h2 className='margin-xs'>
                When is the best time for us to contact you?
              </h2>

              {[
                {
                  value: 'morning',
                  label: 'Morning (9am - 12pm)'
                },
                {
                  value: 'afternoon',
                  label: 'Afternoon (12pm - 5pm)'
                },
                {
                  value: 'evening',
                  label: 'Evening (5pm - 8pm)'
                },
                {
                  value: 'no-preference',
                  label: 'No Preference'
                }
              ].map(({ value, label }) => (
                <RadioButton
                  key={value}
                  name='referral'
                  value={value}
                  checked={formData.contactInformation.contactTime === value}
                  // onChange={e =>
                  //   handleSelectionChange(e, ['referral', 'selectedOption'])
                  // }
                  label={label}
                />
              ))}
            </div>
          </fieldset>

          <button
            className='primary-button'
            //onClick={e => handleSubmit}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default Contact
