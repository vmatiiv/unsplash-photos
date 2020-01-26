import React,{useEffect, useState} from 'react'
import './SearchBar.css'
import unsplash from '../api/unsplash'

let query = '';
let pageNum = 1;
let tr  =[]
function SearchBar({setPhotos,photos}) {
    let pages = Math.ceil(window.innerHeight/160*(window.innerWidth/250));
    // const [query,setQuery]= useState('');
    
    const fetchPhotos = async (query,pageNum=0) =>{
        console.log(query);
        console.log(pageNum,'my number');
        
        const result = await unsplash.get('/search/photos',
        {
            params:{
                query:query,
                per_page:pages,
                page:pageNum
            }
        });
        // console.log(result.data.results);
        tr=[...photos,...result.data.results];
        console.log(tr);
            setPhotos([...photos,...result.data.results]);
    };

    useEffect(()=>{
        console.log('rerendered');
        function onScroll(){
            if(window.scrollY+window.innerHeight===document.body.scrollHeight){
                pageNum = pageNum+1;
                    fetchPhotos(query,pageNum);
                    console.log(query)

                console.log('bottom')
            }  
        }
        window.addEventListener('scroll',onScroll)

        return () => {
            window.removeEventListener('scroll',onScroll);
        }
    });

    return (

        <div className="searchBar">
            <form onSubmit={(e)=>{e.preventDefault(); fetchPhotos(query); }}>
                <input  type="text"  onChange={(e)=>{query=e.target.value;}}></input>
                <button className="submit" type="submit">submit</button>           
            </form>
        </div>
    )
}

export default SearchBar
