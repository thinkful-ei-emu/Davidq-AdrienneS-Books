import React from 'react';
import Book from './Book';
{/* <List list={this.state.list}/> */}
export default function List(props){

  let books= props.list.map((book,index)=>{
    return <Book key={index} name={book.volumeInfo.title} authors={book.volumeInfo.authors} price={book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 0 } desc={book.volumeInfo.description} img={book.volumeInfo.imageLinks.thumbnail}/>;
  });

  return (
    <div>
      {books}
    </div>
  );
}