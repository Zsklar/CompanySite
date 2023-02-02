import React from 'react';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import styles from './style.module.css'

class Content extends React.Component {

   render(){
    var con = <Home/>
    if(this.props.page === 'home'){
        con = <Home/>
    } else if(this.props.page === 'about'){
        con = <About/>
    } else if(this.props.page === 'contact'){
        con = <Contact/>
    } else {
        con = <Home/>
    }

    return <div className={styles.content}>
        {con}
    </div>
   } 
}

export default Content