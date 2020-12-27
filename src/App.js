import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {PostCopy,Signup, MyProfile } from './components'
import {_Main, _Login, _ListCopy, _ViewCopy, _Nav, _MyPage} from './containers'

class App extends React.Component {
  state={
    menu:['Novel', 'Essay', 'Quotes', 'Poem']
  }
  render () {
    let menuPath = this.state.menu.map(el => '/'.concat(el.toLowerCase()))
   return (
      <div>
        <div className='header'>
          <_Nav menu={this.state.menu}/>
        </div>
        <div className='main'>
            <Switch>
              <Route path={menuPath.concat('/myposting', '/bookmark')} component={_ListCopy} />
              <Route path='/login' component={_Login}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/myprofile' component={MyProfile}/>
              <Route path='/mypage' component={_MyPage}/>
              <Route path='/view' component={_ViewCopy}/>
              <Route path='/post' component={PostCopy} history={this.props.history}/>
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
