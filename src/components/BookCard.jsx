import React, { useEffect, useState } from "react";
import styles from "./BookCard.module.css";
import {AiFillHeart} from "react-icons/ai"

function BookCard({ data ,  handleLikedList}) {

  const { title, author, language, image, pages } = data ;
  
  
  const [like , setLike] = useState(false)
  const likeHandler = () => {
    setLike((like => !like));
    
  }

  useEffect (() => {
    handleLikedList(data , like)
 } , [like] )

  
  return (
    <div className={styles.each_card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages}</span>
        </div>
      </div>
      <button onClick={likeHandler} className={styles.like_button} >
        <AiFillHeart color={ like ? "red" : "white" } fontSize={"1.5rem"}  />
      </button>
    </div>
  );
}

export default BookCard;
