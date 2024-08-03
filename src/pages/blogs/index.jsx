import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../../components/Search';

export const Blog = () => {
  const [totalPosts, setTotalPosts] = useState(0);
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const onSearchClick = (value) => {
    const filteredPosts = allPosts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setAllPosts(data);
        setTotalPosts(data.length);
      });
  }, []);

  return (
    <>
      <h1>External Posts</h1>
      <Search onSearchClick={onSearchClick} totalPosts={totalPosts} />
      {posts.map((item) => (
        <div key={item.id}>
          <Link to={`/blog/${item.id}`}>
            {item.id} - {item.title}
          </Link>
        </div>
      ))}
    </>
  );
};
