import React from 'react';

{/* <Search handleSearch={this.updateSearchTerm}/> */}
export default function Search(props){


  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      console.log(document.getElementById('searchBar').value);
      props.handleSearch(document.getElementById('searchBar').value);
    }}>
      <label htmlFor="searchBar">Search:</label>
      <input id="searchBar" name="searchBar" type="text" placeholder="Dr. Suese"/>
      <button type="submit">search</button>
    </form>
  );
}