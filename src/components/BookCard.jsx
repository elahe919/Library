import React, { useState } from "react";
import styles from "./BookCard.module.css";
import {AiFillHeart} from "react-icons/ai"

function BookCard({ data: { title, author, language, image, pages } }) {

  const [like , setLike] = useState(false)
  const likeHandler = () => {
    setLike((like => !like));
    if(like){

    }
  }

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
