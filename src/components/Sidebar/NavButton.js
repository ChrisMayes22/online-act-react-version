import React from 'react';

const navButton = (props) => {
    return <div>
        <button children={props.navChild} 
        onClick={props.click}
        className={props.class}/>
    </div>
}

export default navButton;