

import React, { Component } from 'react';

export class Game extends Component {
  constructor(props){
    super(props);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

    selectAnswer(answerNumber){
      this.props.parentToggle(answerNumber);
    }

    render() {
      return (
        <div className="gameDiv" >
            <h1>{this.props.questionType}</h1>
            <h2 className="questionText">{this.props.questionText}</h2>
                <div className="questionOptions">
                  <button onClick={() => { this.selectAnswer(0) }}>{this.props.answers.answer1}</button>
                  <button onClick={() => { this.selectAnswer(1) }}>{this.props.answers.answer2}</button>
                  <button onClick={() => { this.selectAnswer(2) }}>{this.props.answers.answer3}</button>
                </div>
                
        </div>
      );
    }
  }