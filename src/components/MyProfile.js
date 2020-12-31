import React, { useEffect, useState } from 'react';
import {useDetectOutsideClick} from '../useDetectOutsideClick'

const MyProfile = (props) => {
    let myProfile = props.userInfo
    

    const myProfileModalRef = React.useRef(null)
    useDetectOutsideClick(myProfileModalRef, () => {props.modalClose('myprofile')})


    return (
        <div className='myprofile' ref={myProfileModalRef}>
            <p>user name: {myProfile.userName}</p>
            <p>email : {myProfile.email}</p>
            <p>bookmarkCount: {myProfile.bookmarkCount}</p>
            <p>postCount:{myProfile.postingCount}</p>
            <input type="button" onClick={() => props.modalClose('myprofile')} value="Close"/>
        </div>
    );
}

export default MyProfile;