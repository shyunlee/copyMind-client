import {Signup} from '../components'
import {connect} from 'react-redux'
import axios from 'axios'
import {actionSignUp,actionSignUpErrorMassage} from '../actions'
axios.defaults.withCredentials=true;


const mapStateToProps = (state) => {
    return {
        signup:state.signupHandler.signup,
        errorMessage: state.signupHandler.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupHandle:(userInfo) => {
            const {Email, Name, Password, checkPW} = userInfo
            // console.log(userInfo)
            // console.log(Email,Name,Password,checkPW)
            if(!Email || !Password || !Name || !checkPW){
                dispatch(actionSignUpErrorMassage("모든 항목은 필수입니다."))
            }else if(Password !== checkPW){
                dispatch(actionSignUpErrorMassage("비밀번호가 맞지않습니다."))
            }else if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(Email)){
                dispatch(actionSignUpErrorMassage("이메일 형식이 아닙니다."))
            }else if(!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/.test(Password)){
                dispatch(actionSignUpErrorMassage("비밀번호 형식이 아닙니다."))
            }
            else{
            axios.post('http://localhost:8080/sign/signup',{Email:Email, Name:Name, Password:Password},{headers:{'Content-Type':'applications/json'}})
                .then(res => {
                if(res){
                    dispatch(actionSignUp(true))      
                }

            })
            .catch(err => console.log(err))
            }

            
        }
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Signup)