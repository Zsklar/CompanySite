import React from 'react';
import Content from './Content'

class NavBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 'home'
    }

  }

  render() {
    return <div>
              <ul>
                <button onClick={() => {this.setState({page: "home"})}}>Home</button>
                <button onClick={() => {this.setState({page: "about"})}}>About Us</button>
                <button onClick={() => {this.setState({page: "contact"})}}>Contact Us</button>
              </ul> 
              <Content page={this.state.page}/>
          </div>
  }
}

export default NavBar