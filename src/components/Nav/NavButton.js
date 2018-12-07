import React from 'react';

const navButton = (props) => {
    return <div>
        <button children={props.navChild} 
        onClick={props.click}/>
    </div>
}

export default navButton;