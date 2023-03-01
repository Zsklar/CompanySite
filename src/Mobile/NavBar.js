import React, { Component } from 'react';
import Content from './Content'
import styles from './style.module.css'
import logo from '../Images/Logo-Color-Textless.png';
import Sidebar from 'react-sidebar';
// import three-menuIcon from '../Images/three-line-menu-icon.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      page: 'home',
    };
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  };

  setPage = (page) => {
    this.setState({ page: page });
    this.onSetSidebarOpen(false);
  };

  render() {
    return (
      <Sidebar 
        sidebar={
          <div>
            <div className={styles.buttonList}>
            <button onClick={() => {this.setState({page: "home", sidebarOpen: false})}} className={styles.button}>Home</button>
            <button onClick={() => {this.setState({page: "about", sidebarOpen: false})}} className={styles.button}>About us</button>
            <button onClick={() => {this.setState({page: "team", sidebarOpen: false})}} className={styles.button}>Our Team</button>
            <button onClick={() => {this.setState({page: "contact", sidebarOpen: false})}} className={styles.button}>Careers</button>

            </div>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: 'white', width: '100%', zIndex: 1000 } }}
      >
        <div className={styles.main}>
          <button style={{background: "none", border:"none"}} onClick={() => this.onSetSidebarOpen(true)}><FontAwesomeIcon icon={faBars} style={{color: "blue",position: "fixed", zIndex: 9, height: "25px", right: 0, marginRight: "10px"}}/></button>
          <img className={styles.navLogo} src={logo} alt="logo"></img>
          <h3 className={styles.navTitle}>Ruatan Capital</h3>
        </div>
         <Content page={this.state.page}/>
         
      </Sidebar>
      
    );
  }
}

export default NavBar;