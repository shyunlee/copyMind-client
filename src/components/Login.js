import React from 'react'
import './style/login.css'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {URI, actionLogin} from '../actions'
import axios from 'axios'
import {useDetectOutsideClick} from '../useDetectOutsideClick'
axios.defaults.withCredentials=true


export default function Login(props)  {
        const [inputs, setInputs] = useState({
            email:'',
            password:''
        })
        const [message, setMessage] = useState("")
        const dispatch = useDispatch()
        const {email, password} = inputs

        const history = useHistory()

        const onChange = (e) => {
            let {name, value} = e.target
            value = value.replace(/</g, '&lt')
            value = value.replace(/>/g, '&gt')
            setInputs({...inputs, [name]:value})
        }

        const loginHandler = (postData) => {
            axios.post(`${URI}/sign/signin`,postData,{headers:{'Content-Type': 'application/json'}})
            .then(res =>{ 
                if(res.data.message === 'ok'){
                    dispatch(actionLogin(true))
                    props.modalClose('login')
                    history.push('/')
                }
            })
            .catch(err => {
                if(err.response){
                    if(err.response.data.message === 'user not found'){
                        setMessage('사용자 회원이 아닙니다.')
                    }else if(err.response.data.message === ''){
                        setMessage('비밀번호가 틀렸습니다.')
                    }else{
                        setMessage('서버와 연결이 끊겼습니다.')
                    }
                }
            })
        }

        const githubOnClick = () => {
            const GITHUB_LOGIN_URL = 'https://github.com/login/oauth/authorize?client_id=b1675a244a579e33bfa0'
            window.location.assign(GITHUB_LOGIN_URL)
        }

        const onGoogleClick = () => {
            const GOOGLE_LOGIN_URL =
            `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=882123656556-4ngn8uqd2jhummvjl92ioq0a011dsmom.apps.googleusercontent.com&scope=openid%20email&redirect_uri=http://localhost:3000`
            window.location.assign(GOOGLE_LOGIN_URL)
        }

        const loginModalRef = React.useRef(null)
        useDetectOutsideClick(loginModalRef, () => {props.modalClose('login')})


        return(
            <div id="loginInfo-background">
            <div id="loginInfo-border" ref={loginModalRef}>
                <button onClick={() => {props.modalClose('login')}}>Close</button>
                <div id="input">
                    <div>
                        <input type= "email" id='email' name='email' placeholder="Email" value={email} onChange={onChange}/>
                    </div>
                    <div>
                        <input type= "password" id='pw' name='password' placeholder="Password" value={password} onChange={onChange}/>
                    </div>
                </div>
                <div style={{textAlign:'center'}}>{message}</div>
                <div className="buttons">
                    <div id="LoginButton1" onClick={()=>{loginHandler(inputs)}}>
                        <span>Login</span>
                        <span>Login</span>
                    </div>
                    <div id="LoginButton2"
                    onClick={()=>{loginHandler(inputs)}}>
                        LOG IN
                    </div>
                    <div id="__SignUp__">
                        <input type="submit" id="SignUp3" value="SignUp"
                        onClick={() => {
                            props.modalClose('login')
                            props.modalOpen('signup')
                        }}
                        />
                        <input  type="submit"  className="SignUp1"  value="SignUp" id="SignUp"/>
                    </div>
                </div>
                <div id="oauth-button">
                    <a href="#" className="btn btn-google-plus"
                    onClick={
                        () => {onGoogleClick()}
                    }>
                        <i className="fa fa-google-plus"></i>  Sign in with Google+</a>
                    <button id="OAuth-Github"
                    onClick={
                        ()=>{githubOnClick()}
                    }
                    >LOGIN WITH GITHUB</button>
                </div>
            </div>
        </div>
        )
}