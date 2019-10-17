import React from 'react';
import { Article } from '../Article';

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

export const News = () => {
  {/* надо найти, как пробросить дальше article_obj */}
  const articles = db.map((article_obj) => (
    <Article />
  ));

  return (
    <>
      { articles }
    </>
  )
};