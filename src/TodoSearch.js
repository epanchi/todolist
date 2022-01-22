import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const onSearchValueChange= (e)=>{
    console.log(e.target.value);
  };
  return (
    <input className="TodoSearch" placeholder="Buscar"
    onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
