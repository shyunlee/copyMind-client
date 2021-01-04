// import React, { Component } from 'react';
// import {BtnViewCopy, BtnPostCopy} from './index';
// import axios from 'axios'
// import {URI} from '../actions'
// import './style/viewCopy.css'

// axios.defaults.withCredentials=true;

// class ViewCopy extends Component {
//     state={
//         isLikeOn:false
//     }


//     addOrRemoveLike () {
//         console.log('clicked')
//         let endPoint
//         if (this.state.isLikeOn) {
//             endPoint = `${URI}/copy/removelike`
//         } else {
//             endPoint = `${URI}/copy/addlike`
//         }
//         axios.post(endPoint, {id:this.props.viewCopy.id}, {headers:{'Content-Type':'application/json'}})
//         .then(res => {
//             console.log(res)
//             this.setState({isLikeOn:!this.state.isLikeOn})
//             this.props.updateLikeCount(res.data.likeCount)
//         })
//     }


//     render() {
//         const {category, content, title, writer, likeCount} = this.props.viewCopy
//         return (
//             <div className='view-copy'>
//                 <div>Categoty: {category}</div>
//                 <div>Likes: {likeCount}</div>
//                 {this.props.isLogin?<div onClick={this.addOrRemoveLike.bind(this)}>Heart</div>:''}
//                 <div className='view-content'>
//                     <div>{content}</div>
//                     <div>
//                         {`In ${title} By ${writer}`}
//                     </div> 
//                 </div>
//                 <div className='view-btn'>
//                     <BtnViewCopy className='btn-viewcopy' viewClickHandler={this.props.getRandomCopy} history={this.props.history}/>
//                     <BtnPostCopy className='btn-postcopy' isLogin={this.props.isLogin} history={this.props.history}/>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ViewCopy;


import React, { Component } from 'react';
import {BtnViewCopy, BtnPostCopy} from './index';
import axios from 'axios'
import {URI} from '../actions'
import './style/viewCopy.css'

axios.defaults.withCredentials=true;

class ViewCopy extends Component {
    state={
        isLikeOn:false,
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
        const {isLikeOn} = this.state
        const {category, content, title, writer, likeCount} = this.props.viewCopy
        return (
            <div className='view-box'>
            <div className='view-copy-box'>
                <div className='view-title-likeCount-box'>
                <div className='view-title'>{`${title}`}</div> 
                <div className='view-writer'>{`${writer}`} </div>
                <div className="view-category">{category}</div>
                </div>
                <div className='view-content'>{content}</div>
                <span className='view-heart-box'>
                    {this.props.isLogin?
                    <span className="view-heart" onClick={this.addOrRemoveLike.bind(this)}>
                        {isLikeOn ? <span>♥︎  {likeCount}</span> : <span>♡  {likeCount}</span>}
                     {/* && 북마크 여부 확인 */}
                    </span> : <span>♥︎  {likeCount}</span>}
                </span>
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