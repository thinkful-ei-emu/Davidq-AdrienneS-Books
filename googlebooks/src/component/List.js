import React from 'react';
import Book from './Book';
{/* <List list={this.state.list}/> */}
export default function List(props){

  let books= props.list.map((book,index)=>{
    let tempDiv = document.createElement('p');// to remove html encoding
    book.searchInfo ?  tempDiv.innerHTML = book.searchInfo.textSnippet: tempDiv.innerHTML = "No Description found";
    return <Book key={index} id={index} name={book.volumeInfo.title} authors={book.volumeInfo.authors} price={book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 0 } shortDesc={tempDiv.innerHTML} desc={book.volumeInfo.description} img={book.volumeInfo.imageLinks.thumbnail} showMore={props.showMore} show={props.show}/>;
  });

  return (
    <div className="col-center container">
      {books}
    </div>
  );
}