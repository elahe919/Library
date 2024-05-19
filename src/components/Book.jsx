import React, { useState, useEffect } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideBar from "./SideBar";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

function Book() {
  const [books, setBooks] = useState(bookData);
  const [likedList, setLikedList] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedList = (data, status) => {
    if (status) {
      if (!likedList.some((item) => item.id === data.id)) {
        setLikedList([...likedList, data]);
      }
    } else {
      const newLikedList = likedList.filter((item) => item.id !== data.id);
      setLikedList(newLikedList);
    }
  };

  useEffect(() => {
    if (search) {
      
        const newBooks = bookData.filter((book) =>
          book.title.toLowerCase().includes(search)
        );
        setBooks(newBooks);
      
    } else {
      setBooks(bookData);
    }
  }, [search]);

  return (
    <>
      <SearchBox
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
      />
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
              {likedList.map((book) => (
                <SideBar key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Book;
