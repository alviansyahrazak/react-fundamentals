import React from 'react';
import { useState } from 'react';

export const Search = (props) => {
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    props.onSearchChange(value);
  };

  return (
    <>
      <div>
        Cari Artikel :<input type="text" onChange={onSearchChange}></input>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata : {search}
      </small>
    </>
  );
};
