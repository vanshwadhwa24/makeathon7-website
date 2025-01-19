import React from 'react'
import styles from './Pages.module.css'

const Pages = () => {
  return (
    <div className={styles.container}>

        <div className={styles.row}>

          <div className={styles.filespagebgleft}>
            <div className={styles.filespageleft1}>
              <div className={styles.filespageleft2}>
                <h1 align="center">TITLE</h1>
                <h1 align="center">COMPANY NAME</h1>
              </div>
            </div>
          </div>

          <div className={styles.filespagebgright}>
            <div className={styles.filespageright1}>
              <div className={styles.filespageright2}>
                <h1 align="center">SPONSORS</h1>
                <h1 align="center">COMPANY NAME</h1>
              </div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Pages