import { connect } from 'react-redux'
import {Login} from '../components'
import axios from 'axios'
axios.defaults.withCredentials=true;

const mapDispatchToProps = (dispatch) => {
    
    return{
        login : (userInfo) => {        
            axios.post("http://localhost:8080/sign/signin",userInfo,{headers:{'Content-Type': 'applications/json'}})
            .then(data =>{ 
                console.log(data)
                if(data.message === 'ok'){
                    dispatch({type:'LOGIN', isLogin:!false})
                }
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(Login)