import React from 'react'
import './Booklist.css'
import Book from '../Book/Book';
import { books } from '../../books';


const Booklist = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
  <section className='booklist'>
        {books.map((book, index) => {
      return (
        <Book {...book} key={book.id} number={index} />
      )
    })}
      
  </section>
    </>
);
};

export default Booklist