import React from 'react';
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import styles from './app.module.css'
import {PostCopy,Signup, Login } from './components'
import {_Main, _ListCopy, _ViewCopy, NavContainer, MyProfileContainer } from './containers'
import backImg2 from './images/img_1.png'
import backImg1 from './images/img_2.png'

axios.defaults.withCredentials=true;

class App extends React.Component {
  state={
    menu:['Novel', 'Essay', 'Quotes', 'Poem'],
    isMyProfileOpen:false,
    isLoginOpen:false,
    isSignupOpen:false,
  }

  modalOpen (value) {
    if (value === 'login') this.setState({isLoginOpen:true, isSignupOpen:false})
    else if (value === 'signup') this.setState({isSignupOpen:true, isLoginOpen:false})
    else if (value === 'myprofile') this.setState({isMyProfileOpen:true})
  }

  modalClose (value) {
    if (value === 'login') this.setState({isLoginOpen:false})
    else if (value === 'signup') this.setState({isSignupOpen:false})
    else if (value === 'myprofile') this.setState({isMyProfileOpen:false})
  }


  render () {
    let menuPath = this.state.menu.map(el => '/'.concat(el.toLowerCase()))
 
    return (
      <div className={styles.app}>
         {
            this.state.isMyProfileOpen?
            (<MyProfileContainer modalClose={this.modalClose.bind(this)} />)
            :
            (
              this.state.isLoginOpen?
              (<Login modalClose={this.modalClose.bind(this)} modalOpen={this.modalOpen.bind(this)}/>)
              :(this.state.isSignupOpen?
              (<Signup modalClose={this.modalClose.bind(this)} modalOpen={this.modalOpen.bind(this)}/>)
              :''))}
          <div className={styles.header}>
            <NavContainer menu={this.state.menu} modalOpen={this.modalOpen.bind(this)} modalClose={this.modalClose.bind(this)} />
          </div>
          <div className={styles.main}>
           
              <Switch>
                <Route path={menuPath.concat('/myposting', '/bookmark')} component={_ListCopy} />
                <Route path='/view' component={_ViewCopy}/>
                <Route path='/post' component={PostCopy} history={this.props.history}/>
                <Route path='/' component={_Main} />
              </Switch>
            
            <img className={styles.back_img_1} src={backImg1} alt=""/>
            <img className={styles.back_img_2} src={backImg2} alt=""/>
          </div>
          <div className={styles.footer}>
      
          </div>
      </div>
    );
  } 
}

export default App;
