import {ViewCopy} from '../components'
import {connect} from 'react-redux'
import {actionGetRandomCopy, URL} from '../actions'
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
        getRandomCopy:() => {
            axios.get(`${URL}/copy/getcopy`)
            .then(res => {
                console.log(res)
                dispatch(actionGetRandomCopy(res.result[0]))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCopy)


