import React, { Component } from 'react';
import Content from './Content'
import styles from './style.module.css'
import logo from '../Images/Logo-Color-Textless.png';
import Sidebar from 'react-sidebar';

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
            </div>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: 'white', width: '100%', zIndex: 2 } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>Toggle Sidebar</button>
         <Content page={this.state.page}/>
      </Sidebar>
    );
  }
}

export default NavBar;