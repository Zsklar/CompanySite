import React from 'react'
import styles from './style.module.css'
import banner from './Images/banner.jpg';

class Home extends React.Component{
 render(){
   return <div>
   <img className={styles.homeImg} src={banner} alt="banner"></img>
   <div className={styles.homeBlock}>
      <h1 className={styles.homeTitle}>At Ruatan Capital</h1>
      <h2 className={styles.homeMission}>We're building the best infrastructure for the new world of finance.  
         We're striving to bring anyone with a viable business model to market.
      </h2>
   </div>

   <div className={styles.homeMethodSpan}>
      <h2 className={styles.homeMethodTitle}>Our Methodology</h2>
      <h3 className={styles.homeMethod}>There are many roadblocks preventing products from getting to market: 
      technology needs, lack of access to financing, regulatory blocks from accessing certain markets, and many others. 
      </h3>
      <h3 className={styles.homeMethod2}>At Ruatan Capital, we're experts at navigating the world of early-stage product and business development, from providing 
      access to markets to building adequate teams to raising capital.</h3>
   </div>
 </div>
 }
}

export default Home;