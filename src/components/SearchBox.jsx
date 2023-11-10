import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

function SearchBox( search , setSearch , searchHandler) {
  return (
    <div>
        <input type='text' placeholder='Search title' value={search} onChange={ (e) => setSearch(e.target.value.toLowerCase()) }/>
        <button onClick={searchHandler}>
        
        <AiOutlineSearch />
        
        </button>
    </div>
  )
}

export default SearchBox