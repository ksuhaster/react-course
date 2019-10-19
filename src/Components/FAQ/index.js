import React from 'react';
import './styles.scss';
import { useAccordeon } from './useAccordeon';

export const FAQ = (props) => {
    const { counter, open } = useAccordeon(undefined);
    const questions = props.source

    return (
      <>
      <span className="question" onClick = { open }>
      z
      { counter }
      z
      </span>
      </>
    )
  };