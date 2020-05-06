
import React,{useState} from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';
import {getPhotos} from '../api/unsplash';
import {Route,Switch} from 'react-router-dom';
import Popup from './Popup';
let pageNum=1;
let fetching = false;
function App() {

    const [photos,setPhotos]=useState([]);
    const [query,setQuery]=useState("");
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
            {/* <Switch> */}
                <Route path="/">
                    <SearchBar handleSubmit={handleSubmit} />
                    <ImageCard onScroll={onScroll} photos={photos}/> 
                </Route>
                <Route path="/:id" exact component={Popup} />
            {/* </Switch> */}
        </div>
    )
}

export default App