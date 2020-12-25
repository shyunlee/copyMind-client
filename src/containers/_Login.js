import { connect } from 'react-redux'
import {Login} from '../components'
import axios from 'axios'
import {actionLogin} from '../actions'
axios.defaults.withCredentials=true;

const mapStateToProps = (state) => {
    return {
        isLogin:state.loginHandler.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return{
        login : (userInfo) => {
            axios.post("http://localhost:8080/sign/signin",userInfo,{headers:{'Content-Type': 'applications/json'}})
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