import React from 'react';
import QuestionAnswer from './QuestionAnswer';

const answerRow = (props) => {
    return props.answers.map((answer) => {
         return <QuestionAnswer 
            answerChild={answer.value} 
            click={() => props.click(answer.questionId, answer.id)}
            key={answer.id}
            class={answer.style.join(' ')}/>
        });
}
                             
export default answerRow;