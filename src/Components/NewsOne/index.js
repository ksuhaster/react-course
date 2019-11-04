import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { Article } from '../Article';
import { Loader } from '../../Assets/Loader';
import { useNews } from '../News/useNews';
import { history } from '../../navigation/history';
import { book } from '../../navigation/book';
import { useLocalStorage } from '../../helpers/useLocalStorage';

export const NewsOne = () => {

  // perms
  let location = useLocation();
  const [ authenticated, setAuthenticated ] = useLocalStorage('authenticated', false);
  if (!authenticated) {
    history.push({pathname: book.login, state: {from: location.pathname}})
  }

  const { id } = useParams();
  const { posts } = useNews();
  const [ showLoader, setShowLoader ] = useState(true);
  let article = null;

  // find article in JSON by id
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
  }, [posts, article, authenticated, location.pathname]);

  const signout = () => {
    setAuthenticated(false);
    history.push({pathname: book.login, state: {from: location.pathname}})
  }

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
          : null
        )}
      </section>
    </>
  )
};