import React from 'react';
import {useStore} from 'react-redux'
import {useDetectOutsideClick} from '../useDetectOutsideClick'

const MyProfile = (props) => {
       const store = useStore()
       console.log(store)
       const state = store.getState()
       console.log(state)
       const userInfo = state.myProfileReducer.userInfo
       const myProfileModalRef = React.useRef(null)
       useDetectOutsideClick(myProfileModalRef, () => {props.modalClose('myprofile')})

        return (
            <div className='myprofile' ref={myProfileModalRef}>
                <p>user name: {userInfo.userName}</p>
                <p>email : {userInfo.email}</p>
                <p>bookmarkCount: {userInfo.bookmarkCount}</p>
                <p>postCount:{userInfo.postCount}</p>
                <input type="button" onClick={() => props.modalClose('myprofile')} value="Close"/>
            </div>
        );
}

export default MyProfile;