
import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';

import {getPhotos} from '../api/unsplash';

function App() {

    const [photos,setPhotos]=useState([]);
    const [query,setQuery]=useState("");

    const handleSubmit = async (e,value) => {
        e.preventDefault();
        setPhotos([]);
        setQuery(value);
        
        try {
            const fetchedPhotos = await getPhotos(value);
            setPhotos(fetchedPhotos.data.results)
        } catch (error) {
            alert(error);            
        }
        
    }

    useEffect(()=>{
        let pageNum=1;

        async function onScroll (){
            if(window.scrollY+window.innerHeight+100 >= document.body.scrollHeight){
                pageNum = 3+pageNum;
                const fetchedPhotos = await getPhotos(query,pageNum,10);
                setPhotos([...photos,fetchedPhotos.data.results]);
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