import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </>
  );
};
