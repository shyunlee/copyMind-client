import React, { Component } from 'react';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {BtnPostCopy, BtnViewCopy} from './index'
import backImg2 from '../images/img_1.png'
import backImg1 from '../images/img_2.png'
import styles from './style/main.module.css'

class Main extends Component {

    render() {
        return (
            <div className={styles.container}> 
                <div className = {styles.copyMindDescriptonTitle}>
                    Copymind : Write Your Mind
                </div>
                <div className ={styles.copyMindDescriptonContent}>
                    A heartbreaking passage that you encounter in you daily life, Do you want to get closer through transcription?
                    Copymind provides you verses to enrich your transcription.
                    You can get the phrase to be transcribed throuth [Today's Copy] and post the phrase you want to share with us through [Post My Mind].
                    You can also save your favorit texts as bookmarks.
                    CopyMind, a helper essential for your literary life
                </div>
                <div className="btn-view">
                    <BtnViewCopy className='btn-viewcopy' viewClickHandler={this.props.getRandomCopy} history={this.props.history}/>
                    <BtnPostCopy className='btn-postcopy' isLogin={this.props.isLogin} history={this.props.history}/>
                </div>
                {
                this.props.isLogin ? '' : 
                    <div>
                        <p>Please register if you want to see more!</p>
                    </div>
                }
            <img className="back-img-1" src={backImg1} alt=""/>
            <img className="back-img-2" src={backImg2} alt=""/>
            </div>
        );
    }
}


export default Main;