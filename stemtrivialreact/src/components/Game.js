

import React, { Component } from 'react';

export class Game extends Component {
    render() {
      return (
        <div className="gameDiv" >
            <h1>{this.props.questionType}</h1>
            <h2 className="questionText">{this.props.questionText}</h2>
                <div className="questionOptions">
                    <input type="radio"  checked={ this.props.checked }/>{this.props.answers.answer1}
                    <input type="radio"  checked={ this.props.checked }/>{this.props.answers.answer2}
                    <input type="radio"  checked={ this.props.checked }/>{this.props.answers.answer3}
                </div>
                <button onClick={this.props.onClick}>Jugar</button>
        </div>
      );
    }
  }