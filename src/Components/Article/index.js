import React from 'react';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';
import { Tag } from '../../Assets/Tag';
import styles from './styles.module.scss';

export const Article = (article) => {
  
  var tags_arr = article.tags.split(',').map(item => item.trim());
  const tags_group = tags_arr.map((tag, i) => (
    <div key = {i}>
      <Tag source = { tag }
      />
    </div>
  ));

  var created = new Date(article.created)
  const created_formatted = ('0' + created.getDate()).slice(-2) + '.'
    + ('0' + (created.getMonth()+1)).slice(-2) + '.'
    + created.getFullYear();

  return (
    <section className = { styles.article }>
      <header>
        <div className={styles.poster}>
          <img src={ article.poster } alt={ article.title }/>
        </div>
        <div className={styles.tags}>
        { tags_group }
        </div>
      </header>
      <article>
        <h3><a className="article-title" href="/news/">{ article.title }</a></h3>
        <p>{article.description}</p>
      </article>
      <footer>
        <span>{ created_formatted }</span>
        &nbsp;
        <span className={styles.controls}>
          <CommentsCounter counts = { article.comments } />
          &nbsp;
          <LikesCounter counts = { article.likes } />
          &nbsp;
          <Share />
        </span>
      </footer>
    </section>
  )
};
