import {ViewCopy} from '../components'
import {connect} from 'react-redux'
import {actionGetRandomCopy, updateLikeCount, URI} from '../actions'
import axios from 'axios'
axios.defaults.withCredentials=true;

const mapStateToProps = (state) => {
    return {
        isLogin:state.loginReducer.isLogin,
        viewCopy:state.viewCopyReducer.viewCopy
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        getRandomCopy:(pathName) => {
            axios.post(`${URI}/copy/getcopy`, {pathName}, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log(res)
                dispatch(actionGetRandomCopy(res.data.result[0]))
            })
        },

        updateLikeCount: (count) => {
            dispatch(updateLikeCount(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCopy)


