import React, { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import SideBar from "./SideBar";
import styles from "./Books.module.css";

function Book() {
  const [likedList, setLikedList] = useState([]);

  const handleLikedList = (data, status) => {
    if (!status) {
      const newLikedList = likedList.filter((item) => {
        item.id != data.id;
      });
      setLikedList(newLikedList);
    } else {
      setLikedList((likedList) => [...likedList, data]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLikedList={handleLikedList}
          />
        ))}
      </div>
      <div className={styles.favorite}>
          <h4>Favorites</h4>
        {!!likedList.length && (
          <div>
            {" "}
            {likedList.map((book) => (
              <SideBar key={book.id} data={book} />
            ))}{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
