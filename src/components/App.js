
import React,{useState} from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import {getPhotos} from '../api/unsplash';
let pageNum=1;

function App() {

    const [photos,setPhotos]=useState([]);
    const [query,setQuery]=useState("");
    const [fetching,setFetching] = useState(false);

    const handleSubmit = async (e,value) => {
        e.preventDefault();
        pageNum=1;
        setPhotos([]);
        setQuery(value);
        
        try {
           fetchPhoto(value,30,pageNum)
        } catch (error) {
            alert(`${error.response.data} please try later`)      
        }
        
    }

    const fetchPhoto =async  (query,perPage,pageNumber) => {
        console.log('fetching')
        const fetchedPhotos = await getPhotos(query,perPage,pageNumber);
        setPhotos([...photos,...fetchedPhotos.data.results]);
    }
    const onScroll = async  (e) => {
        const scrolled = e.target.scrollTop + e.target.offsetHeight;
        const scrollHeight = e.target.scrollHeight
        if(scrolled > scrollHeight*0.90 && !fetching){
            console.log('fetching')
            pageNum++;
            await fetchPhoto(query,10,pageNum);
            setFetching(true);

        }
// console.log(e.target.scrollHeight,'height')
// console.log(e.target.scrollTop + e.target.offsetHeight,'top')
//         scrollHeight: 3267
// scrollLeft: 0
// scrollTop: 3
// scrollWidth: 1132
    }

    return (
        <div >
            <SearchBar handleSubmit={handleSubmit} />
            <ImageCard onScroll={onScroll} photos={photos}/> 
        </div>
    )
}

export default App