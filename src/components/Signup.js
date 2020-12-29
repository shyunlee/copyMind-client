import React, {useState} from 'react';
import {useDetectOutsideClick} from '../useDetectOutsideClick'
import './style/signup.css'
import {URL} from '../actions'
import axios from 'axios'
axios.defaults.withCredentials=true;

const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [checkPW, setCheckPW] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    let userInfo = {email, userName, password, checkPW}


    const handleChange = (target) => {
        switch(target.name) {
            case 'email' :
                setEmail(target.value)
            case 'userName':
                setUserName(target.value)
            case 'password':
                setPassword(target.value)
            case 'checkPW':
                setCheckPW(target.value)
        }
    }


    const signupHandle = () => {

        if(!email || !password || !userName || !checkPW){
            setErrorMessage("모든 항목은 필수입니다.")
        }else if(password !== checkPW){
            setErrorMessage("비밀번호가 맞지않습니다.")
        }else if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)){
            setErrorMessage("이메일 형식이 아닙니다.")
        }else if(!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/.test(password)){
            setErrorMessage("비밀번호 형식이 아닙니다.")
        } else{
            axios.post(`${URL}/sign/signup`,{email, userName, password},{headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log(res)
            if(res.data.message === 'signup success!'){
                props.modalClose('signup')
                props.modalOpen('login')
            }
        })
        .catch(err => console.log(err))
        }
    }

    const signupModalRef = React.useRef(null)
    useDetectOutsideClick(signupModalRef, () => props.modalClose('signup'))

    return (
        <div ref={signupModalRef}>
            <input id="signup_email" type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e.target)}/>

            <input id="signup_username" type="text" placeholder="User Name" name="userName" onChange={(e) => handleChange(e.target)}/> 
            
            <input id="signup_pw" type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e.target)}/> 

            <input id="signup_confirmPW" type="password" placeholder="Confirm Password" name="checkPW" onChange={(e) => handleChange(e.target)}/>

            <button id="signup_button" onClick={signupHandle}>Signup</button>
            {errorMessage?<div className="alert-box">{errorMessage}</div>:null}
        </div>
    )
};

export default Signup;