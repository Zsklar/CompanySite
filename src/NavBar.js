import React from 'react';
import Content from './Content'
import styles from './style.module.css'

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
                
                  <button onClick={() => {this.setState({page: "home"})}} className={styles.button}>Home</button>                 
                  <button onClick={() => {this.setState({page: "about"})}} className={styles.button}>About Us</button>
                  <button onClick={() => {this.setState({page: "contact"})}} className={styles.button}>Contacts</button>
           
              </div>
              <Content page={this.state.page}/>
          </div>
  }
}

export default NavBar