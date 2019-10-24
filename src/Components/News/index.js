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
        <span className={(posts.length === 0 ? 'loader-show' : 'loader-hide')}>Загрузка данных...</span>
        { articles }
      </div>
    </>
  )
};