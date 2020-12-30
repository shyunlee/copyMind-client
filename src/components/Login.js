import React from 'react'
import './style/login.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {URL, actionLogin} from '../actions'
import axios from 'axios'
import {useDetectOutsideClick} from '../useDetectOutsideClick'
axios.defaults.withCredentials=true



export default function Login(props)  {
        const [inputs, setInputs] = useState({
            email:'',
            password:''
        })
        const dispatch = useDispatch()
        const {email, password} = inputs

        const onChange = (e) => {
            let {name, value} = e.target
            value = value.replace(/</g, '&lt')
            value = value.replace(/>/g, '&gt')
            setInputs({...inputs, [name]:value})
        }

        const loginHandler = (postData) => {
            axios.post(`${URL}/sign/signin`,postData,{headers:{'Content-Type': 'application/json'}})
            .then(res =>{ 
                if(res.data.message === 'ok'){
                    dispatch(actionLogin(true))
                    props.modalClose('login')
                }
            })
        }

        const loginModalRef = React.useRef(null)
        useDetectOutsideClick(loginModalRef, () => {props.modalClose('login')})

        return(
            <div className="view" >
                <div id="loginInfo" >
                    <div id="loginInfo_border" ref={loginModalRef}>
                        <div id="input">
                            <div>
                                <input type= "email" id='email' name='email' placeholder="Email" value={email} onChange={onChange}/>
                            </div>
                            <div>
                                <input type= "password" id='pw' name='password' placeholder="Password" value={password} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="buttons">
                            <div id="LoginButton1"
                            onClick={()=>{loginHandler(inputs)}}>
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
                                <input  type="submit"  className="SignUp1"  value="SignUp" id="SignUp"
                                    />
                            </div>
                        </div>
                    </div>
                    <div id="oauth-button">
                        <a href="#" className="btn btn-google-plus"><i className="fa fa-google-plus"></i>  Sign in with Google+</a>
                        <input id="OAuth-Github" type="button" value="LOGIN WITH GITHUB" />
                    </div>
                </div>
            </div>
        )
}