import React from 'react';

const BtnViewCopy = ({viewClickHandler,history}) => {
    return (
        <div>
            <input className='btn' type="button" value="Today's Copy" onClick={() => {
                viewClickHandler('view')
                history.push('./view')
            }} />
        </div>
    );
};




export default BtnViewCopy;