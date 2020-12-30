import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import './style/postCopy.css'
import {actionGetRandomCopy, URL} from '../actions'
import axios from 'axios'
axios.defaults.withCredentials=true;

const PostCopy = ({history}) => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()

    const handleChange = (target) => {
        switch(target.name) {
            case 'content' :
                setContent(target.value)
            case 'title':
                setTitle(target.value)
            case 'writer':
                setWriter(target.value)
            case 'category':
                setCategory(target.value)
        }
    }

    const handleClickPost = () => {
        let postData = {content, title, writer, category}
        axios.post(`${URL}/copy/postcopy`,postData, {headers:{'Content-Type':'application/json'}})
        .then(res => {
            console.log(res)
            if (res.statusText === 'OK') {
                dispatch(actionGetRandomCopy(res.data.result[0]))
                history.push('/view')
            }
        })
    }

    return (
        <div className='post-copy'>
            <div className='post-content'>
                <textarea name="content" id="" cols='50' rows="30" onChange={(e) => {handleChange(e.target)}}></textarea>
            </div>
            <div className='post-control'>
                <div className='post-option'>
                    <input name='title' type="text" placeholder='Book Title'  onChange={(e) => {handleChange(e.target)}}/>
                    <input name='writer' type="text" placeholder='Writer' onChange={(e) => {handleChange(e.target)}}/>
                    <select name="category" id="" onChange={(e) => {handleChange(e.target)}}>
                        <option value="">--none--</option>
                        <option value="novel">Novel</option>
                        <option value="poem">Poem</option>
                        <option value="quotes">Quotes</option>
                        <option value="essay">Essay</option>
                    </select>
                </div>
                <div className='post-btn'>
                    <input type="button" value='Post' onClick={handleClickPost}/>
                </div>
            </div>
        </div>
    );
};



export default PostCopy;