import React from 'react'
import styles from './style.module.css'

class Contact extends React.Component{
 render(){
    return <div className={styles.careersBlock}>
      <h2>Positions</h2>
      <h3 className={styles.careerListing}>Chief Algo Architect (New York, Tel Aviv, Remote)</h3>
      <h3 className={styles.careerListing}>Quantitative DeFi Trader (New York)</h3>
      <h3 className={styles.careerListing}>Quantitative CeFi Trader (New York, Tel Aviv, Remote)</h3>
      <h3 className={styles.careerListing}>Full Stack Engineer (Python, JS, C++) (Remote from New York area)</h3>
      <h3>We're always looking for alpha and give generous payouts, and our hiring process is highly informal, so feel free to send Ilan (<a href="mailto:ilan@ruatancapital.com">ilan@ruatancapital.com</a>) your resume or a note, he'd love to hear from you.</h3>
   </div>
 }
}

export default Contact;