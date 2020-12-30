import React, { Component } from 'react';

class ListCopy extends Component {
    constructor (props) {
        super(props)

        this.count=0
    }
    render() {
        return (
            <div>
                {this.props.contentsList.map(el => {
                    this.count++
                    return (<EachCopy key={this.count} copy={el}/>)
                })}
            </div>
        );
    }
}

function EachCopy (props) {
    const {content, title, writer, category, likeCount} = props.copy
    return (
        <div className='eachCopy'>
            <div className='eachCopy-content'>{content}</div>
            <div className='eachCopy-category'>{category}</div>
            <div className='eachCopy-title'>{title}</div>
            <div className='eachCopy-writer'>{writer}</div>
        </div>
    )
}

export default ListCopy;