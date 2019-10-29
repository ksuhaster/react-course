import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { Article } from '../Article';
import { Loader } from '../../Assets/Loader';
import { useNews } from '../News/useNews';
import { history } from '../../navigation/history';
import { book } from '../../navigation/book';
import { useLocalStorage } from '../News/useLocalStorage';

export const NewsOne = () => {
  const { id } = useParams();
  const { posts } = useNews();
  const [ showLoader, setShowLoader ] = useState(true);
  const [ authenticated, setAuthenticated ] = useLocalStorage('authenticated', false);
  let location = useLocation();
  
  let article = null;
  
  const signout = () => {
    setAuthenticated(false);
    history.push({pathname: book.login, state: {from: location.pathname}})
  }

  for (var i = 0; i < posts.length; i++){
    if (posts[i].objectId === id){
      article = posts[i];
      break;
    }
  }

  useEffect(() => {
    if (!authenticated) {
      history.push({pathname: book.login, state: {from: location.pathname}})
    }
    if (posts.length > 0) {
      setShowLoader(false);
      if (article === null) {
        history.push(book.unknown)
      }
    }
  }, [posts, article]);

  return (
    <>
      { authenticated ? (
          <button onClick={ signout }>Sign out</button>
        ) : ''
      }

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
    </>
  )
};