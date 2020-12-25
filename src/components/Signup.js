import React from 'react'
import './style/signup.css'
import store from '../store'

export default class Signup extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            Email:'',
            Name:'',
            Password:'',
            checkPW:''
        }
        
    }

    componentDidUpdate(){
        if(store.getState().signupHandler.signup){
           this.props.history.push('/login')             
        }  
    }
    changeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }



    render(){

        return (
            <div>
                <input id="signup_email" type="email" placeholder="Email" name="Email" value={this.state.Email} onChange={this.changeHandler.bind(this)}/>
    
                <input id="signup_username" type="text" placeholder="User Name" name="Name" value={this.state.Name} onChange={this.changeHandler.bind(this)}/>
                
                <input id="signup_pw" type="password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.changeHandler.bind(this)}/>
    
                <input id="signup_confirmPW" type="password" placeholder="Confirm Password" name="checkPW" value={this.state.checkPW} onChange={this.changeHandler.bind(this)}/>
    
                <button 
                id="signup_button" 
                onClick={
                        ()=>{this.props.signupHandle(this.state)}
                        }>
                        Signup</button>
                {this.props.errorMessage?<div className="alert-box">
                  {this.props.errorMessage}
                </div>:null}
            </div>
        )
    }
    
}