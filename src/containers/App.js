import React, { Component } from 'react';
import './App.css';
import QuestionFrame from '../components/QuestionFrame/QuestionFrame';
import Timer from '../components/Timer/Timer';
import NavBar from '../components/Nav/NavBar';
import CubeProblem from '../assets/images/cube-problem.jpg';
import LogarithmProblem from '../assets/images/logarithm-problem.jpg';
import MLessThanN from '../assets/images/m-less-than-n.jpg';
import PentagonQuadrilateral from '../assets/images/pentagon-quadrilateral.jpg';
import ThirdsQuestion from '../assets/images/thirds-question.jpg';
import TriangleProblem from '../assets/images/triangle-problem.jpg';
import TrigIdentities from '../assets/images/trig-identities.jpg';
import TrigProblem from '../assets/images/trig-problem.jpg';
import ValueOfB from '../assets/images/value-of-b.jpg';
import GraphProblem from '../assets/images/graph-problem.jpg';

class App extends Component {
    state = {
        question: {
            id: 'q1.1',
            imageUrl: ThirdsQuestion, 
            rightAnsw: 'e',
            answers: [{value: 'a) 12', id: '1.1a'}, 
            {value: 'b) 15', id: '1.1b'}, 
            {value: 'c) 27', id: '1.1c'}, 
            {value: 'd) 54', id: '1.1d'}, 
            {value: 'e) 81', id: '1.1e'}]
        },
        minutes: '15',
        seconds: '00'
    }

    questions = [
        {
            id: 'q1.1',
            imageUrl: ThirdsQuestion, 
            rightAnsw: 'e',
            answers: [{value: 'a) 12', id: '1.1a'}, 
            {value: 'b) 15', id: '1.1b'}, 
            {value: 'c) 27', id: '1.1c'}, 
            {value: 'd) 54', id: '1.1d'}, 
            {value: 'e) 81', id: '1.1e'}]
        },
        {
            id: 'q1.2',
            imageUrl: MLessThanN, 
            rightAnsw: 'd',
            answers: [{value: 'a) m is odd', id: '1.2a'}, 
            {value: 'b) n is odd', id: '1.2b'}, 
            {value: 'c) n - m is even', id: '1.2c'}, 
            {value: 'd) n^2 - m^2 is od', id: '1.2d'}, 
            {value: 'm^2 + n^2 is even', id: '1.2e'}]
        },
        {
            id: 'q1.3',
            imageUrl: GraphProblem, 
            rightAnsw: 'd',
            answers: [{value: 'a) I', id: '1.3a'}, 
            {value: 'b) II', id: '1.3b'}, 
            {value: 'c) III', id: '1.3c'}, 
            {value: 'd) IV', id: '1.3d'}, 
            {value: 'e) V', id: '1.3e'}]
        },
        {
            id: 'q1.4',
            imageUrl: TriangleProblem, 
            rightAnsw: 'e',
            answers: [{value: 'a) 2(y + z) + x', id: '1.4a'}, 
            {value: 'b) 2(x + y + z)', id: '1.4b'}, 
            {value: 'c) 2(x + y)', id: '1.4c'}, 
            {value: 'd) 2(x + z)', id: '1.4d'}, 
            {value: 'e) 2(y + z)', id: '1.4e'}]
        },
        {
            id: 'q1.5',
            imageUrl: TrigProblem, 
            rightAnsw: 'b',
            answers: [{value: 'a) 0 < a1 < a2', id: '1.5a'}, 
            {value: 'b) 0 < a2 < a1', id: '1.5b'}, 
            {value: 'c) a1 < 0 < a2', id: '1.5c'}, 
            {value: 'd) a1 < a2 < 0', id: '1.5d'}, 
            {value: 'e) a2 < a1 < 0', id: '1.5e'}]
        },
        {
            id: 'q1.6',
            imageUrl: TrigIdentities, 
            rightAnsw: 'c',
            answers: [{value: 'a) 0', id: '1.6a'}, 
            {value: 'b) 1', id: '1.6b'}, 
            {value: 'c) 2', id: '1.6c'}, 
            {value: 'd) -tan(x)', id: '1.6d'}, 
            {value: 'e) sin(2x)', id: '1.6e'}]
        },
        {
            id: 'q1.7',
            imageUrl: ValueOfB, 
            rightAnsw: 'a',
            answers: [{value: 'a) 9', id: '1.7a'}, 
            {value: 'b) -8', id: '1.7b'}, 
            {value: 'c) -25', id: '1.7c'}, 
            {value: 'd) -26', id: '1.7d'}, 
            {value: 'e) 4 - 7sqrt(6)', id: '1.7e'}]
        },
        {
            id: 'q1.8',
            imageUrl: LogarithmProblem, 
            rightAnsw: 'd',
            answers: [{value: 'a) 3', id: '1.8a'}, 
            {value: 'b) 21', id: '1.8b'}, 
            {value: 'c) 72', id: '1.8c'}, 
            {value: 'd) 125', id: '1.8d'}, 
            {value: 'e) 243', id: '1.8e'}]
        },
        {
            id: 'q1.9',
            imageUrl: PentagonQuadrilateral, 
            rightAnsw: 'c',
            answers: [{value: 'a) 18', id: '1.9a'}, 
            {value: 'b) 30', id: '1.9b'}, 
            {value: 'c) 36', id: '1.9c'}, 
            {value: 'd) 35', id: '1.9d'}, 
            {value: 'e) 72', id: '1.9e'}]
        },
        {
            id: 'q1.10',
            imageUrl: CubeProblem, 
            rightAnsw: 'e',
            answers: [{value: 'a) 9', id: '1.10a'}, 
            {value: 'b) 18', id: '1.10b'}, 
            {value: 'c) 27', id: '1.10c'}, 
            {value: 'd) 36', id: '1.10d'}, 
            {value: 'e) 54', id: '1.10e'}]
        }
    ]

    padZero = (num) => {
        if(num < 10) {
            num = "0" + num.toString();
        }
        return num;
    }

    timerUpdateHandler = () => {
        var minutesLeft = Number(this.state.minutes);
        var secondsLeft = Number(this.state.seconds);
        if((minutesLeft <= 0) && (secondsLeft <= 0)) {
            return null;
        } else if (secondsLeft <= 0) {
            minutesLeft -= 1;
            this.setState({
                minutes: this.padZero(minutesLeft),
                seconds: '59'
            })
            window.setTimeout(this.timerUpdateHandler, 1000);
        } else {
            secondsLeft -= 1;
            this.setState({
                seconds: this.padZero(secondsLeft)
            })
            window.setTimeout(this.timerUpdateHandler, 1000);
        }
    }

    changeQuestionHandler = (id) => {
        const targetQuestion = this.questions.find(
            (p) => p.id === id
        );
        this.setState({
            question: targetQuestion
        })
    }

    render() {
        return (
            <div className="App">
                <QuestionFrame 
                    imgSrc={this.state.question.imageUrl} 
                    answers={this.state.question.answers}/>
                <Timer 
                    minutes={this.state.minutes} 
                    seconds={this.state.seconds} 
                    click={this.timerUpdateHandler} />
                <div>
                    <NavBar questions={this.questions} 
                    click={this.changeQuestionHandler} />
                </div>
                <div>
                    <button children='SUBMIT ANSWERS' />
                </div>
            </div>
        );
    }
}

export default App;