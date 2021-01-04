import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {Nav} from '../components'
import {actionListupCopies, actionGetUserInfo, actionLogin, actionLogout, URI} from '../actions'

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
            axios.post(`${URI}/copy/getcopy`,{pathName}, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log(res)
                dispatch(actionListupCopies(res.data.result))
            })
        },

        getUserInfo: () => {
            axios.get(`${URI}/user/userinfo`)
            .then(res => {
                console.log('Nav-getUserInfo', res.data)
                dispatch(actionGetUserInfo(res.data))
            })
        },

        getBookmarkList: () => {
            axios.get(`${URI}/user/bookmark`)
            .then(res => {
                console.log('Nav-getBookmarkList', res)
                dispatch(actionListupCopies(res.data.result))
            })
        },

        getMyPostingList: () => {
            axios.get(`${URI}/user/myposting`)
            .then(res => {
                console.log('Nav-getMyPostingList',res)
                dispatch(actionListupCopies(res.data.result))
            })
        },

        logoutHandler: () => {
            axios.post(`${URI}/sign/signout`)
            .then(res=> {
                if (res.data.message === 'successfully log-out!') {
                    dispatch(actionLogout(false))
                }
            })
        },

        oauthLogin: () => {
            dispatch(actionLogin(true))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
