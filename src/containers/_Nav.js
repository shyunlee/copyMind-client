import {connect} from 'react-redux'
import axios from 'axios'
import {Nav} from '../components'
import {actionListupCopies} from '../actions'

axios.defaults.withCredentials=true;


const mapStateToProps = state => {
    return {
        isLogin:state.loginReducer.isLogin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCopyList:() => {
            axios.get('http://13.209.5.235:8080/copy/getcopy')
            .then(res => {
                console.log(res)
                dispatch(actionListupCopies(res.result))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
