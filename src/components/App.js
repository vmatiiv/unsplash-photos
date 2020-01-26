
import React,{useState,useEffect} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';


function App() {

    const [photos,setPhotos]=useState([]);

 



    // const tryit = async () => {
    //     const result = await unsplash.get('/search/photos',
    //     {
    //         params:{
    //             query:'girls',
    //             per_page:pages,
    //             page:2
    //         }
    //     });
    //     setPhotos([...photos,...result.data.results])
    //     console.log(photos,'my photos');
    // }

    const getPhotos = () =>{

        if(photos && photos.length) return <ImageCard photos={photos}/>
        return null
    }
    return (
        <div>
            <SearchBar setPhotos={setPhotos} photos={photos} />
            {getPhotos()}

            {/* <button onClick={tryit}>just push</button> */}
        </div>
    )
}

export default App