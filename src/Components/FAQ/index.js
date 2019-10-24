import React, { useState } from 'react';
import './styles.scss';

export const FAQ = () => {
    const source = require('./sourceFAQ.json')

    const [ whoOpen, setWhoOpen ] = useState(false);

    const clickQuestion = (i) => {
      setWhoOpen(() => {
        if (i === whoOpen) {
            return null;  // same question, close
        } else {
            return i;
        };
      })
    }

    const questions = source.map((source_one, i) => (
        <div key = { 'question' + i }>
            <div className="question" onClick = {() => clickQuestion(i) }>
                { source_one.question }
                <span className="question-sign" key = { 'question-sign' + i }>
                    {(whoOpen === i ? '-' : '+')}
                </span>
            </div>

            <div className={"answer " + (whoOpen === i ? 'answer-show' : 'answer-hide')}>
                { source_one.answer }
            </div>
        </div>
    ));

    return (
        <>
        <h2 className="faq-text">PROJECT BRIEF</h2>
            { questions }
        </>
    )
  };