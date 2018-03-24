import React, { Component } from 'react';
import welcomeImage from '../images/STEMbienvenida.jpg';
//'../images/STEMbienvenida.jpg'

export class Welcome extends Component {
    render() {
      return (
        <div className="welcomeDiv">
            <img src={welcomeImage}/>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>Jugar</button>
        </div>
      );
    }
  }
  
