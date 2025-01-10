import React from 'react'
import styles from './packageOptions.module.css'
import BulletPoint from '@/app/svg/BulletPoint'

interface PackageOptionProp {
  packageName: string
  packageDescriptions: string[]
  packageOptions?: string[]
  emphasized?: boolean
}

const PackageOption: React.FC<PackageOptionProp> = ({
  packageName,
  packageDescriptions,
  packageOptions,
  emphasized
}) => {
  return (
    <article
      className={`${styles.packageOption} ${
        emphasized ? styles.emphasized : ''
      }`}
    >
      <p className={styles.packageName}>{packageName}</p>

      {packageDescriptions.map((description, index) => (
        <p key={`description-${index}`} className={styles.description}>
          {description}
        </p>
      ))}

      {packageOptions ? (
        <ul className={styles.options}>
          {packageOptions.map((option, index) => (
            <li key={`option-${index}`} className={styles.option}>
              <BulletPoint />
              {option}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </article>
  )
}

export default PackageOption
