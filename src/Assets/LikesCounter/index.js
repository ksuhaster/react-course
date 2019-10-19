import React from 'react';

import { useCounter } from './useCounter';

export const LikesCounter = (props) => {
  const { counter, increase } = useCounter(props.counts);

  return (
    <>
    <button onClick = { increase }>
    <i className="fa fa-heart"></i>
    &nbsp;
    { counter }
    </button>
    </>
  )
};