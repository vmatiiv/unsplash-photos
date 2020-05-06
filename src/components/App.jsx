
import React,{useState, useEffect} from 'react';
import SearchBar from './Navigation/SearchBar';
import ImageCard from './ImageCard/ImageCard';
import {getPhotos, getAllPhotos} from '../api/unsplash';
import { Routes,Route, Link } from 'react-router-dom';

import Popup from './PopUp/Popup';
import UserInfo from './PopUp/UserInfo';
let pageNum=1;
let fetching = false;
function App() {


    const [photos,setPhotos]=useState([]);
    const [query,setQuery]=useState("");

    useEffect(()=>{
        ( async () => {
            const results = await getAllPhotos();
            console.log(results)
            setPhotos(results.data)
        })()
    },[])

    window.photos = photos;
    const handleSubmit = async (e,value) => {
        e.preventDefault();
        pageNum=1;
        setQuery(value);
        try {
            fetching = true;
           fetchPhoto(value,10,pageNum,[])
        } catch (error) {
            alert(`${error.response.data} please try later`)      
        }
        
    }

    const fetchPhoto = async  (query,perPage,pageNumber,photosArray) => {
        const fetchedPhotos = await getPhotos(query,perPage,pageNumber);
        setPhotos([...photosArray,...fetchedPhotos.data.results]);
        fetching=false;
    }
    const onScroll =   (e) => {
        const scrolled = e.target.scrollTop + e.target.offsetHeight;
        const scrollHeight = e.target.scrollHeight
        if(scrolled > scrollHeight*0.90 && !fetching){
            pageNum++;
            fetching = true;
            fetchPhoto(query,10,pageNum,photos);
        }
    }
    const main = () => {
        return (
        <> 
            <SearchBar handleSubmit={handleSubmit} />
            <ImageCard onScroll={onScroll} photos={photos}/> 
        </>
        )
    }
    return (
        <div >
            {/* <Switch> */}
            <Routes>
                <Route path="/" element={main()}/>

                <Route path=":id/*" element={<Popup />} />

            </Routes>
            {/* </Switch> */}
        </div>
    )
}

export default App