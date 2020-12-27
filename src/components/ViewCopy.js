import React, { Component } from 'react';
import {BtnViewCopy, BtnPostCopy} from './index';
import './style/viewCopy.css'

class ViewCopy extends Component {
    render() {
        return (
            <div className='view-copy'>
                <div className='view-content'>
                    {this.props.viewCopy.content}
                </div>
                <div className='view-btn'>
                    <BtnViewCopy className='btn-viewcopy' viewClickHandler={this.props.getRandomCopy} history={this.props.history}/>
                    <BtnPostCopy className='btn-postcopy' isLogin={this.props.isLogin} history={this.props.history}/>
                </div>
            </div>
        );
    }
}

export default ViewCopy;