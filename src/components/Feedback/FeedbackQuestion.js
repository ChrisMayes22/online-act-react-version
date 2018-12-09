import React from 'react';
import classes from './Feedback.css';

const feedbackQuestion = (props) => {

    let feedback = (
            <p className={[classes.container, classes.col].join(' ')}>
                <span children={'#'+props.questionNumber+': '} 
                    className={classes.bold} />
                <span children='Congratulations, you got this one ' />
                <span children='CORRECT!!' className={classes.green} />
            </p>
    );

    if(!props.correct) {
        feedback = (
            <div className={[classes.container, classes.col].join(' ')}>
                <p>
                    <span children={'#'+props.questionNumber+': '} 
                        className={classes.bold} />
                    <br />
                    <span children='You got this one ' />
                    <span children='Incorrect.' className={classes.red} />
                    <br />
                    <span children='You can review this problem ' />
                    <a children='here.' href={props.reviewUrl} />
                </p>
            </div>
        );
    }

    return <div>
        {feedback}
    </div>
}

export default feedbackQuestion;