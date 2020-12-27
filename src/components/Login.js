import React from 'react'
import './style/login.css'


export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Email:'',
            Password:''
        }
    }

    componentDidUpdate(){
        if(this.props.isLogin){
            this.props.history.push('/')
        }
    }

    handleChange(e){
        e.target.value.replace(/</g, '&lt')
        e.target.value.replace(/>/g, '&gt')
        this.setState({[e.target.name] : e.target.value})
    }

    signupClickHandler(){
        this.props.loginHandler(this.state)
    }

    render(){
        return (
            <div className="view">
                <div id="loginInfo">
                    
                    <div id="loginInfo_border">
                        <div id="input">
                            <div>
                                <input type= "email" id='email' name='Email' placeholder="Email              " value={this.state.Email} onChange={this.handleChange.bind(this)}/>
                            </div>
                            
                            <div>
                                <input type= "password" id='pw' name='Password' placeholder="Password" value={this.state.Password} onChange={this.handleChange.bind(this)}/>
                            </div>
                            
                        </div>


                        <div className="buttons">
                            <div id="LoginButton1" 
                            onClick={()=>{this.props.loginHandler(this.state)}}>
                                <span>Login</span>
                                <span>Login</span>
                            </div>
                            <div id="LoginButton2"  
                            onClick={()=>{this.props.loginHandler(this.state)}}>
                                LOG IN
                            </div>

                            <div id="__SignUp__">
                                <input type="submit" id="SignUp3" value="SignUp" 
                                onClick={
                                    () => {this.props.history.push('/signup')
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
    
}