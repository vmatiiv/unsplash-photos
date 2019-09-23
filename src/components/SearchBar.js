import React from 'react'
import './SearchBar.css'
function SearchBar({search,fetchPhotos,setPhotos}) {
    
    return (
        <div className="searchBar">
            <form onSubmit={(e)=>{e.preventDefault(); fetchPhotos()}}>
                <input  type="text"  onChange={(e)=>{search(e.target.value)}}></input>
                <button className="submit" type="submit">submit</button>           
            </form>
        </div>
    )
}

export default SearchBar
