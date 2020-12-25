import React from 'react'
import './style/signup.css'
import axios from 'axios'


export default class Signup extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userInfo : {
                Email:'',
                Name:'',
                Password:'',
                checkPW:''
            },
            isSignup:false,
            errorMessage:''
        }
        
    }

    componentDidUpdate(){
        if(this.state.isSignup){
           this.props.history.push('/login')             
        }  
    }

    changeHandler(e){
        this.setState({
            userInfo:{...this.state.userInfo,[e.target.name]:e.target.value}
        })
    }

    checkEmailHandler(email){
        if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)){
            this.setState({errorMessage : "이메일 형식이 아닙니다."})
        }
    }

    signupHandle(userInfo){
        console.log(userInfo)
        const {Email, Name, Password, checkPW} = userInfo
            // console.log(userInfo)
            // console.log(Email,Name,Password,checkPW)
        if(!Email || !Password || !Name || !checkPW){
            this.setState({errorMessage : "모든 항목은 필수입니다."})
        }else if(Password !== checkPW){
            this.setState({errorMessage : "비밀번호가 맞지않습니다."})
        }else if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(Email)){
            this.setState({errorMessage : "이메일 형식이 아닙니다."})
        }else if(!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/.test(Password)){
            this.setState({errorMessage : "비밀번호 형식이 아닙니다."})
        } else{
            axios.post('http://localhost:8080/sign/signup',{Email:Email, Name:Name, Password:Password},{headers:{'Content-Type':'application/json'}})
            .then(res => {
                console.log(res)
            if(res.data.message === 'signup success!'){
                this.setState({isSignup : true})
            }
        })
        .catch(err => console.log(err))
        }
    }



    render(){

        return (
            <div>
                <input id="signup_email" type="email" placeholder="Email" name="Email" value={this.state.userInfo.Email} onChange={this.changeHandler.bind(this)}/>
    
                <input id="signup_username" type="text" placeholder="User Name" name="Name" value={this.state.userInfo.Name} onChange={this.changeHandler.bind(this)}/> 
                
                <input id="signup_pw" type="password" placeholder="Password" name="Password" value={this.state.userInfo.Password} onChange={this.changeHandler.bind(this)}/> 
    
                <input id="signup_confirmPW" type="password" placeholder="Confirm Password" name="checkPW" value={this.state.userInfo.checkPW} onChange={this.changeHandler.bind(this)}/>
    
                <button 
                id="signup_button" 
                onClick={
                        ()=>{this.signupHandle(this.state.userInfo)}
                        }>
                        Signup</button>
                {this.state.errorMessage?<div className="alert-box">
                  {this.state.errorMessage}
                </div>:null}
            </div>
        )
    }
    
}