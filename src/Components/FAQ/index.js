import React, { useState } from 'react';
import './styles.scss';

export const FAQ = (props) => {

    const [ whoOpen, setWhoOpen ] = useState(false);

    const clickQuestion = (i) => {
      setWhoOpen(() => {
        if (i === whoOpen) {
            return undefined;  // same question, close
        } else {
            return i;
        };
      })
    }

    const questions = props.source.map((source_one, i) => (
        <>
        <div className="question"
                key = { 'question' + i }
                onClick = {() => clickQuestion(i) }>
            { source_one.question }
            <span className="question-sign">
                {(whoOpen === i ? '-' : '+')}
            </span>
        </div>

        <div className={"answer " + (whoOpen === i ? 'answer-show' : 'answer-hide')}
            key = { "answer" + i }>
            { source_one.answer }
        </div>
        </>
    ));

    return (
        <>
        <h2 className="faq-text">PROJECT BRIEF</h2>
            { questions }
        </>
    )
  };