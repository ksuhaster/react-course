import React from 'react';
import styles from './styles.module.scss';

export const CommentsCounter = (props) => {
  return (
    <span className={styles.cmomentsCounter}>
      <i className="fa fa-comment"></i>
      { props.counts }
    </span>
  )
};