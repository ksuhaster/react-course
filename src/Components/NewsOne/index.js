import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { Article } from '../Article';
import { Loader } from '../../Assets/Loader';
import { useNews } from '../News/useNews';
import { history } from '../../navigation/history';
import { book } from '../../navigation/book';

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
      if (article === null) {
        history.push(book.unknown)
      }
    }
  }, [posts, article]);

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