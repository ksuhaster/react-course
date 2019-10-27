import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Article } from '../Article';
import { Loader } from '../../Assets/Loader';
import { useNews } from './useNews';

export const News = () => {
  const { posts } = useNews();
  const [showLoader, setShowLoader] = useState(true);

  const articles = posts.map(article => (
    <Article
      key = { article.objectId }
      {...article}
    />
  ));

  useEffect(() => {
    if (posts.length > 0) {
      setShowLoader(false);
    }
  }, [posts]);

  return (
    <section className = { styles.news }>
      {(showLoader ? <Loader  /> : '')}
      { articles }
    </section>
  )
};