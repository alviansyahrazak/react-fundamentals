import React from 'react';

const NewArticle = () => {
  return <span>Article Baru!</span>;
};

export const Article = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, Tags: {props.tags.join(', ')}{' '}
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
};
