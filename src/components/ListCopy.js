import React, { Component } from 'react';
import img1 from '../images/each-copy_1.jpg'
import img2 from '../images/each-copy_2.jpg'
import img3 from '../images/each-copy_3.jpg'
import img4 from '../images/each-copy_4.jpg'
import img5 from '../images/each-copy_5.jpg'
import img6 from '../images/each-copy_6.jpg'
import img7 from '../images/each-copy_7.jpg'
import './style/listCopy.css'

class ListCopy extends Component {
    constructor (props) {
        super(props)

        this.count=0
    }
    
    render() {
        return (
            <div className='copy-list'>
                {this.props.contentsList.map(el => {
                    this.count++
                    return (<EachCopy key={this.count} copy={el} history={this.props.history} sendCopyToState={this.props.sendCopyToState}/>)
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
    let {content, title, writer, category, likeCount} = props.copy
    content = content.slice(0, 100).concat('...')
    return (
        <div className='eachCopy' onClick={() => {
            props.sendCopyToState(props.copy)
            props.history.push('/view')
        }}>
            <div className='eachCopy-container'>
                <img src={backImg[getRandom(0,6)]} width="100%"/>
                <div className='eachCopy-content'>
                    <p>{content}</p>   
                    <div className='eachCopy-info'>
                        <h2 className='info-title'>{title}</h2>
                        <h2 className='info-writer'>{writer}</h2>
                        <h2 className='info-likeCount'>{likeCount} <i className="fa fa-heart"></i></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCopy;

