
import React,{useState} from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';
import {getPhotos} from '../api/unsplash';

let pageNum=1;
let fetching = false;
function App() {

    const [photos,setPhotos]=useState([]);
    const [query,setQuery]=useState("");
    // const [fetching,setFetching] = useState(false);

    const handleSubmit = async (e,value) => {
        e.preventDefault();
        pageNum=1;
        setPhotos([]);
        setQuery(value);
        
        try {
           fetchPhoto(value,10,pageNum)
        } catch (error) {
            alert(`${error.response.data} please try later`)      
        }
        
    }

    const fetchPhoto =async  (query,perPage,pageNumber) => {
        const fetchedPhotos = await getPhotos(query,perPage,pageNumber);
        setPhotos([...photos,...fetchedPhotos.data.results]);
        fetching=false;
    }
    const onScroll =   (e) => {
        const scrolled = e.target.scrollTop + e.target.offsetHeight;
        const scrollHeight = e.target.scrollHeight
        if(scrolled > scrollHeight*0.90 && !fetching){
            pageNum++;
            fetching = true;
            fetchPhoto(query,10,pageNum);
        }
    }

    return (
        <div >
            <SearchBar handleSubmit={handleSubmit} />
            <ImageCard onScroll={onScroll} photos={photos}/> 
        </div>
    )
}

export default App