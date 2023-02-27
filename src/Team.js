import React from 'react'
import styles from './style.module.css'
import IlanHeadshot from './Images/IlanHeadshot.jpg';
import ZachHeadshot from './Images/ZachHeadshot.jpg';
import RayHeadshot from './Images/RayHeadshot.jpg';

class Team extends React.Component{
 render(){
   return <div className={styles.teamBlock}>
   <h2 className={styles.teamTitle}> Our Team</h2>
   <div className={styles.teamMethodCon2}>
      <div className={styles.teamMethodBar}></div>
   </div>
   <div className={styles.teamProf1}>
      <img className={styles.teamImg} src={IlanHeadshot} alt="Ilan"></img>
      <h3 className={styles.teamBio}>Bio</h3>
      <h3 className={styles.teamBody}>Ilan Katz</h3>
   </div>
   <div className={styles.team1}>
      <img className={styles.teamImg2} src={ZachHeadshot} alt="Zach"></img>
      <h3 className={styles.teamBio2}>Bio</h3>
      <h3 className={styles.teamBody2}>Zach Sklar</h3>
   </div>
   <div className={styles.team1}>
      <img className={styles.teamImg} src={RayHeadshot} alt="Ray"></img>
      <h3 className={styles.teamBio}>Bio</h3>
      <h3 className={styles.teamBody}>Ray Katz</h3>
   </div>

   <h3 className={styles.teamBody}> Michael Katz </h3>
 </div>
 }
}

export default Team;