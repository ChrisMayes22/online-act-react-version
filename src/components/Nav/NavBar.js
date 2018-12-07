import React from 'react';
import NavButton from './NavButton';

const navBar = (props) => {
    return props.questions.map((button) => {
        const buttonIndex = props.questions.findIndex(
            (p) => p.id === button.id
        );
        return <NavButton 
                navChild={buttonIndex + 1} 
                click={() => props.click(button.id)}
                key={button.id}/>
    })
}

export default navBar;