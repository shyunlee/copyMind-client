import React, { Component } from 'react';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {BtnPostCopy, BtnViewCopy} from './index'
import backImg2 from '../images/img_1.png'
import backImg1 from '../images/img_2.png'

class Main extends Component {

    render() {
        return (
            <div className='container'> 
                <div className = "copyMindDescriptonTitle">
                    Copymind : 마음을 쓰다
                </div>
                <div className = "copyMindDescriptonContent">
                    일상에서 마주치는 마음을 울리는 한 구절, 필사를 통해 더 가까이 다가가고 싶으신가요? Copymind는 여러분의 필사를 더 풍부하게 만들어줄 구절들을 여러분께 제공합니다. [Today’s copy]를 통해 오늘 필사할 문구를 받아보고, [Post my mind]를 통해 당신이 나누고 싶은 글귀를 올려보세요. 마음에 드는 글귀는 북마크를 통해 따로 보관할 수도 있답니다. 

                    여러분의 필사생활에 꼭 필요한 도우미, Copymind입니다.
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
            {/* <img class="back-img-1" src={backImg1} alt=""/>
            <img class="back-img-2" src={backImg2} alt=""/> */}
            </div>
        );
    }
}


export default Main;