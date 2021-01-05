import {ViewCopy} from '../components'
import {connect} from 'react-redux'
import {actionGetRandomCopy, updateLikeCount, updateBookmarkList, URI} from '../actions'
import axios from 'axios'
axios.defaults.withCredentials=true;

const mapStateToProps = (state) => {
    return {
        isLogin:state.loginReducer.isLogin,
        viewCopy:state.viewCopyReducer.viewCopy,
        bookmarkList:state.bookmarkListReducer.bookmarkList
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        getRandomCopy:(pathName) => {
            axios.post(`${URI}/copy/getcopy`, {pathName}, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                dispatch(actionGetRandomCopy(res.data.result[0]))
            })
        },

        updateLikeCount: (count) => {
            dispatch(updateLikeCount(count))
        },

        updateBookmarkList: (bookmarkList) => {
            dispatch(updateBookmarkList(bookmarkList))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCopy)


