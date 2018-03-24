

import React, { Component } from 'react';

export class Game extends Component {
    render() {
      return (
        <div className="gameDiv" >
            <h1>{this.props.questionType}</h1>
            <h2 className="questionText">{this.props.questionText}</h2>
                <div className="questionOptions">
                    <input type="radio"  checked="false"/>{this.props.answerText}
                </div>
                <button onClick = "nextQuestion()">Jugar</button>
        </div>
      );
    }
  }