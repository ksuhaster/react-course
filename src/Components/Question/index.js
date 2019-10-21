import React, { useState } from 'react';
import './styles.scss';

export const Question = (props) => {

  const [ isOpen, setIsOpen ] = useState(false);

  const clickQuestion = (e) => {
    console.log('clickQuestion');
    setIsOpen(() => {
      console.log('setIsOpen');
      //console.log('target.id', e.target.id);
      return !isOpen;
    })
  }

  /*
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

  onClick = {(e) => openQuestion(e) }
  */

  return (
    <>
      <div className="question"
           id = {props.id}
           onClick = {(e) => clickQuestion(e) }>
        { props.question }
        <span className="question-sign">+</span>
      </div>
      
      <div className={"answer " + (isOpen ? 'answer-show' : 'answer-hide')}
          id = { "answer" + props.id }>
          { props.answer }
      </div>
    </>
  )
};


