import React from 'react'
import './style/login.css'
// import store from '../store'

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
            <div>
    
                <input type= "email" id='email' name='Email' placeholder="Email" value={this.state.Email} onChange={this.handleChange.bind(this)}/>
    
                <input type= "password" id='pw' name='Password' placeholder="Password" value={this.state.Password} onChange={this.handleChange.bind(this)}/>
    
                <input id="Login" type="button" value="Login" 
                onClick={
                    ()=>{this.props.loginHandler(this.state)}
                }
                />
    
                <input id="SignUp" type="submit" value="SignUp" 
                onClick={
                    () => {this.props.history.push('/signup')
                    }}
                    />

                <input id="AOuth-Google" type="button" value="LOGIN WITH GOOGLE" />

                <input id="AOuth-Github" type="button" value="LOGIN WITH GITHUB" />
    
            </div>
        )
    }
    
}