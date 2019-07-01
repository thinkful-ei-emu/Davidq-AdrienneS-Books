import React from 'react';
import '../css/book.css';

export default function Book(props){
{/* <Book key={index} name={book.volumeInfo.title} authors={book.volumeInfo.authors} price={book.volumeInfo.saleInfo.listPrice.amount} desc={book.volumeInfo.description} img={book.volumeInfo.thumbnail}/>; */}
  console.log(props.desc);
  return (
    <div className="book col-full container" onClick={() => {
      props.showMore(props.id);
    }
     }>
      <img src={props.img} alt={props.name}/>
      <div className="col-center">
        <h1>{props.name}</h1>
        <p>{props.authors}</p>
        <p>Price: ${props.price}</p>
        <p>{props.shortDesc}</p>
        <p>{props.show ===  props.id && props.desc}</p>
      </div>
            
    </div>
  );
}