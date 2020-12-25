import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {ViewCopy, PostCopy, MyProfile, Nav } from './components'
import {_Main, _Login, _Signup, _ListCopy} from './containers'
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
              <Route path={menuPath.concat('/myposting', '/bookmark')} component={_ListCopy} />
              <Route path='/login' component={_Login}/>
              <Route path='/signup' component={_Signup}/>
              <Route path='/myprofile' component={MyProfile}/>
              <Route path='/view' component={ViewCopy}/>
              <Route path='/post' component={PostCopy}/>
              <Route path='/' component={_Main} />
            </Switch>
        </div>
        <div className='footer'>
          
        </div>
      </div>
    );
  } 
}

export default App;
