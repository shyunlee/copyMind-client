import React, { Component } from 'react';
import './style/listCopy.css'

function List(props){
    const urls ={
        "sq-sample27":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg",
        "sq-sample31":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample31.jpg",
        "sq-sample32":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample32.jpg",
        "sample45":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg",
        "sample77":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample77.jpg",
        "sample99":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample99.jpg",        
    }

    const {content, title, writer, category, likeCount} = props.data
    
    const random = (urls) => {
        const randomValue = Math.floor(Math.random()*10) % 6;
        const key = Object.keys(urls)[randomValue]
        const value = urls[key]
        return {keyAlt : key, valueSrc : value}
    }

    const {keyAlt, valueSrc} = random(urls)

    let count = content.length / 20
    const increaseValue = 20;
    let startValue = 0;
    let endValue = increaseValue;
    let line = ""
    for(let i = 0; i < count; i++){
        line += `${content.slice(startValue, endValue)}\n`
        startValue += increaseValue
        endValue += increaseValue
    }

    return (  
        <div className="posting" >
            <figure className="snip1200">
                <img
                    src={valueSrc}
                    alt={keyAlt} width="200vw"
                />
                <figcaption>
                    <p>
                        {line}
                    </p>
                    <div className="heading">
                        <h2>
                            <div>{title}</div>
                            <div>{writer}</div>
                        </h2>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}


class ListCopy extends Component {
    constructor (props) {
        super(props)

        this.count=0
    }

    render() {
        return (
            <div className="listPosting">
                {this.props.contentsList.map( el => {
                    this.count++
                   return  (<List key={this.count} data={el} />)
                })}
            </div>
        );
    }
}



export default ListCopy;