import React from 'react';
import './styles.scss';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';
import { Tag } from '../../Assets/Tag';

{/* повторение db - костыль, пока не нашла как пробросить article_obj */}
const db = [
    {
      id: 'H23GF4F4',
      title: 'American writer of bad cowboy stories arrived in',
      text: 'Volunteering to help people in need combined with travelling to',
      comments_cnt: 10,
      likes_cnt: 315,
      img: 'https://image.shutterstock.com/image-photo/beautiful-christmas-gift-boxes-on-600w-1165332937.jpg',
      tags: ['literature', 'books'],
    },
    {
      id: 'H33GF4F4',
      title: 'American writer of bad',
      text: 'Volunteering to help people in need combined with travelling to faraway places is a new trend',
      comments_cnt: 10,
      likes_cnt: 315,
      img: 'https://image.shutterstock.com/image-photo/various-types-mini-cactuszebra-plant-600w-1025332858.jpg',
      tags: ['literature', 'books'],
    },
    {
      id: 'H43GF4F4',
      title: 'American writer of bad cowboy stories arrived in',
      text: 'Volunteering to help people in need combined with travelling to faraway',
      comments_cnt: 10,
      likes_cnt: 316,
      img: 'https://image.shutterstock.com/image-photo/vinyl-record-player-bright-lights-600w-718664518.jpg',
      tags: ['literature', 'books'],
    },
]
let counter = 0;

export const Article = () => {
  const article_obj = db[counter++];
  {/* тоже надо пробрасывать дальше значения */}
  const tags = article_obj.tags.map(() => (
    <Tag />
  ));
  return (
    <>
        <div className="article">
            {/* как вставить background-image: {img}? */}
            <img className="article-img" src={ article_obj.img } />
            { tags }
            <h3><a className="article-title" href="/news/">{ article_obj.title }</a></h3>
            <p>{article_obj.text}</p>

            {/* как это правильно делается в современном мире? :) */}
            <table width="100%">
            <tr>
            <td align="left">15.07.2017</td>
            <td align="right">
                {/* этим тоже надо будет пробросить значения для отображения */}
                <CommentsCounter />
                <LikesCounter />
                <Share />
            </td>
            </tr>
            </table>

        </div>
    </>
  )
};