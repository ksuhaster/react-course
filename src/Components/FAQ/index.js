import React from 'react';
import './styles.scss';
import { Question } from '../Question';

export const FAQ = (props) => {
    const questions = props.source.map((source_one, i) => (
        <Question
            key = { i }
            question = { source_one.question }
            answer = { source_one.answer }
        />
    ));

    return (
        <>
            { questions }
        </>
    )
  };