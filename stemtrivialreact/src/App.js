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
    this.questions=[
      {
        questionText:"Probando primera pregunta",
        questionType: "Testing1",
        answers:{
          answer1: "testing11",
          answer2: "testing12",
          answer3: "testing13"
        },
        correctAnswer : 0
      },
      {
        questionText:"Probando segunda pregunta",
        questionType: "Testing2",
        answers:{
          answer1: "testing21",
          answer2: "testing22",
          answer3: "testing23"
        },
        correctAnswer : 1
      },
      {
        questionText:"Probando tercera pregunta",
        questionType: "Testing3",
        answers:{
          answer1: "testing31",
          answer2: "testing32",
          answer3: "testing33"
        },
        correctAnswer : 2
      }
    ]
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
    //TODO: leer de json
  }

  nextQuestion(selectedAnswer){
    if(selectedAnswer === this.questions[this.indexOfCuestion].correctAnswer){
        this.numberOfValidResponses++;
    }
    this.indexOfCuestion ++;
    debugger;
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
