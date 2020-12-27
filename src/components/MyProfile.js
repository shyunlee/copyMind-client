import React from 'react';
import {useStore} from 'react-redux'

const MyProfile = (props) => {
       const store = useStore()
       console.log(store)
       const state = store.getState()
       console.log(state)
       const userInfo = state.myProfileReducer.userInfo
        return (
            <div>
                <p>user name: {userInfo.userName}</p>
                <p>email : {userInfo.email}</p>
                <p>bookmarkCount: {userInfo.bookmarkCount}</p>
                <p>postCount:{userInfo.postCount}</p>
            </div>
        );
}

export default MyProfile;