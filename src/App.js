import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {Main, ListCopy, ViewCopy, PostCopy, Login, Signup, MyProfile, Nav } from './components'

class App extends React.Component {
  state={
    menu:['Novel', 'Essay', 'Quotes', 'Poem']
  }
  render () {
    let menuPath = this.state.menu.map(el => '/'.concat(el.toLowerCase()))
   return (
      <div>
        <div className='header'>
          <Nav menu={this.state.menu}/>
        </div>
        <div className='main'>
            <Switch>
              <Route path='/' component={Main} />
              <Route path={menuPath.concat('/myposting', '/bookmark')} component={ListCopy} />
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/myprofile' component={MyProfile}/>
              <Route path='/view' component={ViewCopy}/>
              <Route path='/post' component={PostCopy}/>
            </Switch>
        </div>
        <div className='footer'>
          
        </div>
      </div>
    );
  } 
}

export default App;