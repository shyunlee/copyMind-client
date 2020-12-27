import {connect} from 'react-redux'
import {MyPage} from '../components'
import {actionGetUserInfo, actionListupCopies} from '../actions'
import axios from 'axios'
axios.defaults.withCredentials=true;



const mapStateToProps = state => {
    return {
        userInfo:state.myProfileReducer.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => {
            axios.get('http://13.209.5.235:8080/user/userinfo')
            .then(res => {
                console.log(res)
                dispatch(actionGetUserInfo(res))
            })
        },

        getBookmarkList: () => {
            axios.get('http://13.209.5.235:8080/user/bookmark')
            .then(res => {
                console.log(res)
                dispatch(actionListupCopies(res.result))
            })
        },

        getMyPostingList: () => {
            axios.get('http://13.209.5.235:8080/user/myposting')
            .then(res => {
                console.log(res)
                dispatch(actionListupCopies(res.result))
            })
        },

        logoutHandler: () => {
            axios.post('http://13.209.5.235:8080/sign/signout')
            .then(res=> {
                console.log(res)
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyPage)