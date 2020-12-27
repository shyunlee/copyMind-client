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
                <article>
                        <button className="candidate1">Hover me !</button>
                        <a href="#" className="candidate2 blue">Button</a>

                        <a href="#" className="btn candidate3 animated-button thar-one">Sign up</a>
                        <a href="#" className="btn candidate3 animated-button thar-two">Login</a>
                        <a href="#" className="btn candidate3 animated-button thar-three">Register</a>
                        <a href="#" className="btn candidate3 animated-button thar-four">Learn more</a>

                        <button className="button_submit">Submit</button>
                        
                        <div className="button button1">button1</div>
                        <div className="button button2">button2</div>
                        <div className="button button3">button3</div>
                        <div className="button button4">button4</div>
                        <div className="button button5">button5</div>
                        <div className="button button6background"><div className="button button6">button6</div></div>
                        

                </article>
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
                            {/* <div className="__Login__"> */}
                                
                            <div id="LoginButton1" 
                            onClick={()=>{this.props.loginHandler(this.state)}}>
                                <span>Login</span>
                                <span>Login</span>
                            </div>
                            <div id="LoginButton2"  
                            onClick={()=>{this.props.loginHandler(this.state)}}>
                                LOG IN
                            </div>
                                {/* <input id="Login1" type="button" value="Login" 
                                onClick={
                                    ()=>{this.props.loginHandler(this.state)}
                                }
                                />
                                <input id="Login2" type="button" value="Login" 
                                onClick={
                                    ()=>{this.props.loginHandler(this.state)}
                                }
                                /> */}
                            {/* </div> */}
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

                <aside>
                    <div className="button button7">button7</div>
                    <div className="button button8">button8</div>
                    <div className="button button9">button9</div>
                    <div className="button button10">button10</div>
                    <div className="button button11">button11</div>
                    <div className="button button12">button12</div>
                    <div className="button button13">button13</div>
                    <div className="button button14">button14</div>
                    <a className="button button15" href="#"><span>Hover</span><span>Button15</span></a>
                    <div className="button button16">button16</div>
                    <div className="button button17">button17</div>
                    <div className="button button18">button18</div>
                    <div className="button button19">button19</div>
                    <div className="button button20">button20</div>
                    <div className="button button21">button21</div>
                </aside>

            </div>
        )
    }
    
}