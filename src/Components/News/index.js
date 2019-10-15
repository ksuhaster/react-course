import React from 'react';
import { Button } from '../../Assets/Button';

const db = [
    {
        id: 'H23GF4F4',
        title: 'Hot news 1'
    },
    {
        id: 'H23GF4F1',
        title: 'Hot news 2'
    },
    {
        id: 'H23GF4F8',
        title: 'Hot news 3'
    }
]

export const News = () => {
  const articles = db.map(({title, id}) => (
    <li key={ id }>{title}</li>
  ));

  return (
    <>
        <h2>News</h2>
        <ul>
          { articles }
        </ul>
        <Button />
    </>
  )
};