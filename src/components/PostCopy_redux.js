import React, { Component } from 'react';
import {useDispatch, useStore} from 'react-redux'
import './style/postCopy.css'
import {actionGetRandomCopy} from '../actions'
import axios from 'axios'
axios.defaults.withCredentials=true;


class PostCopy extends Component {
    state = {
        content:'',
        title:'',
        writer:'',
        category:''
    }

    handleChange(target) {
        this.setState({[target.name]:target.value})
    }

    handleClickPost () {
        axios.post('http://13.209.5.235:8080/copy/postcopy',this.state, {headers:{'Content-Type':'application/json'}})
        .then(res => {
            console.log(res.result)
            if (res.message === 'ok') {
                const dispatch = useDispatch()
                dispatch(actionGetRandomCopy(res.result[0]))
                this.props.history.push('/view')
            }
        })
    }

    render() {
        return (
            <div className='post-copy'>
                <div className='post-content'>
                    <textarea name="content" id="" cols='50' rows="30" onChange={(e) => {this.handleChange(e.target)}}></textarea>
                </div>
                <div className='post-control'>
                    <div className='post-option'>
                        <input name='title' type="text" placeholder='Book Title'  onChange={(e) => {this.handleChange(e.target)}}/>
                        <input name='writer' type="text" placeholder='Writer' onChange={(e) => {this.handleChange(e.target)}}/>
                        <select name="category" id="" onChange={(e) => {this.handleChange(e.target)}}>
                            <option value="">--none--</option>
                            <option value="novel">Novel</option>
                            <option value="poem">Poem</option>
                            <option value="quotes">Quotes</option>
                            <option value="essay">Essay</option>
                        </select>
                    </div>
                    <div className='post-btn'>
                        <input type="button" value='Post' onClick={this.handleClickPost.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostCopy;