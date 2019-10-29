import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  let article = null;
  
  const fakeAuth = {
    isAuthenticated: authenticated,
    authenticate(cb) {
        console.log('authenticate');
        setAuthenticated(true);
        cb();
    },
    signout(cb) {
        console.log('signout');
        setAuthenticated(false);
        cb();
    }
  };

  for (var i = 0; i < posts.length; i++){
    if (posts[i].objectId === id){
      article = posts[i];
      break;
    }
  }

  useEffect(() => {
    if (!authenticated) {
      history.push(book.login)
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
          <button
            onClick={() => {
                fakeAuth.signout(() => history.push("/login"));
            }}
            >
            Sign out
          </button>
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