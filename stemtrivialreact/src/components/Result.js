import React, { Component } from 'react';
import bronzeResultImage from '../images/bronce.jpg';
import goldResultImage from '../images/oro.jpg';
import silverResultImage from '../images/plata.jpg';
import loserResultImage from '../images/loser.png';
//'../images/STEMbienvenida.jpg'

export class Result extends Component {
    constructor(props){
        super(props);
        this.resultImage = null;
        switch(this.props.text){
            case "Bronze":
                this.resultImage = bronzeResultImage;
                break;
            case "Silver":
                this.resultImage = silverResultImage;
                break;
            case "Gold":
                this.resultImage = goldResultImage;
                break;
            default:
                this.resultImage = loserResultImage;
        }
      }

    render() {
      return (
        <div className="resultDiv">
            <img alt="Imagen de resultado final" className= "resultImage" src={this.resultImage}/>
            <h1>{this.props.text}</h1>
            <h2>{this.props.explanation}</h2>
            <button onClick={this.props.onClick}>Volver a jugar</button>
        </div>
      );
    }
  }
