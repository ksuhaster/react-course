import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';

export const News = () => {
  const { posts } = useNews();
  const [showLoader, setShowLoader] = useState(true);

  const articles = posts.map((source_one) => (
    <Article
      key = { source_one.objectId }
      {...source_one}
    />
  ));

  useEffect(() => {
    if (posts.length > 0) {
      setShowLoader(false);
    }
  }, [posts]);

  return (
    <>
      <div className="grey">
        <span className={(showLoader ? 'loader-show' : 'loader-hide')}>Загрузка данных...</span>
        { articles }
      </div>
    </>
  )
};