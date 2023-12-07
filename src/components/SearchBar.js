import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className='search-bar'>
        <span className='material-icon'>email</span>
        <input type='text' placeholder='Enter your email address'/>
        <button className='lets-talk-button'>Let's Talk</button>
    </div>
  )
}

export default SearchBar