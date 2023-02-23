import React from 'react'
import styles from './style.module.css'

class About extends React.Component{
 render(){
    return <div className={styles.aboutBlock}>
      <h2 className={styles.aboutTitle}> Our Philosophy</h2>
      <div className={styles.homeMethodCon2}>
         <div className={styles.homeMethodBar}></div>
      </div>
      <h3 className={styles.aboutBody}>
         At Ruatan Capital, we look to increase access to markets for retail and institutional investors by providing better prices, more liquidity, and the tools necessary to compete in the open market.
      </h3>
      <h2 className={styles.aboutTitle2}>Ruatan Liquid</h2>
      <div className={styles.homeMethodCon2}>
         <div className={styles.homeMethodBar}></div>
      </div>
      <h2 className={styles.aboutTitle3}>Market Making</h2>
      <h3 className={styles.aboutBody}>
         Our teams develop and deploy market-neutral strategies that provide liquidity to traders and investors on decentralized and centralized markets. 
         Our strategies include CeFi/CeFi, Defi/CeFi, and DeFi/DeFi arbitrage, including cross-chain informational arbitrage.
      </h3>
      <h2 className={styles.aboutTitle4}>Directional Investing</h2>
      <h3 className={styles.aboutBody}>At this time our team doesn't actively invest in directional strategies, 
         but we do provide research and analyses of protocols and systems for firms
          and investors who are planning to invest directionally.
         </h3>
      <h2 className={styles.aboutTitle5}>Ruatan Venture</h2>
      <div className={styles.homeMethodCon2}>
         <div className={styles.homeMethodBar}></div>
      </div>
      <h3 className={styles.aboutBody}>Our Venture team are experts in early-stage web3 startups. We use our network and expertise to help founders build teams, make important design decisions, market their products,
          and connect to investors. We also offer entrepreneurs access to our in-house tech team to help them quickly break through roadblocks that require specialized expertise.
      </h3>
    </div>
 }
}

export default About;