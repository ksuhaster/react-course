import React from 'react';

export const CommentsCounter = (props) => {
  return (
    <>
      <i className="fa fa-comment"></i>
      &nbsp;
      { props.counts }
    </>
  )
};