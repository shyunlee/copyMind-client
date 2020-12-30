import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {PostCopy,Signup, MyProfile, Login } from './components'
import {_Main, _ListCopy, _ViewCopy, _Nav} from './containers'

class App extends React.Component {
  state={
    menu:['Novel', 'Essay', 'Quotes', 'Poem'],
    isMyProfileOpen:false,
    isLoginOpen:false,
    isSignupOpen:false
  }

  modalOpen (value) {
    if (value === 'login') this.setState({isLoginOpen:true})
    else if (value === 'signup') this.setState({isSignupOpen:true})
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
      <div>
        <div className='header'>
          <_Nav menu={this.state.menu} modalOpen={this.modalOpen.bind(this)} />
        </div>
        <div className='main'>
          {
          this.state.isMyProfileOpen?
          (<MyProfile modalClose={this.modalClose.bind(this)} />)
          :
          (this.state.isLoginOpen?
            (<Login modalClose={this.modalClose.bind(this)} modalOpen={this.modalOpen.bind(this)}/>)
            :(this.state.isSignupOpen?
            (<Signup modalClose={this.modalClose.bind(this)} modalOpen={this.modalOpen.bind(this)}/>)
            :
            <Switch>
              <Route path={menuPath.concat('/myposting', '/bookmark')} component={_ListCopy} />
              <Route path='/view' component={_ViewCopy}/>
              <Route path='/post' component={PostCopy} history={this.props.history}/>
              <Route path='/' component={_Main} />
            </Switch>))
          }
        </div>
        <div className='footer'>
          
        </div>
      </div>
    );
  } 
}

export default App;
