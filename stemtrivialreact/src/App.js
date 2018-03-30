import React, { Component } from 'react';
import './App.css';
import {Welcome} from './components/Welcome';
import {Game} from './components/Game';



class App extends Component {
  constructor () {
    super()
    this.state = {
      isWelcome: true,
      isGame : false,
      isResult: false
    }
    this.indexOfCuestion = 0;
    this.questionText = "Testing text";
    this.questionType ="Testing type";
    this.answers={
      answer1:"testing 1",
      answer2:"testing 2",
      answer3:"testing 3"
    };
    this.checked = false;
    this.questions=[
      {
        questionText:"Probando primera pregunta",
        questionType: "Testing1",
        answers:{
          answer1: "testing11",
          answer2: "testing12",
          answer3: "testing13"
        }
      },
      {
        questionText:"Probando segunda pregunta",
        questionType: "Testing2",
        answers:{
          answer1: "testing21",
          answer2: "testing22",
          answer3: "testing23"
        }
      },
      {
        questionText:"Probando tercera pregunta",
        questionType: "Testing3",
        answers:{
          answer1: "testing31",
          answer2: "testing32",
          answer3: "testing33"
        }
      }
    ]
  }
  startGame() {
    this.setState({
     isWelcome: false,
     isGame : true,
     isResult: false
    });
    //TODO: leer de json
    this.questionText = this.questions[0].questionText;
    this.questionType = this.questions[0].questionType;
    this.answers = this.questions[0].answers;
  }

  nextQuestion(){
    this.indexOfCuestion ++;
    //TODO: calcular si es acierto
    debugger;
    if(this.indexOfCuestion < this.questions.length){
      this.questionText = this.questions[this.indexOfCuestion].questionText;
      this.questionType = this.questions[this.indexOfCuestion].questionType;
      this.answers = this.questions[this.indexOfCuestion].answers;
    } else{
      //TODO: preparar para resultado
      this.setState({
        isWelcome: false,
        isGame : false,
        isResult: false
       });
    }
    this.forceUpdate();
    
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
          onClick={() => { this.nextQuestion() }}
          questionType ={this.questionType}
          questionText = {this.questionText} 
          answers= {this.answers}
          checked = {this.checked}
          />
        </div>
        : null}
      </div>
    );
  }
}

export default App;
