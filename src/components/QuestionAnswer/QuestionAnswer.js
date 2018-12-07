import React from 'react';

const questionAnswer = (props) => {
    return (
        <button children={props.answerChild} 
        key={props.key} />
    );
}

export default questionAnswer;