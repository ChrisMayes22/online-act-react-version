import React from 'react';
import AnswerRow from './AnswerRow.js';
import classes from './QuestionFrame.css';

const questionFrame = (props) => {
    return (
        <div className = {[classes.container,
            classes.cadetBlue,
            classes.col,
            classes.questionPadding].join(' ')}>
                <div className={classes.questionImageContainer}>
                    <img src={props.imgSrc} alt="an ACT question"/>
                </div>
                <div className={classes.container}>
                    <AnswerRow 
                    answers={props.answers}
                    click={props.click} 
                    styling={props.styling}/>
                </div>
        </div>
    );
}

export default questionFrame;
