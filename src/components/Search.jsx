import React from 'react';
import { useState } from 'react';

export const Search = (props) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    props.onSearchClick(search);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.onSearchClick(search);
    }
  };

  return (
    <>
      <div>
        Cari Artikel :
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
        ></input>
        <button onClick={onSearchClick}>Search</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata : {search}
      </small>
    </>
  );
};
