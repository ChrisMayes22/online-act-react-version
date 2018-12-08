import React from 'react';

const questionAnswer = (props) => {
    return (
        <button children={props.answerChild} 
        key={props.id}
        className={props.class}
        onClick={props.click} />
    );
}

export default questionAnswer;