import React from 'react';

import './search-bar.style.css';

const SearchBar = () => {
    return (
      <div className= "search-bar-container">
          <input type="text" placeholder="Search..."/>
          <br/>
          <input type="checkbox"/> Only show products in stock
      </div>   
   );
}

export default SearchBar;