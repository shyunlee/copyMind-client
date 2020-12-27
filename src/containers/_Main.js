import {Main} from '../components'
import {connect} from 'react-redux'
import axios from 'axios'
import {actionGetRandomCopy} from '../actions'
axios.defaults.withCredentials=true;



const mapStateToProps = (state) => {
    return {
        isLogin:state.isLogin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRandomCopy:() => {
            axios.get('http://13.209.5.235:8080/copy/getcopy')
            .then(res => {
                console.log(res)
                dispatch(actionGetRandomCopy(res.result[0]))
            })
        }
    }

}



export default connect (mapStateToProps, mapDispatchToProps)(Main)