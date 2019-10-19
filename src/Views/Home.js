import React from 'react';
import './styles.scss';
import { Header } from '../Components/Header';
import { News } from '../Components/News';
import { FAQ } from '../Components/FAQ';

var source = require('./source.json');
var sourceFAQ = require('./sourceFAQ.json');

export const Home = () => {
  return (
    <>
        <h1>Home</h1>
        <Header />
        <News source = {source} />

        <FAQ source = { sourceFAQ } />
    </>
  )
};