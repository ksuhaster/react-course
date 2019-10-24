import React from 'react';
import './styles.scss';

export const Tag = (props) => {
  return (
    <span className="tag">{ props.source }</span>
  )
};