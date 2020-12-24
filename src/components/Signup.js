import React from 'react'
import './style/signup.css'
export default function Signup() {
    return (
        <div>
            <input id="signup_email" type="text" placeholder="Email" />

            <input id="signup_username" type="text" placeholder="User Name" />
            
            <input id="signup_pw" type="text" placeholder="Password" />

            <input id="signup_confirmPW" type="text" placeholder="Confirm Password" />

            <button id="signup_button">Signup</button>

        </div>
    )
}