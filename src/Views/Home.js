import React from 'react';
import './styles.scss';
import { Header } from '../Components/Header';
import { News } from '../Components/News';

export const Home = () => {
  return (
    <>
        <h1>Home</h1>
        <Header />
        <News />
    </>
  )
};
