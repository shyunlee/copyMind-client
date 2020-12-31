import React, { Component } from 'react';
import {BtnViewCopy, BtnPostCopy} from './index';
import axios from 'axios'
import {URI} from '../actions'
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
            endPoint = `${URI}/copy/removelike`
        } else {
            endPoint = `${URI}/copy/addlike`
        }
        axios.post(endPoint, {id:this.props.viewCopy.id}, {headers:{'Content-Type':'application/json'}})
        .then(res => {
            console.log(res)
            this.setState({isLikeOn:!this.state.isLikeOn})
            this.props.updateLikeCount(res.data.likeCount)
        })
    }


    render() {
        const {category, content, title, writer, likeCount} = this.props.viewCopy
        return (
            <div className='view-copy'>
                <div>Categoty: {category}</div>
                <div>Likes: {likeCount}</div>
                {this.props.isLogin?<div onClick={this.addOrRemoveLike.bind(this)}>Heart</div>:''}
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