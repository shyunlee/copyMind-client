import React, { Component } from 'react';
import img1 from '../images/each-copy_1.jpg'
import img2 from '../images/each-copy_2.jpg'
import img3 from '../images/each-copy_3.jpg'
import img4 from '../images/each-copy_4.jpg'
import img5 from '../images/each-copy_5.jpg'
import img6 from '../images/each-copy_6.jpg'
import img7 from '../images/each-copy_7.jpg'
import styles from './style/listCopy.module.css'

class ListCopy extends Component {

    componentDidMount() {
        let category = this.props.location.pathname.slice(1)
        this.getCopies(category)
    }

    async getCopies (category) {
        await this.props.getCopyList(category)
    }

    render() {
        return (
            <div className={styles.copy_list}>
                {this.props.contentsList.map(el => {
                    return (<EachCopy 
                        key={el.id} 
                        copy={el} 
                        history={this.props.history} 
                        sendCopyToState={this.props.sendCopyToState}
                        bookmarkList={this.props.bookmarkList}
                        />)
                })}
            </div>
        );
    }
}

function EachCopy (props) {
    function getRandom(min, max) {
        return Math.floor((Math.random() * (max-min+1)) + min)
    }
    let backImg = [img1, img2, img3, img4, img5, img6, img7]
    let {content, title, writer, likeCount} = props.copy
    content = content.slice(0, 50).concat('...')
    return (
        <div className={styles.eachCopy} onClick={() => {
            props.sendCopyToState(props.copy)
            props.history.push('/view')
        }}>
            <div className={styles.eachCopy_container}>
                <img src={backImg[getRandom(0,6)]} alt='background-img' width="100%"/>
                <div className={styles.eachCopy_content}>
                    <p>{content}</p>   
                    <div className={styles.eachCopy_info}>
                        <h2 className={styles.info_title}>{title}</h2>
                        <h2 className={styles.info_writer}>{writer}</h2>
                        <h2 className={styles.info_likeCount}>
                            {likeCount} <i className="fa fa-heart"></i>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCopy;

