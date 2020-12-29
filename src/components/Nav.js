import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style/nav.css'


class Nav extends Component {
    state = {
        isToggleOn:false
    }
    constructor (props) {
        super(props)

        this.count=0;
    }

    toggleChange () {
        this.setState({isToggleOn:!this.state.isToggleOn})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to='/'>CopyMind</Link>
                </div>
                < ul className="navbar-menu">
                    {this.props.menu.map(el => {
                        let lowerLetter = el.toLowerCase()
                        this.count++
                        return (
                            <li key={this.count}>
                                <Link to={lowerLetter} onClick={() => {this.props.getCopyList(lowerLetter)}}>{el}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className='navbar-controller'>
                    <NavLogin modalOpen={this.props.modalOpen}/>
                    <NavMyPage
                        toggleChange={this.toggleChange.bind(this)}
                        isToggleOn={this.state.isToggleOn}
                        getUserInfo={this.props.getUserInfo}
                        getBookmarkList={this.props.getBookmarkList}
                        getMyPostingList={this.props.getMyPostingList}
                        logoutHandler={this.props.logoutHandler}
                        modalOpen={this.props.modalOpen}
                    />
                </div>
            </nav>
        );
    }
}
     
function NavLogin (props) {
    return (
        <ul className='nav-login'>
            <li><Link to="#" onClick={() => {props.modalOpen('login')}}>Login</Link></li>
            <li><Link to="#" onClick={() => {props.modalOpen('signup')}}>Signup</Link></li>
        </ul>
    )
}

function NavMyPage (props) {
    return (
        <div className='mypage-control'>
            <Link to="#"  onClick={props.toggleChange}>My Page</Link>
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
        </div>
    )
}



export default Nav;