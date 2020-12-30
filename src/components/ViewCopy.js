import React, { Component } from 'react';
import {BtnViewCopy, BtnPostCopy} from './index';
import axios from 'axios'
import {URL} from '../actions'
import './style/viewCopy.css'

axios.defaults.withCredentials=true;

class ViewCopy extends Component {
    state={
        isLikeOn:false
    }


    addOrRemoveLike () {
        console.log('clicked')
        let endPoint
        if (this.state.isLikeOn) {
            endPoint = `${URL}/copy/removelike`
        } else {
            endPoint = `${URL}/copy/addlike`
        }
        axios.post(endPoint, {id:this.props.viewCopy.id}, {headers:{'Content-Type':'application/json'}})
        .then(res => {
            console.log(res)
            this.setState({isLikeOn:!this.state.isLikeOn})
        })
    }


    render() {
        const {category, content, title, writer} = this.props.viewCopy
        return (
            <div className='view-copy'>
                <div>categoty: {category}</div>
                <div onClick={this.addOrRemoveLike.bind(this)}>Heart</div>
                <div className='view-content'>
                    <div>{content}</div>
                    <div>
                        {`In ${title} By ${writer}`}
                    </div> 
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