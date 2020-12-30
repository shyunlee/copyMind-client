import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {Nav} from '../components'
import {actionListupCopies, actionGetUserInfo, actionLogout, URL} from '../actions'

axios.defaults.withCredentials=true;


const mapStateToProps = state => {
    return {
        isLogin:state.loginReducer.isLogin,
        userInfo:state.myProfileReducer.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCopyList:(pathName) => {
            axios.post(`${URL}/copy/getcopy`,{pathName}, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log(res)
                dispatch(actionListupCopies(res.data.result))
            })
        },

        getUserInfo: () => {
            axios.get(`${URL}/user/userinfo`)
            .then(res => {
                console.log('Nav-getUserInfo', res.data)
                dispatch(actionGetUserInfo(res.data))
            })
        },

        getBookmarkList: () => {
            axios.get(`${URL}/user/bookmark`)
            .then(res => {
                console.log('Nav-getBookmarkList', res)
                dispatch(actionListupCopies(res.data.result))
            })
        },

        getMyPostingList: () => {
            axios.get(`${URL}/user/myposting`)
            .then(res => {
                console.log('Nav-getMyPostingList',res)
                dispatch(actionListupCopies(res.data.result))
            })
        },

        logoutHandler: () => {
            axios.post(`${URL}/sign/signout`)
            .then(res=> {
                if (res.data.message === 'successfully log-out!') {
                    dispatch(actionLogout(false))
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
