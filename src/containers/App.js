import React, { Component } from 'react';
import classes from './App.css';
import QuestionFrame from '../components/QuizComponents/QuestionFrame';
import Timer from '../components/Sidebar/Timer';
import NavBar from '../components/Sidebar/NavBar';
import FeedbackBox from '../components/Feedback/FeedbackBox';
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
            ordinal: 1,
            imageUrl: ThirdsQuestion, 
            rightAnswer: 'e) 81',
            answers: [
                {value: 'a) 12', id: '1.1a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'b) 15', id: '1.1b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'c) 27', id: '1.1c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'd) 54', id: '1.1d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'e) 81', id: '1.1e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}],
            style: [classes.selectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties',
        },
        minutes: '15',
        seconds: '00',
        userAnswers: [],
        displayIntro: true,
        displayQuiz: false,
        displayResults: false
    }

    questions = [
        {
            id: 'q1.1',
            ordinal: 1,
            imageUrl: ThirdsQuestion, 
            rightAnswer: 'e) 81',
            answers: [
                {value: 'a) 12', id: '1.1a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'b) 15', id: '1.1b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'c) 27', id: '1.1c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'd) 54', id: '1.1d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}, 
                {value: 'e) 81', id: '1.1e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.1'}],
            style: [classes.selectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.2',
            ordinal: 2,
            imageUrl: MLessThanN, 
            rightAnswer: 'd) n^2 - m^2 is odd',
            answers: [
                {value: 'a) m is odd', id: '1.2a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.2'}, 
                {value: 'b) n is odd', id: '1.2b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.2'}, 
                {value: 'c) n - m is even', id: '1.2c', style: [classes.unselectedButton, 
                    classes.answerButton] , questionId: 'q1.2'}, 
                {value: 'd) n^2 - m^2 is odd', id: '1.2d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.2'}, 
                {value: 'm^2 + n^2 is even', id: '1.2e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.2'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.3',
            ordinal: 3,
            imageUrl: GraphProblem, 
            rightAnswer: 'd) IV',
            answers: [
                {value: 'a) I', id: '1.3a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.3'}, 
                {value: 'b) II', id: '1.3b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.3'}, 
                {value: 'c) III', id: '1.3c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.3'}, 
                {value: 'd) IV', id: '1.3d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.3'}, 
                {value: 'e) V', id: '1.3e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.3'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.4',
            ordinal: 4,
            imageUrl: TriangleProblem, 
            rightAnswer: 'e) 2(y + z)',
            answers: [
                {value: 'a) 2(y + z) + x', id: '1.4a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.4'}, 
                {value: 'b) 2(x + y + z)', id: '1.4b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.4'}, 
                {value: 'c) 2(x + y)', id: '1.4c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.4'}, 
                {value: 'd) 2(x + z)', id: '1.4d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.4'}, 
                {value: 'e) 2(y + z)', id: '1.4e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.4'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.5',
            ordinal: 5,
            imageUrl: TrigProblem, 
            rightAnswer: 'b) 0 < a2 < a1',
            answers: [
                {value: 'a) 0 < a1 < a2', id: '1.5a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.5'}, 
                {value: 'b) 0 < a2 < a1', id: '1.5b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.5'}, 
                {value: 'c) a1 < 0 < a2', id: '1.5c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.5'}, 
                {value: 'd) a1 < a2 < 0', id: '1.5d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.5'}, 
                {value: 'e) a2 < a1 < 0', id: '1.5e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.5'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.6',
            ordinal: 6,
            imageUrl: TrigIdentities, 
            rightAnswer: 'c) 2',
            answers: [
                {value: 'a) 0', id: '1.6a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.6'}, 
                {value: 'b) 1', id: '1.6b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.6'}, 
                {value: 'c) 2', id: '1.6c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.6'}, 
                {value: 'd) -tan(x)', id: '1.6d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.6'}, 
                {value: 'e) sin(2x)', id: '1.6e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.6'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.7',
            ordinal: 7,
            imageUrl: ValueOfB, 
            rightAnswer: 'a) 9',
            answers: [
                {value: 'a) 9', id: '1.7a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.7'}, 
                {value: 'b) -8', id: '1.7b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.7'}, 
                {value: 'c) -25', id: '1.7c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.7'}, 
                {value: 'd) -26', id: '1.7d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.7'}, 
                {value: 'e) 4 - 7sqrt(6)', id: '1.7e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.7'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.8',
            ordinal: 8,
            imageUrl: LogarithmProblem, 
            rightAnswer: 'd) 125',
            answers: [
                {value: 'a) 3', id: '1.8a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.8'}, 
                {value: 'b) 21', id: '1.8b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.8'}, 
                {value: 'c) 72', id: '1.8c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.8'}, 
                {value: 'd) 125', id: '1.8d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.8'}, 
                {value: 'e) 243', id: '1.8e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.8'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.9',
            ordinal: 9,
            imageUrl: PentagonQuadrilateral, 
            rightAnswer: 'c) 36',
            answers: [
                {value: 'a) 18', id: '1.9a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.9'}, 
                {value: 'b) 30', id: '1.9b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.9'}, 
                {value: 'c) 36', id: '1.9c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.9'}, 
                {value: 'd) 35', id: '1.9d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.9'}, 
                {value: 'e) 72', id: '1.9e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.9'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        },
        {
            id: 'q1.10',
            ordinal: 10,
            imageUrl: CubeProblem, 
            rightAnswer: 'e) 54',
            answers: [
                {value: 'a) 9', id: '1.10a', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.10'}, 
                {value: 'b) 18', id: '1.10b', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.10'}, 
                {value: 'c) 27', id: '1.10c', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.10'}, 
                {value: 'd) 36', id: '1.10d', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.10'}, 
                {value: 'e) 54', id: '1.10e', style: [classes.unselectedButton, 
                    classes.answerButton], questionId: 'q1.10'}],
            style: [classes.unselectedButton, classes.navButton],
            checkCorrect: false,
            reviewUrl: 'https://www.ixl.com/math/algebra-2/simplify-variable-expressions-using-properties'
        }
    ]

    userAnswers = [];

/// *###### TIMER ######*

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

/// *###### NAVIGATION ######*

    startQuiz = () => {
        this.timerUpdateHandler();
        this.setState ({
            displayIntro: false,
            displayQuiz: true,
            displayResults: false
        })
    }

    changeQuestionHandler = (id) => {
        const targetQuestion = this.questions.find(
            (p) => p.id === id
        );
        this.setState({
            question: targetQuestion
        })
    }

    navStyleHandler = (id) => {
        for(var i=0; i<this.questions.length; i++) {
            this.questions[i].style = [classes.unselectedButton, classes.navButton];
        }

        const targetQuestion = this.questions.findIndex(
            (p) => p.id === id
        );

        this.questions[targetQuestion].style = 
        [classes.selectedButton, classes.navButton];
    }

    questionNavigation = (id) => {
        this.changeQuestionHandler(id);
        this.navStyleHandler(id);
    }

    checkCorrectHandler = () => {
        for(var i=0; i<this.questions.length; i++){
            if(this.questions[i].rightAnswer === this.state.userAnswers[i]){
                this.questions[i].checkCorrect = true;
            }
        }
    }

    displayFeedbackHandler = () => {
        this.setState ({
            displayIntro: false,
            displayQuiz: false,
            displayResults: true
        })
    }

    finishQuiz = () => {
        var confirmDone = window.confirm('Are you sure you want to submit your answers?');
        if(confirmDone){
            this.checkCorrectHandler();
            this.displayFeedbackHandler();
        }
    }

/// *###### ANSWER HANDLING ######*

    storeAnswerHandler = (id) => {
        console.log(this.userAnswers);
        const targetAnswer = this.state.question.answers.find(
            (p) => p.id === id
        );

        this.userAnswers[this.state.question.ordinal-1] = 
            targetAnswer.value;

        this.setState({
            userAnswers: this.userAnswers
        }) 
    }

    answerStyleHandler = (questionId, answerId) => {
        const targetQuestion = this.questions.findIndex(
            (p) => p.id === questionId
        );
    
        const targetAnswer = this.state.question.answers.findIndex(
            (p) => p.id === answerId
        );

        for(var i = 0; i<5; i++) {
            this.questions[targetQuestion].answers[i].style
                = [classes.unselectedButton, classes.answerButton];
        }

        this.questions[targetQuestion].answers[targetAnswer].style = 
        [classes.selectedButton, classes.answerButton];

        this.setState({
            question: this.questions[targetQuestion]
        })
    }

    chooseAnswer = (questionId, answerId) => {
            this.answerStyleHandler(questionId, answerId);
            this.storeAnswerHandler(answerId);
    }

    render() {

        let quizScreen  = null;
        let introScreen = null;
        let feedbackScreen = null;

        if(this.state.displayIntro) {
            introScreen = (
                <div className = {[classes.container,
                    classes.cadetBlue,
                    classes.col,
                    classes.startPadding].join(' ')}>
                    <p children='You will have fifteen minutes to complete ten questions drawn from a real ACT exam. 
                        Press begin when you are ready to start.' />
                    <button className={classes.unselectedButton} onClick={this.startQuiz} children = 'Begin' />
                </div>
            )
        }

        if(this.state.displayQuiz) {
            quizScreen = ( 
                <div className={classes.App}>
                    <div className={classes.emptyContainer} />
                    <QuestionFrame 
                        imgSrc={this.state.question.imageUrl} 
                        answers={this.state.question.answers}
                        styling={this.applyAnswerStylingHandler}
                        click={this.chooseAnswer}/>
                    <div className={[classes.container,
                        classes.col, 
                        classes.sidebarPadding].join(' ')}>
                        <Timer 
                            minutes={this.state.minutes} 
                            seconds={this.state.seconds} 
                            click={this.timerUpdateHandler} />
                        <div className={[classes.container,
                            classes.cadetBlue,
                            classes.col,
                            classes.navPadding].join(' ')}>
                        <p children='QUESTION NAVIGATION'/>
                            <div className={[classes.container,
                                classes.navRow].join(' ')}>
                                <NavBar questions={this.questions} 
                                click={this.questionNavigation} 
                                maxRange={4}
                                minRange={0}/>
                            </div>
                            <div className={[classes.container,
                                classes.navRow].join(' ')}>
                                <NavBar questions={this.questions} 
                                click={this.questionNavigation} 
                                minRange={5}
                                maxRange={10}/>
                            </div>
                        </div>
                        <div className={[classes.container,
                            classes.cadetBlue,
                            classes.col,
                            classes.submitPadding].join(' ')}>
                            <button children='SUBMIT ANSWERS'
                            className={classes.unselectedButton}
                            onClick={this.finishQuiz} />
                        </div>
                    </div>
                </div>
            );
        }

        if(this.state.displayResults){
            feedbackScreen = (
                <FeedbackBox questions={this.questions}/>
            );
        }

        return (
            <div>
                {introScreen}
                {quizScreen}
                {feedbackScreen}
            </div>
        )
    }
}
export default App;