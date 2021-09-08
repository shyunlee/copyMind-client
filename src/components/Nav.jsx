import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'
import axios from 'axios'
import {URI} from '../actions'
import styles from './style/nav.module.css'
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
          console.log('nav did mount')
        const url = new URL(window.location.href)
        const authorizationCode = url.searchParams.get('code')
        if (authorizationCode) {
          this.getAccessToken(authorizationCode)
        } else {
            this.props.getUserInfo()
        }
      }

    toggleChange () {
        this.setState({isToggleOn:!this.state.isToggleOn})
    }

    async getCopies (category) {
        await this.props.getCopyList(category)
    }

    
    render() {
        return (
            <nav className={styles.navbar}>
                <NavLink className={styles.logo} to='/'>
                    <img className={styles.logo_img} src={Logo} alt="CopyMind Logo"/>
                </NavLink>
                <ul className={styles.navbar_menu}>
                    {this.props.menu.map(el => {
                        let lowerLetter = el.toLowerCase()
                        this.count++
                        return (
                            <li className={styles.menu_item} key={this.count}>
                                <NavLink to={lowerLetter} onClick={() => {this.getCopies(lowerLetter)}}>{el}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <ul className={styles.navbar_controller}>
                    {
                    this.props.isLogin
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
                </ul>
            </nav>
        );
    }
}
     
function NavLogin (props) {
    return (
        <>
            <li className={styles.controller_item}><NavLink activeClassName='login' to="#" onClick={() => {props.modalOpen('login')}}>Login</NavLink></li>
            <li className={styles.controller_item}><NavLink activeClassName='signup' to="#" onClick={() => {props.modalOpen('signup')}}>Signup</NavLink></li>
        </>
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
        <li className={`${styles.controller_item} ${styles.mypage}`}>
            <NavLink to="#"  onClick={props.toggleChange}>My Page</NavLink>
            <div className={styles.mypage_list}>
                <Link to='#' onClick={() => {
                    props.getUserInfo()
                    props.modalOpen('myprofile')
                }}>My Profile</Link>
                <Link to='/bookmark' onClick={() => {
                    props.getBookmarkList()
                }}>Bookmark</Link>
                <Link to='/myposting' onClick={() => {
                    props.getMyPostingList()
                }}>My Posting</Link>
                <Link to='/' onClick={() => {
                    props.logoutHandler()
                }}>Logout</Link>
            </div>
        </li>
    )
}



export default Nav;
