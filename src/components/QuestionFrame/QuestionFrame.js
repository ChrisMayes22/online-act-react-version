import React from 'react';
import AnswerRow from '../AnswerRow/AnswerRow.js';

const questionFrame = (props) => {
    return (
        <div>
                <div>
                    <img src={props.imgSrc} alt="an ACT question"/>
                </div>
                <div>
                    <AnswerRow answers={props.answers} />
                </div>
        </div>
    );
}

export default questionFrame;
