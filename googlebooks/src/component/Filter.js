import React from 'react';


export default class Filter extends React.Component{

 filterChange(newObject) {
  this.props.handleFilter(newObject);
}


  render(){
  return (
    <div>
      <label htmlFor='print-type'>Print type:</label>
      <select name='print-type' onChange={(e) => this.filterChange({printType: e.target.value})}> 
        <option value='all'>All</option>
        <option value='magazines'>Magazines</option>
        <option value='books'>Books</option>
      </select>
      <label htmlFor='book-type'>Book type:</label>
      <select name='book-type' onChange={(e) => this.filterChange({filter: e.target.value})}> 
        <option value=''>No Filter</option>
        <option value='ebooks'>Ebooks</option>
        <option value='free-ebooks'>Free Ebooks</option>
        <option value='full'>Full</option>
        <option value='paid-ebooks'>Paid Ebooks</option>
        <option value='partial'>Partial</option>
      </select>
    </div>
  );
  }
}