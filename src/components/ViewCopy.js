import React, { Component } from 'react';
import {BtnViewCopy, BtnPostCopy} from './index';
import axios from 'axios'
import {URI} from '../actions'
import './style/viewCopy.css'

axios.defaults.withCredentials=true;

class ViewCopy extends Component {

    addOrRemoveLike (isLikeOn) {
        let endPoint
        if (isLikeOn) {
            endPoint = `${URI}/copy/removelike`
        } else {
            endPoint = `${URI}/copy/addlike`
        }
        axios.post(endPoint, {id:this.props.viewCopy.id}, {headers:{'Content-Type':'application/json'}})
        .then(res => {
            this.props.updateLikeCount(res.data.likeCount)
            this.props.updateBookmarkList(res.data.bookmarkList)
        })
    }

    // componentDidMount () {
    //     let bookmarkId = this.props.viewCopy.id
    //     if (this.props.bookmarkList.includes(bookmarkId)) {
    //         this.setState({isLikeOn:true})
    //     } else {
    //         this.setState({isLikeOn:false})
    //     }
    // }

    render() {
        const {category, content, title, writer, likeCount, id} = this.props.viewCopy
        let isLikeOn = this.props.bookmarkList.includes(id)?true:false
        return (
            <div className='view-box'>
            <div className='view-copy-box'>
            <span className='view-heart-box'>
                {this.props.isLogin?
                <span className="view-heart" onClick={() => this.addOrRemoveLike(isLikeOn)}>
                    {isLikeOn ? <span>{likeCount} <i className="fa fa-heart"></i></span> : <span>{likeCount} ♡</span>}
                </span> : <span>{likeCount} <i className="fa fa-heart"></i></span>}
            </span>
                <div className='view-title-likeCount-box'>
                <div className='view-title'>{`${title}`}</div> 
                <div className='view-writer'>{`${writer}`} </div>
                <div className="view-category">{category}</div>
                </div>
                <div className='view-content'>{content}</div>
                </div>
                <div className='view-btn-box'>
                <BtnViewCopy className='btn-viewcopy' viewClickHandler={this.props.getRandomCopy} history={this.props.history}/>
                    {this.props.isLogin ? <BtnPostCopy className='btn-postcopy' isLogin={this.props.isLogin} history={this.props.history}/> : '' }
                </div>
            </div>
        );
    }
}

export default ViewCopy;