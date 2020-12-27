import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class MyPage extends Component {
    render() {
        return (
            <div className='mypage'>
                <p><Link to='/myprofile' onClick={this.props.getUserInfo}>My Profile</Link></p>
                <p><Link to='/bookmark' onClick={this.props.getBookmarkList}>Bookmark</Link></p>
                <p><Link to='/myposting' onClick={this.props.getMyPostingList}>My Posting</Link></p>
                <p><Link to='/' onClick={this.props.logoutHandler}>Logout</Link></p>
            </div>
        );
    }
}

export default MyPage;