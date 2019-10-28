import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { Article } from '../Article';
import { Loader } from '../../Assets/Loader';
import { useNews } from '../News/useNews';

export const NewsOne = () => {
  const { id } = useParams();
  const { posts } = useNews();
  const [showLoader, setShowLoader] = useState(true);
  let article = null;
  
  for (var i = 0; i < posts.length; i++){
    if (posts[i].objectId === id){
      article = posts[i];
      break;
    }
  }

  useEffect(() => {
    if (posts.length > 0) {
      setShowLoader(false);
    }
  }, [posts]);

  return (
    <section className = { styles.news }>
      {(showLoader ? <Loader  /> : '')}
      {(article ?
        <Article
          key = { article.objectId }
          {...article}
        />
        : ''
      )}
    </section>
  )
};