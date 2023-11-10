import React from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";

function Book() {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} data={book} />
      ))}
    </div>
  );
}

export default Book;
