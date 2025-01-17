import React from 'react'
import styles from '../styles/Sponsors.module.css'

const Sponsors = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.sponsors}>Sponsor Page</h1>
        <img className={styles.logo} src="/public/mlsclogo.png" alt="MLSC Logo" />
      </div>
    </div>
    </>
  )
}

export default Sponsors
