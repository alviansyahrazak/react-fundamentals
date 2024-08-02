import React from 'react';

export const Article = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, Tags: {props.tags.join(', ')}
      </small>
    </>
  );
};
