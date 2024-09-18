import React from 'react'
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({ setSearchModalOpen }) => {

const handleClickSearch =()=>{
    console.log("You just clicked")
    setSearchModalOpen(true)
}

  return (
    <div className="search-container" onClick={handleClickSearch}>
        <div className="search-input">
           <p> Search...</p>
           <FontAwesomeIcon className='icon' icon={faSearch} size="1x" />
        </div>
    </div>
  )
}

export default Search