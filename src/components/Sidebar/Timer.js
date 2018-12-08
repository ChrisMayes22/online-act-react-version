import React from 'react';
import classes from './Timer.css';

const timer = (props) => {
    return(
        <div className={[classes.container,
            classes.cadetBlue,
            classes.col].join(' ')}>
            <p children='Timer' onClick={props.click}/>
            <p children={props.minutes + ':' + props.seconds} />
        </div>
    );
}

export default timer;