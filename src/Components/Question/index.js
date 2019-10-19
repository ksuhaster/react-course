import React, { useState } from 'react';
import './styles.scss';

export const Question = (props) => {
  const [ counter, setCounter ] = useState(undefined);

  const increase = () => {
    console.log('increase ');
    setCounter((prevCounter) => prevCounter + 1);
  }

  const decrease = () => {
    console.log('decrease');
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
    <div className="question" onClick = { increase }>
    { props.question }
    { counter }
    <span className="question-sign">+</span>
    </div>
    <div className="answer">{ props.answer }</div>
    </>
  )
};
