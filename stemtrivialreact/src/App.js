import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Welcome} from './components/Welcome';
import {BodyImage} from './images/gaming-pattern.png';

class App extends Component {

  startGame() {
  }

  render() {
    return (
      <div className="App" >
        <div className="WelcomeDiv" >
          <Welcome onClick={this.startGame()} 
          text='Bienvenido a STEM Trivial!¿Dispuesto a conocer tu nivel de conocimiento sobre las mujeres en las STEM?'/>
        </div>
      </div>
    );
  }
}

export default App;
