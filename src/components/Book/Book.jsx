import React from "react";
import "./Book.css";

const Book = (props) => {
  const { author, title, img, published, number} = props;
  
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 className='author'>{author}</h4>
      <span className='number'>{`# ${ number + 1}`}</span>
      <p>{published}</p>
    </article>
  );
};
export default Book;
