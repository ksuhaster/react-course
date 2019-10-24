import React from 'react';
import './styles.scss';
import { useCounter } from './useCounter';

export const LikesCounter = (props) => {
  const { counter, increase } = useCounter(props.counts);

  return (
    <>
      <span className="heart" onClick = { increase }>
        <i className="fa fa-heart"></i>
        &nbsp;
        { counter }
      </span>
    </>
  )
};