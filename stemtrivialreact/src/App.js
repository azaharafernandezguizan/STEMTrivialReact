import React, { Component } from 'react';
import './App.css';
import {Welcome} from './components/Welcome';
import {Game} from './components/Game';
import {Result} from './components/Result';


class App extends Component {
  constructor () {
    super()
    this.state = {
      isWelcome: true,
      isGame : false,
      isResult: false
    }
    this.indexOfCuestion = 0;
    this.numberOfValidResponses = 0;
    this.resultText ="";
    this.resultExplanation="";
    this.nextQuestion = this.nextQuestion.bind(this);
    this.data = require('./data/questions.json');
    this.totalQuestions = this.data.questionList;
    
  }
  startGame() {
    this.indexOfCuestion = 0;
    this.numberOfValidResponses = 0;
    this.resultText ="";
    this.resultExplanation="";

    this.setState({
     isWelcome: false,
     isGame : true,
     isResult: false
    });
    this.questions = this.getRandomQuestions( this.totalQuestions, 16, 8);
  }

  getRandomQuestions(questions, totalNumberOfQuestions, amountQuestionsSelected){
    const resultArrayQuestions = [];
    const choosedNumbers = [];
    let count = 0;

    do {
      const actualNumber = Math.floor((Math.random() * totalNumberOfQuestions));

      if (choosedNumbers.indexOf(actualNumber) === -1) {
         choosedNumbers.push(actualNumber);
         resultArrayQuestions.push(questions[actualNumber]);
         count++;
      }
    }while (count < amountQuestionsSelected);

    return resultArrayQuestions;
 }


  nextQuestion(selectedAnswer){
    if(selectedAnswer === this.questions[this.indexOfCuestion].correctAnswer){
        this.numberOfValidResponses++;
    }
    this.indexOfCuestion ++;
    if(this.indexOfCuestion >= this.questions.length){
      this.fillResultText();
      this.setState({
        isWelcome: false,
        isGame : false,
        isResult: true
       });
    }
    this.forceUpdate();
    
  }

  fillResultText() {
    const questionsCount = this.questions.length;

    if (this.numberOfValidResponses >= (questionsCount * 0.9)) {
      this.resultText = 'Gold';
      this.resultExplanation = 'Has acertado ' + this.numberOfValidResponses + ', medalla de oro, enhorabuena!';
    } else if (this.numberOfValidResponses >= (questionsCount * 0.7)) {
      this.resultText = 'Silver';
      this.resultExplanation = 'Has acertado ' + this.numberOfValidResponses + ', medalla de plata!';
    } else if (this.numberOfValidResponses >= (questionsCount * 0.5)) {
      this.resultText = 'Bronze';
      this.resultExplanation = 'Has acertado ' + this.numberOfValidResponses + ', medalla de bronce!';
    } else {
      this.resultText = 'No ha habido suerte';
      this.resultExplanation = 'Prueba suerte la próxima vez!';
    }
  }

  render() {
    return (
      <div className="App" >
      {this.state.isWelcome ? 
        <div className="WelcomeDiv" >
          <Welcome onClick={() => { this.startGame() }} 
          text='Bienvenido a STEM Trivial!¿Dispuesto a conocer tu nivel de conocimiento sobre las mujeres en las STEM?'/>
        </div>
        : null}

        {this.state.isGame ? 
        <div className="WelcomeDiv" >
          <Game 
          parentToggle={this.nextQuestion}
          questionType ={this.questions[this.indexOfCuestion].questionType}
          questionText = {this.questions[this.indexOfCuestion].questionText} 
          answers= {this.questions[this.indexOfCuestion].answers}
          />
        </div>
        : null}

        {this.state.isResult ? 
        <div className="ResultDiv" >
          <Result onClick={() => { this.startGame() }} 
              text= {this.resultText}
              explanation= {this.resultExplanation}
          />
        </div>
        : null}
      </div>
    );
  }
}

export default App;
