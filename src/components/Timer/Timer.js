import React from 'react';

const timer = (props) => {
    return(
        <div>
            <p children='Timer' onClick={props.click}/>
            <p children={props.minutes + ':' + props.seconds} />
        </div>
    );
}

export default timer;