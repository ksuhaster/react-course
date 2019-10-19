import React from 'react';
import './styles.scss';
import { useAccordeon } from './useAccordeon';

export const Question = (props) => {
  const { counter, open } = useAccordeon(undefined);

  return (
    <>
    {/* XXX как в open пробросить текущий props.key? */}
    <div className="question" onClick = { open }>
    { props.question }
    { counter }
    <span className="question-sign">+</span>
    </div>
    <div className="answer">{ props.answer }</div>
    </>
  )
};
