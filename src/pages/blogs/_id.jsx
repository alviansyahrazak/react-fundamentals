import { useLoaderData } from 'react-router-dom';

export const SinglePost = () => {
  const post = useLoaderData();

  return (
    <>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </>
  );
};
