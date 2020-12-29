import { connect } from 'react-redux'
import {Login} from '../components'
import axios from 'axios'
import {actionLogin, URL} from '../actions'
axios.defaults.withCredentials=true;

const mapStateToProps = (state) => {
    return {
        isLogin:state.loginReducer.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return{
        loginHandler : (userInfo) => {
            axios.post(`${URL}/sign/signin`,userInfo,{headers:{'Content-Type': 'application/json'}})
            .then(res =>{ 
                // console.log(data)
                if(res.data.message === 'ok'){
                    dispatch(actionLogin(true))
                }
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)