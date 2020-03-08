
import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';

import {getPhotos} from '../api/unsplash';
let pageNum=1;

function App() {

    const [photos,setPhotos]=useState([]);
    const [query,setQuery]=useState("");

    const handleSubmit = async (e,value) => {
        e.preventDefault();
        pageNum=1;
        setPhotos([]);
        setQuery(value);
        
        try {
            const fetchedPhotos = await getPhotos(value);
            setPhotos(fetchedPhotos.data.results)
        } catch (error) {
            alert(`${error.response.data} please try later`)      
        }
        
    }

    useEffect(()=>{

        console.log(pageNum);
        async function onScroll (){
            if(window.scrollY+window.innerHeight+100 >= document.body.scrollHeight){
                pageNum++;
                const fetchedPhotos = await getPhotos(query,10,pageNum);
                setPhotos([...photos,...fetchedPhotos.data.results]);
            }  
        }
        window.addEventListener('scroll',onScroll)

        return () => {
            window.removeEventListener('scroll',onScroll);
        }
    });

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} />
            <ImageCard photos={photos}/> 

        </div>
    )
}

export default App