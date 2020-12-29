import {connect} from 'react-redux'
import axios from 'axios'
import {Nav} from '../components'
import {actionListupCopies, actionGetUserInfo, URL} from '../actions'

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
                dispatch(actionListupCopies(res.result))
            })
        },

        getUserInfo: () => {
            axios.get(`${URL}/user/userinfo`)
            .then(res => {
                console.log(res)
                dispatch(actionGetUserInfo(res))
            })
        },

        getBookmarkList: () => {
            axios.get(`${URL}/user/bookmark`)
            .then(res => {
                console.log(res)
                dispatch(actionListupCopies(res.result))
            })
        },

        getMyPostingList: () => {
            axios.get(`${URL}/user/myposting`)
            .then(res => {
                console.log(res)
                dispatch(actionListupCopies(res.result))
            })
        },

        logoutHandler: () => {
            axios.post(`${URL}/sign/signout`)
            .then(res=> {
                console.log(res)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
