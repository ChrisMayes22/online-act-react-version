import React from 'react';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer.js';

const answerRow = (props) => {
    return props.answers.map((answer) => {
         return <QuestionAnswer 
            answerChild={answer.value} 
            key={answer.id}/>
        });
}
                             
export default answerRow;