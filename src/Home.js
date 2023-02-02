import React from 'react'
import styles from './style.module.css'

class Home extends React.Component{
 render(){
   return <div>
   <img className={styles.homeImg} src="https://static.wixstatic.com/media/190ac2_104c04aee6ad456abc26dafccaa68eb1~mv2.jpg/v1/fill/w_640,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/190ac2_104c04aee6ad456abc26dafccaa68eb1~mv2.jpg" alt="test"></img>
   <div>
      <h1 className={styles.homeTitle}>At Migdal Hatorah</h1>
      <h2 className={styles.homeMission}>We're building the best infrastructure for the new world of finance.  
         We're striving to bring anyone with a viable business model to market.
      </h2>
   </div>
   <div style={{width: '100%'}}>
      <h3 className={styles.homeMethod}>There are many roadblocks preventing products from getting to market: 
      technology needs, lack of access to financing, regulatory blocks from accessing certain markets, and many others. 
      </h3>
      <h3 className={styles.homeMethod2}>At ___, we're experts at navigating the world of early-stage product and business development, from providing 
      access to markets to building adequate teams to raising capital.</h3>
   </div>
 </div>
 }
}

export default Home;