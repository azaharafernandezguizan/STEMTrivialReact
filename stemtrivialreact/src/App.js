import React, { Component } from 'react';
import './App.css';
import {Welcome} from './components/Welcome';


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
