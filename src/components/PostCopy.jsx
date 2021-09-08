import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import styles from './style/postCopy.module.css'
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
        <div className={styles.container}>
            <input className={styles.post_title} autoComplete="off" name='title' type='text' placeholder='Type the title'  onChange={(e) => {handleChange(e.target)}}/>
            <div className={styles.post_info_box}>
                <input className={styles.post_writer} autoComplete="off" name='writer' type="text" placeholder='Writer' onChange={(e) => {handleChange(e.target)}}/>
                <div className={styles.selection}>
                    <select className={styles.post_category} name='category' onChange={(e) => {handleChange(e.target)}}>
                        <option value="">Select Category</option>
                        <option value="novel">Novel</option>
                        <option value="poem">Poem</option>
                        <option value="quotes">Quotes</option>
                        <option value="essay">Essay</option>
                    </select>
                </div>
            </div>
            <textarea className={styles.post_content} autoComplete="off" name="content" spellcheck="false" placeholder="Type your mind here" onChange={(e) => {handleChange(e.target)}}></textarea>
            <div className={styles.post_btn}>
                <input className='btn' type="button" value='Post Mind' onClick={handleClickPost}/>
            </div>
        </div>
    );
};

export default PostCopy;
