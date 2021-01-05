import React from 'react';
import {useDetectOutsideClick} from '../useDetectOutsideClick'

const MyProfile = (props) => {
    let myProfile = props.userInfo
    

    const myProfileModalRef = React.useRef(null)
    useDetectOutsideClick(myProfileModalRef, () => {props.modalClose('myprofile')})


    return (
        <div className='myprofile' ref={myProfileModalRef}>
            <p className='profile-userInfo'>user name: {myProfile.userName}</p>
            <p className='profile-userInfo'>email : {myProfile.email}</p>
            <p className='profile-userInfo'>bookmarkCount: {myProfile.bookmarkCount}</p>
            <p className='profile-userInfo'>postCount:{myProfile.postingCount}</p>
            <input className='close' type="button" onClick={() => props.modalClose('myprofile')} value="Close"/>
        </div>
    );
}

export default MyProfile;