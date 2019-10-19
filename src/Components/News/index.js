import React from 'react';
import { Article } from '../Article';

export const News = (props) => {
  const source = props.source;
  const articles = source.map((source, i) => (
    <Article source = { source }/>
  ));

  return (
    <>
      { articles }
    </>
  )
};