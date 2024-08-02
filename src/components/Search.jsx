import React from 'react';

export const Search = (props) => {
  const onSearchChange = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <>
      <div>
        Cari Artikel :<input type="text" onChange={onSearchChange}></input>
      </div>
    </>
  );
};
