import React from 'react';
import './styles.scss';
import { Article } from '../Article';

export const News = (props) => {
  const source = props.source;
  const articles = source.map((source_one, i) => (
    <Article
      key = { i }
      title = { source_one.title }
      description = { source_one.description }
      published = { source_one.published }
      likes = { source_one.likes }
      comments = { source_one.comments }
      image = { source_one.image }
      tags = { source_one.tags }
    />
  ));

  return (
    <>
      <div className="grey">
        { articles }
      </div>
    </>
  )
};