import React from 'react';
import posts from '../posts.json';
import { Article } from '../components/Article';

export const Homepage = () => {
  return (
    <>
      <h1>Simple Blog</h1>
      {posts.map((post, index) => (
        <Article key={index} title={post.title} date={post.date} tags={post.tags} />
      ))}
    </>
  );
};
