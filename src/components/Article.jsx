import { React, useContext } from 'react';
import { GlobalContext } from '../context';

const NewArticle = () => {
  return <span>Article Baru!</span>;
};

export const Article = (props) => {
  const creator = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, Tags: {props.tags.join(', ')}{' '}
        {props.isNew && <NewArticle />}
      </small>
      <div>
        <small>create by {creator.username}</small>
      </div>
    </>
  );
};
