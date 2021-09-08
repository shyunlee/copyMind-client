import {connect} from 'react-redux'
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
        getCopyList: (pathName) => {
            return axios.post(`${URI}/copy/getcopy`,{pathName}, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                dispatch(actionListupCopies(res.data.result))
                return res.data.result
            })
        },
        
//application/x-www-form-urlencoded
        getUserInfo: () => {
            axios.get(`${URI}/user/userinfo`, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.id) {
                    dispatch(actionLogin(true))
                    dispatch(actionGetUserInfo(res.data))
                } 
            })
        },

        getBookmarkList: () => {
            axios.get(`${URI}/user/bookmark`)
            .then(res => {
                dispatch(actionListupCopies(res.data.result))
            })
        },

        getMyPostingList: () => {
            axios.get(`${URI}/user/myposting`)
            .then(res => {
                dispatch(actionListupCopies(res.data.result))
            })
        },

        logoutHandler: () => {
            axios.post(`${URI}/sign/signout`,{message: null}, {headers:{'Content-Type':'application/json'}})
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
