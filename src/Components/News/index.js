import React from 'react';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';


export const News = () => {
  const { posts } = useNews();

  const articles = posts.map((source_one) => (
    <Article
      key = { source_one.objectId }
      {...source_one}
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