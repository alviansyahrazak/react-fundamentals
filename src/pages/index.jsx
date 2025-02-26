import { useState } from 'react';
import postsData from '../posts.json';
import { Article } from '../components/Article';
import { Search } from '../components/Search';

export const Homepage = () => {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchClick = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchClick={onSearchClick} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => (
        <Article {...{ title, tags, date, isNew }} key={index} />
      ))}
    </>
  );
};
