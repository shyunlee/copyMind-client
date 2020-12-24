import React from 'react';

const BtnPostCopy = ({isLogin, history}) => {
    let btnDisplay = ''
    if (!isLogin) {
        btnDisplay = (<input className='btn' type="button" value='Post MyMind' onClick={()=> history.push('/post')}/> )
    }
    return (
        <div>
            {btnDisplay}
        </div>
    );
}

export default BtnPostCopy;