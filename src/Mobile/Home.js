import React from 'react'
//import Fade from 'react-reveal/Fade';
import styles from './style.module.css'
import banner from '../Images/banner.jpg';
import sky from '../Images/Skyline.jpg';
import ray from '../Images/Ray.jpg';
import Fade from '@successtar/react-reveal/Fade';

class Home extends React.Component{
 render(){
   return <div>
   {/* <Fade cascade> */}
   <img className={styles.homeImg} src={banner} alt="banner"></img>
   <div className={styles.homeBlock}>
      {/* <Fade left> */}
      <h1 className={styles.homeTitle}>At Ruatan Capital</h1>
      {/* </Fade> */}
      <div className={styles.homeMethodCon2}>
         <div className={styles.homeMethodBar}></div>
      </div>
         <h2 className={styles.homeMission}>We're building the best infrastructure for the new world of finance.  
            We're striving to bring anyone with a viable business model to market.
         </h2>
      {/* <Fade right> */}
         <img className={styles.homeImg2} src={sky} alt="logo"></img>
      {/* </Fade> */}
   </div>

   <div className={styles.homeMethodSpan}>

      {/* <Fade bottom> */}
         <h2 className={styles.homeMethodTitle}>Our Methodology</h2>
      {/* </Fade> */}
      <div className={styles.homeMethodCon}>
         <div className={styles.homeMethodBar}></div>
      </div>
      <h3 className={styles.homeMethod}>There are many roadblocks preventing products from getting to market: 
      technology needs, lack of access to financing, regulatory blocks from accessing certain markets, and many others. 
      </h3>
      <h3 className={styles.homeMethod2}>At Ruatan Capital, we're experts at navigating the world of early-stage product and business development, from providing 
      access to markets to building adequate teams to raising capital.</h3>
      <img className={styles.homeMethodImg} src={ray} alt="ray"></img>
   </div>
   {/* </Fade>  */}
   </div>
 }
}

export default Home;