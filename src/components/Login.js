import React from 'react'
import './style/login.css'

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        
        return (
            <div>
    
                <input type= "text" id='email' name='email' placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
    
                <input type= "text" id='pw' name='password' placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
    
                <input id="Login" type="button" value="Login" 
                onClick={
                    () => {
                    this.props.login(this.state)
                    this.props.history.push('/')
                    }
                }/>
    
                <input id="SignUp" type="submit" value="SignUp" onClick={() => {this.props.history.push('/signup')}}/>

                <input id="AOuth-Google" type="button" value="LOGIN WITH GOOGLE" onClick={this.props}/>

                <input id="AOuth-Github" type="button" value="LOGIN WITH GITHUB" onClick={this.props}/>
    
            </div>
        )
    }
    
}