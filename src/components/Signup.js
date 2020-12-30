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

    const handleChange = (target) => {
        if (target.name === 'email') setEmail(target.value)
        else if (target.name === 'userName') setUserName(target.value)
        else if (target.name === 'password') setPassword(target.value)
        else if (target.name === 'checkPW') setCheckPW(target.value)      
    }


    const signupHandle = () => {
        let userInfo = {email, userName, password}
        console.log(userInfo)
        // if(!email || !password || !userName || !checkPW){
        //     setErrorMessage("모든 항목은 필수입니다.")
        // }else if(password !== checkPW){
        //     setErrorMessage("비밀번호가 맞지않습니다.")
        // }else if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)){
        //     setErrorMessage("이메일 형식이 아닙니다.")
        // }else if(!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/.test(password)){
        //     setErrorMessage("비밀번호 형식이 아닙니다.")
        // } else{
            axios.post(`${URL}/sign/signup`,{email, userName, password},{headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log(res)
                if (res.data.message === 'signup success!') {
                    console.log('work')
                    props.modalClose('signup')
                    props.modalOpen('login')
                }
            })
            .catch(err => console.log(err))
        // }
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