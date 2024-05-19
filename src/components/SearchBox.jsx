import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import styles from "./SearchBox.module.css";

function SearchBox( {value , onChange , onClick}) {
  return (
    <div className={styles.searchDiv}>
        <input type='text' placeholder='Search title' value={value} onChange={onChange}/>
        <button onClick={onClick}>
        
        <AiOutlineSearch />
        
        </button>
    </div>
  )
}

export default SearchBox