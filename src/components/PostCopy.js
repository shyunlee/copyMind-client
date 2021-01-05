import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import './style/postCopy.css'
import {actionGetRandomCopy, URI} from '../actions'
import axios from 'axios'
axios.defaults.withCredentials=true;

const PostCopy = ({history}) => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()

    const handleChange = (target) => {
        if (target.name === 'content') setContent(target.value)
        else if (target.name === 'title') setTitle(target.value)
        else if (target.name === 'writer') setWriter(target.value)
        else if (target.name === 'category') setCategory(target.value)
    }

    const handleClickPost = () => {
        let postData = {content, title, writer, category}
        axios.post(`${URI}/copy/postcopy`,postData, {headers:{'Content-Type':'application/json'}})
        .then(res => {
            if (res.statusText === 'OK') {
                dispatch(actionGetRandomCopy(res.data.result[0]))
                history.push('/view')
            }
        })
    }

    return (
        <div className='post-box'>
            <div className='post-copy-box'>
                <input className='post-title' autoComplete="off" name='title' type='text' placeholder='제목을 입력하세요'  onChange={(e) => {handleChange(e.target)}}/>
                <div className="post-writer-category-box">
                    <input className='post-writer' autoComplete="off" name='writer' type="text" placeholder='저자' onChange={(e) => {handleChange(e.target)}}/>
                    <div className="post-righter-box">
                        <select className="post-category" name='category' onChange={(e) => {handleChange(e.target)}}>
                            <option value="">--Category--</option>
                            <option value="novel">Novel</option>
                            <option value="poem">Poem</option>
                            <option value="quotes">Quotes</option>
                            <option value="essay">Essay</option>
                        </select>
                    </div>
                </div>
                <textarea className="post-content" autoComplete="off" name="content" placeholder="당신의 마음을 담아보세요." onChange={(e) => {handleChange(e.target)}}></textarea>
            </div>
            <div className='post-control-box'>
                <input className='btn' type="button" value='Post Mind' onClick={handleClickPost}/>
            </div>
        </div>
    );
};

export default PostCopy;
