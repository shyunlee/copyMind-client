import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'
import axios from 'axios'
import {URI} from '../actions'
import './style/nav.css'
import Logo from '../images/copymind_logo.png'


class Nav extends Component {
    state = {
        isToggleOn:false
    }
    constructor (props) {
        super(props)

        this.count=0;
    }

    async getAccessToken (authorizationCode) {
        if(authorizationCode.length === 20){
          await axios.post(`${URI}/oauth/github`,{authorizationCode:authorizationCode},{withCredentials:true})
          .then(result =>{
          if(result.data.message === 'ok'){
            this.props.oauthLogin(true)
            // this.modalClose('login')
            }
          })
        }else {
          await axios.post(`${URI}/oauth/google`,{authorizationCode:authorizationCode},{withCredentials:true})
          .then(result =>{
          if(result.data.message === 'ok'){
            this.props.oauthLogin(true)
            // this.modalClose('login')
            }
          })
        }
      }
    
      componentDidMount(){
        const url = new URL(window.location.href)
        const authorizationCode = url.searchParams.get('code')
        if (authorizationCode) {
          this.getAccessToken(authorizationCode)
        }
      }

    toggleChange () {
        this.setState({isToggleOn:!this.state.isToggleOn})
    }

     async actionTest () {
        console.log('action', await this.props.getCopyList('novel'))
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <NavLink activeClassName = "logo" to='/'>
                        <img class ="logo-img" src={Logo} alt="CopyMind Logo"/>
                    </NavLink>
                </div>
                <div className="navbar-menu-box">
                    < ul className="navbar-menu">
                        {this.props.menu.map(el => {
                            let lowerLetter = el.toLowerCase()
                            this.count++
                            return (
                                <li key={this.count}>
                                    <NavLink to={lowerLetter} onClick={() => {this.actionTest()}}>{el}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                    <div className='navbar-menu-container'>
                        {this.props.isLogin
                        ?
                        <NavMyPage
                            toggleChange={this.toggleChange.bind(this)}
                            isToggleOn={this.state.isToggleOn}
                            getUserInfo={this.props.getUserInfo}
                            getBookmarkList={this.props.getBookmarkList}
                            getMyPostingList={this.props.getMyPostingList}
                            logoutHandler={this.props.logoutHandler}
                            modalOpen={this.props.modalOpen}
                        />
                        :
                        <NavLogin modalOpen={this.props.modalOpen}/>
                        }
                    </div>
            </nav>
        );
    }
}
     
function NavLogin (props) {
    return (
        <ul className='nav-login'>
            <li className='nav-li'><NavLink activeClassName='login' to="#" onClick={() => {props.modalOpen('login')}}>Login</NavLink></li>
            <li className='nav-li'><NavLink activeClassName='signup' to="#" onClick={() => {props.modalOpen('signup')}}>Signup</NavLink></li>
        </ul>
    )
}

// function NavMyPage (props) {
//     return (
//         <div className='mypage-control'>
//             <NavLink activeClassName='mypage' to="#"  onClick={props.toggleChange}>My Page</NavLink>
//             {/* <div className={props.isToggleOn?'mypage active':'mypage'}> */}
//             <div className='mypage-hover'>
//                 <ul className='mypage-list'>
//                     <li><Link to='#' onClick={() => {
//                         props.getUserInfo()
//                         props.modalOpen('myprofile')
//                     }}>My Profile</Link></li>
//                     <li><Link to='/bookmark' onClick={() => {
//                         props.getBookmarkList()
//                     }}>Bookmark</Link></li>
//                     <li><Link to='/myposting' onClick={() => {
//                         props.getMyPostingList()
//                     }}>My Posting</Link></li>
//                     <li><Link to='/' onClick={() => {
//                         props.logoutHandler()
//                     }}>Logout</Link></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

function NavMyPage (props) {
    return (
        <>
            <NavLink activeClassName='mypage' to="#"  onClick={props.toggleChange}>My Page</NavLink>
            {/* <div className={props.isToggleOn?'mypage active':'mypage'}> */}
            <div className='mypage-hover'>
                <ul className='mypage-list'>
                    <li><Link to='#' onClick={() => {
                        props.getUserInfo()
                        props.modalOpen('myprofile')
                    }}>My Profile</Link></li>
                    <li><Link to='/bookmark' onClick={() => {
                        props.getBookmarkList()
                    }}>Bookmark</Link></li>
                    <li><Link to='/myposting' onClick={() => {
                        props.getMyPostingList()
                    }}>My Posting</Link></li>
                    <li><Link to='/' onClick={() => {
                        props.logoutHandler()
                    }}>Logout</Link></li>
                </ul>
            </div>
        </>
    )
}



export default Nav;