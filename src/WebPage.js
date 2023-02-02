import React from 'react';
import NavBar from './NavBar';
import {BrowserView, MobileView} from 'react-device-detect';

class WebPage extends React.Component {
  render() {
    return <div>
      <BrowserView>
        <NavBar/>
      </BrowserView>
      <MobileView>
        <h1>YOU ARE ON MOBILE</h1>
      </MobileView>
    </div>
  }
}

export default WebPage;