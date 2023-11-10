import React from 'react'


function BookCard( {data : {title , author , language , image , pages} }) {
  return (
    <div >
    <img src={image}/> 
    <p>{title}</p>
    <p>{author}</p>
    <p>{language}</p>
    <p>{pages}</p>
  </div>
  )
}

export default BookCard