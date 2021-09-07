import React from 'react';
import {useDetectOutsideClick} from '../useDetectOutsideClick'
import styles from './style/myProfile.module.css'

const MyProfile = (props) => {
    let myProfile = props.userInfo
    

    const myProfileModalRef = React.useRef(null)
    useDetectOutsideClick(myProfileModalRef, () => {props.modalClose('myprofile')})


    return (
        <div className={styles.container} ref={myProfileModalRef}>
            <div className={styles.info_box}>
                <div className={styles.line_container}>
                    <span className={styles.userInfo}>User Name: {myProfile.userName}</span>
                    <span className={styles.userInfo}>Email : {myProfile.email}</span>
                </div>
                <div className={styles.line_container}>
                    <span className={styles.userInfo}>Bookmark Count: {myProfile.bookmarkCount}</span>
                    <span className={styles.userInfo}>Posting Count:{myProfile.postingCount}</span>
                </div>
            </div>
            <input className={styles.btn_close} type="button" onClick={() => props.modalClose('myprofile')} value="Close"/>
        </div>
    );
}

export default MyProfile;