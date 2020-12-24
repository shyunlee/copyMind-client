import React from 'react';

const BtnPostCopy = (props) => {
    let btnDisplay = ''
    if (props.isLogin) {
        btnDisplay = (<input className='btn' type="button" value='Post MyMind'/> )
    }
    return (
        <div>
            {btnDisplay}
        </div>
    );
}

export default BtnPostCopy;