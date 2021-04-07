import React from 'react';
import Header from '../components/Header.js';
import MainPost from '../components/Main.js';
import Post from '../components/Post.js';

const Main = () => {
  return (
    <div>
      <Header/>
      <MainPost/>
      <Post/>
    </div>
  );
};

export default Main;