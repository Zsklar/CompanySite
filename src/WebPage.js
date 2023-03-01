import React from 'react';
import NavBar from './Desktop/NavBar';
import NavBarMobile from './Mobile/NavBar'
import {BrowserView, MobileView} from 'react-device-detect';

class WebPage extends React.Component {
  render() {
    return <div>
      <BrowserView>
        <NavBarMobile/>
      </BrowserView>

      <MobileView>
        <NavBarMobile/>
      </MobileView>
    </div>
  }
}

export default WebPage;