import React from 'react'
import './SearchBar.css'

function SearchBar({handleSubmit}) {
    let query="";
    const handleInputChange = (e) =>{
        query=e.target.value
    }

    return (

        <div className="searchBar">
            <form onSubmit={(e)=>handleSubmit(e,query)}>
                <input  type="text"  onChange={handleInputChange}></input>
            </form>
        </div>
    )
}

export default SearchBar
