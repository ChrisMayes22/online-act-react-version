import React from 'react';
import FeedbackQuestion from './FeedbackQuestion';
import classes from './Feedback.css';

const feedbackBox = (props) => {
    return <div className={classes.row}>
                <div className={[classes.container,
                    classes.cadetBlue,
                    classes.col,
                    classes.paddingRight].join(' ')}>
                        {props.questions.map((question) => {
                            const questionIndex = props.questions.findIndex(
                                (p) => p.ordinal === question.ordinal
                            )
                            if(questionIndex >= 0 &&
                                questionIndex <= 4) {
                                return <FeedbackQuestion 
                                    correct={question.checkCorrect} 
                                    reviewUrl={question.reviewUrl}
                                    questionNumber={questionIndex+1}/>
                            }
                        })}
                </div>
                <div className={[classes.container,
                    classes.cadetBlue,
                    classes.col,
                    classes.paddingLeft].join(' ')}>
                        {props.questions.map((question) => {
                            const questionIndex = props.questions.findIndex(
                                (p) => p.ordinal === question.ordinal
                            )
                            if(questionIndex >= 5 &&
                                questionIndex <= 9) {
                                return <FeedbackQuestion 
                                correct={question.checkCorrect} 
                                    reviewUrl={question.reviewUrl}
                                    questionNumber={questionIndex+1} />
                            }
                        })}
                </div>
            </div>
}

export default feedbackBox;

[classes.container,
    classes.cadetBlue,
    classes.col,
    classes.startPadding].join(' ')