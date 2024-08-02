import React from 'react';
import { useState } from 'react';
import postsData from '../posts.json';
import { Article } from '../components/Article';
import { Search } from '../components/Search';

export const Homepage = () => {
  const [posts, setPosts] = useState(postsData);
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (value) => {
    setSearchValue(value);
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setPosts(filteredPosts);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearch={onSearchChange} />
      <div>
        <small>
          Ditemukan {posts.length} data dengan pencarian kata : {searchValue}
          {posts.length === 0 ? 'tidak ditemukan' : ''}
        </small>
      </div>
      {posts.map(({ title, tags, date }, index) => (
        <Article {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
};
