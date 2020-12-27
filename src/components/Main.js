import React, { Component } from 'react';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {BtnPostCopy, BtnViewCopy} from './index'


class Main extends Component {

    render() {
        return (
            <div>
                <BtnViewCopy viewClickHandler={this.props.getRandomCopy} history={this.props.history}/>
                <BtnPostCopy isLogin={this.props.isLogin} history={this.props.history}/>
                {
                this.props.isLogin ? '' : 
                    <div>
                        <p>Please register if you want to see more!</p>
                    </div>
                }
            </div>
        );
    }
}


export default Main;