import React from 'react';


export default function Book(props){
{/* <Book key={index} name={book.volumeInfo.title} authors={book.volumeInfo.authors} price={book.volumeInfo.saleInfo.listPrice.amount} desc={book.volumeInfo.description} img={book.volumeInfo.thumbnail}/>; */}
  return (
    <div>
      <img src={props.img}/>
      <h1>{props.name}</h1>
      <p>Price: ${props.price}</p>
      <p>{props.desc}</p>
      
      
    </div>
  );
}