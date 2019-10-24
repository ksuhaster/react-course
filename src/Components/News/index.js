import React from 'react';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';


export const News = () => {
  const { posts } = useNews();

  const articles = posts.map((source_one) => (
    <Article
      key = { source_one.objectId }
      title = { source_one.title }
      description = { source_one.description }
      created = { source_one.created }
      likes = { source_one.likes }
      comments = { source_one.comments }
      poster = { source_one.poster }
      tags = { source_one.tags }
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