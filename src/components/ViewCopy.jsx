import React, { Component } from 'react';
import {BtnViewCopy, BtnPostCopy} from './index';
import axios from 'axios'
import {URI} from '../actions'
import styles from './style/viewCopy.module.css'

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
        let isLikeOn = false
        if (id) {
            console.log(this.props.bookmarkList, id)
            isLikeOn = this.props.bookmarkList.includes(id)?true:false
        }
        return (
            <div className={styles.view_box}>
                <div className={styles.view_heart_box}>
                    {this.props.isLogin ?
                    <span  onClick={() => this.addOrRemoveLike(isLikeOn)}>
                        {isLikeOn ? <span>{likeCount} <i className={`fa fa-heart ${styles.heart}`}></i></span> : <span>{likeCount} <i className={`fa fa-heart ${styles.heart}`}></i></span>}
                    </span> : <span>{likeCount} <i className={`fa fa-heart ${styles.heart}`}></i></span>}
                </div>
                <div className={styles.view_info}>
                    <div className={styles.view_title}>{`${title}`}</div> 
                    <div className={styles.view_writer}>{`${writer}`} </div>
                    <div className={styles.view_category}>{category}</div>
                </div>
                    <div className={styles.view_content}>{content}</div>
                <div className={styles.view_btn_box}>
                <BtnViewCopy className='btn-viewcopy' viewClickHandler={this.props.getRandomCopy} history={this.props.history}/>
                    {
                    this.props.isLogin 
                    ? <BtnPostCopy className='btn-postcopy' isLogin={this.props.isLogin} history={this.props.history}/> : '' }
                </div>
            </div>
        );
    }
}

export default ViewCopy;