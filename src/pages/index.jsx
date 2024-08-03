import React from 'react';
import { useState, useEffect } from 'react';
import postsData from '../posts.json';
import { Article } from '../components/Article';
import { Search } from '../components/Search';

export const Homepage = () => {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchClick = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setExternalPosts(data));
  }, []);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchClick={onSearchClick} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => (
        <Article {...{ title, tags, date, isNew }} key={index} />
      ))}
      <hr />
      <h1>External Posts</h1>
      {externalPosts.map((item, id) => (
        <div key={id}> {item.title}</div>
      ))}
    </>
  );
};
