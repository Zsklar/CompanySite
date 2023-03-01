import React from 'react'
import styles from './style.module.css'
import IlanHeadshot from '../Images/IlanHeadshot.jpg';
import ZachHeadshot from '../Images/ZachHeadshot.jpg';
import RayHeadshot from '../Images/RayHeadshot.jpg';
import Fade from '@successtar/react-reveal/Fade';
import linkedIn from '../Images/linkedIn.png';
import Telegram from '../Images/Telegram.png';
import emailIcon from '../Images/emailIcon.png';




class Team extends React.Component{
 render(){
   return <div className={styles.teamBlock}>
   <h2 className={styles.teamTitle}> Our Team</h2>
   <div className={styles.teamMethodCon2}>
      <div className={styles.teamMethodBar}></div>
   </div>
   <div className={styles.teamProf}>
      <div className={styles.profContainerLeft}>
         <Fade left>
         <img className={styles.teamImg} src={IlanHeadshot} alt="Ilan"></img>
         </Fade>
         <h3 className={styles.teamBody}>Ilan Katz</h3>
         <h3 className={styles.teamPosition}>Head of Systematic Trading, Venture Capital </h3>
         <div className={styles.contactBlock}>
            <a href="https://www.linkedin.com/in/ilan-katz-66234b135/" target="_blank" rel="noopener noreferrer">
               <img  className={styles.linkedInIcon} src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://t.me/ilankatz" target="_blank" rel="noopener noreferrer">
               <img  className={styles.telegramIcon} src={Telegram} alt="Telegram" />
            </a>
            <a href="mailto:ilan@ruatancapital.com" target="_blank" rel="noopener noreferrer">
               <img  className={styles.emailIcon} src={emailIcon} alt="Email" />
            </a>
         </div>
      </div>
      <h3 className={styles.teamBio}>Ilan started in the web3 space as an analyst and data scientist at Radkl. There, he discovered two things: the first, that there was a ton of space for new crypto traders, and the second, that he had no skills in directional investing. With those lessons in mind, he started developing automated trading bots, starting from simple arbitrages and getting more sophisticated over time. Those bots became the basis for Ruatan Capital. Since then, Ilan has focused more on raising money and the new Venture side of Ruatan Capital. Ilan has a degree in Economics from the University of Maryland.</h3>
   </div>
   <div className={styles.teamProf}>
      
      <h3 className={styles.teamBio2}>After getting a degree in Computer Science and Economics from the University of Maryland, Zach left the tech world to go into finance. At that time, Zach's then-roommate, Ilan, had some interesting trading ideas and no ability to build out infrastructure. Zach quickly set up node infrastructure, set up AWS-hosted testing, and built critical blockchain infrastructure. After proving to be particularly adept at analyzing potential investments, he joined the Venture team.</h3>
      <div className={styles.profContainerRight}>
         <Fade right>
         <img className={styles.teamImg2} src={ZachHeadshot} alt="Zach"></img>
         </Fade>
         <h3 className={styles.teamBody}>Zach Sklar</h3>
         <h3 className={styles.teamPosition}>CTO, Venture Capital lead</h3>
         <div className={styles.contactBlock}>
            <a href="https://www.linkedin.com/in/zach-sklar/" target="_blank" rel="noopener noreferrer">
               <img  className={styles.linkedInIcon} src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
               <img  className={styles.telegramIcon} src={Telegram} alt="Telegram" />
            </a>
            <a href="mailto:zach@ruatancapital.com" target="_blank" rel="noopener noreferrer">
               <img  className={styles.emailIcon} src={emailIcon} alt="Email" />
            </a>
         </div>
      </div>
   </div>
   <div className={styles.teamProf}>
      <div className={styles.profContainerLeft}>
         <Fade left>
         <img className={styles.teamImg} src={RayHeadshot} alt="Ray"></img>
         </Fade>
         <h3 className={styles.teamBody}>Ray Katz</h3>
         <h3 className={styles.teamPosition}>Lead Software Engineer</h3>
         <div className={styles.contactBlock}>
            <a href="https://www.linkedin.com/in/raphael-katz-a65120208/" target="_blank" rel="noopener noreferrer">
               <img  className={styles.linkedInIcon} src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://t.me/zaphim12" target="_blank" rel="noopener noreferrer">
               <img  className={styles.telegramIcon} src={Telegram} alt="Telegram" />
            </a>
            <a href="mailto:ray@ruatancapital.com" target="_blank" rel="noopener noreferrer">
               <img  className={styles.emailIcon} src={emailIcon} alt="Email" />
            </a>
         </div>
      </div>
      <h3 className={styles.teamBio}>Ray has a degree in computer science from the University of Maryland. After landing a job at Yahoo, Ray joined Ruatan Capital to help solve some of the harder tech problems at the company. This includes doing data analysis, writing smart contracts, setting up off-chain trading bots, building front-ends, building back-ends, debugging, and anything and everything else that needs to get done. Ray also lends his abilities to projects coming in on the Venture side of Ruatan Capital.</h3>
      
   </div>

   {/* <h3 className={styles.teamBody}> Michael Katz </h3> */}
 </div>
 }
}

export default Team;