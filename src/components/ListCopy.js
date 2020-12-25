import React, { Component } from 'react';
import './style/listCopy.css'

function List(props){
    console.log(props.count)
    return (
        <div className="posting">
            <div>{props.data.title}</div>
            <div>{props.data.writer}</div>
            <div>{props.data.posting}</div>
        </div>
    )
}


class ListCopy extends Component {

    render() {
        return (
            <div className="listPosting">
                {this.props.contentsList.map((el, index) => {
                   return  <List key={index} data={el} count={index+1}></List>
                })}
            </div>
        );
    }
}



export default ListCopy;