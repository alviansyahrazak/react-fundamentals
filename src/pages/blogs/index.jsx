import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../../components/Search';
import { useLoaderData } from 'react-router-dom';

export const Blog = () => {
  const posts = useLoaderData();
  const [allPosts, setAllPosts] = useState(posts);
  const [totalPosts, setTotalPosts] = useState(posts.length);

  const onSearchClick = (value) => {
    const filteredPosts = posts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );

    setAllPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <>
      <h1>External Posts</h1>
      <Search onSearchClick={onSearchClick} totalPosts={totalPosts} />
      {allPosts.map((item) => (
        <div key={item.id}>
          <Link to={`/blog/${item.id}`}>
            {item.id} - {item.title}
          </Link>
        </div>
      ))}
    </>
  );
};
