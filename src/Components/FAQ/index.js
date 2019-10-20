import React from 'react';
import './styles.scss';
import { Question } from '../Question';

export const FAQ = (props) => {
    const questions = props.source.map((source_one, i) => (
        <Question
            key = { i }
            id = { source_one.id }
            question = { source_one.question }
            answer = { source_one.answer }
        />
    ));

    return (
        <>
        <h2 className="faq-text">PROJECT BRIEF</h2>
            { questions }
        </>
    )
  };