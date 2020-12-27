import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style/nav.css'


class Nav extends Component {
    constructor (props) {
        super(props)

        this.count=0;
    }
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to='/'>CopyMind</Link>
                </div>
                < ul className="navbar-menu">
                    {this.props.menu.map(el => {
                        let lowerLetter = el.toLowerCase()
                        this.count++
                        return (
                            <li key={this.count}>
                                <Link to={lowerLetter}>{el}</Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className="navbar-controller">
                       <NavControl />
                </ul>
            </nav>
        );
    }
}
     
function NavControl ({isLogin}) {
    let control = (
        <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </>
    )
    // if (isLogin) {
    //     control = (
    //         <li>My Page</li>
    //     )
    // }
    return (
        <>
            {control}
        </>
    )
}

export default Nav;