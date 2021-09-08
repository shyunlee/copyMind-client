import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {URI, actionLogin, updateBookmarkList} from '../actions'
import axios from 'axios'
import {useDetectOutsideClick} from '../useDetectOutsideClick'
import styles from './style/login.module.css'

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
                console.log('login', res)
                if(res.data.message === 'ok'){
                    dispatch(actionLogin(true))
                    dispatch(updateBookmarkList(res.data.bookmarkList))
                    props.modalClose('login')
                    history.push('/')
                }
            })
            .catch(err => {
                if(err.response){
                    if(err.response.data.message === 'user not found'){
                        setMessage('The username and/or password you specified are not correct.')
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
            `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=882123656556-4ngn8uqd2jhummvjl92ioq0a011dsmom.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=http://copymind.ga:8080`
            window.location.assign(GOOGLE_LOGIN_URL)
        }

        const loginModalRef = React.useRef(null)
        useDetectOutsideClick(loginModalRef, () => {props.modalClose('login')})


        return(
            <div className={styles.loginInfo_background}>
                <div className={styles.login_border} ref={loginModalRef}>
                    <div className={styles.loginClose}>
                        <button className={styles.modalClose} onClick={() => {props.modalClose('login')}}>X</button>
                    </div>
                    <div className={styles.input_box}>
                        <div>
                            <input type= "email" className={styles.email} name='email' placeholder="Email" value={email} onChange={onChange}/>
                        </div>
                        <div>
                            <input type= "password" className={styles.password} name='password' placeholder="Password" value={password} onChange={onChange}/>
                        </div>
                    </div>
                    {message ? <div className={styles.message}>{message}</div> : ''}
                    <div className={styles.button_box}>
                        <div className={styles.login_button} onClick={()=>{loginHandler(inputs)}}>
                            Login
                        </div>
                        <div  className={styles.signup_button}  onClick={() => {
                            props.modalClose('login')
                            props.modalOpen('signup')
                        }}>Sign Up</div>                        
                        <div className={styles.authLogin_box}>
                            <button className={styles.auth_button} onClick={() =>{onGoogleClick()}}>
                                Sign In With Google
                            </button>
                            <button className={styles.auth_button} onClick={ ()=>{githubOnClick()}}>
                                Sign In With Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
}