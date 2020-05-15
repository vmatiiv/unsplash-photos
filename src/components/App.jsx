
import React,{useState, useEffect} from 'react';
import SearchBar from './Navigation/SearchBar';
import ImageCard from './ImageCard/ImageCard';
import {getPhotos, getAllPhotos} from '../api/unsplash';
import { Routes,Route, Link } from 'react-router-dom';

import Popup from './PopUp/Popup';
import UserInfo from './PopUp/UserInfo';
import PopUpContainer from './PopUp/PopUpContainer';
let pageNum=1;
let fetching = false;
function App() {


    const [photos,setPhotos]=useState([]);
    const [query,setQuery]=useState("");

    useEffect(()=>{
        ( async () => {
            const results = await getAllPhotos();
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
    return (
        <div >
            <SearchBar handleSubmit={handleSubmit} />
            <Routes>
                <Route path="/*" element={<ImageCard onScroll={onScroll} photos={photos}/> }>
                    <Route path=":id/*" element={<PopUpContainer/>} >
                        <Route path="user" element={<UserInfo user={"ivan"}/>}/>
                        <Route path="collections" element={<h1>collections</h1>}/>
                        <Route path="photo" element={<h1>photo</h1>}/>
                    </Route>
                </Route>
                <Route path="/:userId" element={<h1></h1>}/>
            </Routes>
        </div>
    )
}

export default App