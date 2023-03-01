import React from 'react';
import Content from './Content'
import styles from './style.module.css'
import logo from '../Images/Logo-Color-Textless.png';

class NavBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 'home'
    }

  }

  render() {
    return <div>
              <div className={styles.navbar}> 
              <img className={styles.navbarLogo} src={logo} alt="logo"></img>
              <h2 className={styles.navTitle}>Ruatan Capital</h2>            
              <div className={styles.buttonList}>
                  <button onClick={() => {this.setState({page: "home"})}} className={styles.button}>Home</button>                 
                  <button onClick={() => {this.setState({page: "about"})}} className={styles.button}>About Us</button>
                  <button onClick={() => {this.setState({page: "team"})}} className={styles.button}>Our Team</button>
                  <button onClick={() => {this.setState({page: "contact"})}} className={styles.button}>Careers</button>

                </div>
              </div>
              <Content page={this.state.page}/>
          </div>
  }
}

export default NavBar