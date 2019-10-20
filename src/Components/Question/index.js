import React, { useState } from 'react';
import './styles.scss';

export const Question = (props) => {

  const [ currentOpen, setCurrentOpen ] = useState(undefined);

  const openQuestion = (e) => {
    let prevProfile = undefined;
    console.log('e', e);
    console.log('target.id', e.target.id);
    setCurrentOpen(() => {
      console.log("prev: ", prevProfile);
      if (typeof prevProfile !== 'undefined') {
        //close();
        console.log('trying to close answer', e.target.id)
      } else {
        //("answer" + e.target.id).style = { display: 'show' };
        console.log('trying to show answer', e.target.id);
      }
      prevProfile = e.target.id;
      console.log("prev: ", prevProfile);
      return e.target.id;
    })
  }

  return (
    <>
    <div className="question" onClick = {(e) => openQuestion(e) } id = {props.id}>
    { props.question }
    
    { currentOpen }
    
    <span className="question-sign">+</span>
    </div>
    <div className="answer" id = { "answer" + props.id }>{ props.answer }</div>
    </>
  )
};
