
import React,{useState,useEffect,Suspense} from 'react';

import unsplash from '../api/unsplash';
// import ImageCard from './ImageCard';
import SearchBar from './SearchBar';

const ImageCard = React.lazy(()=>import('./ImageCard'));


function App() {

    const [photos,setPhotos]=useState([]);
    const [search,setSearch]=useState('');
    // const [pages,setPages]=useState(0);
    let pages = Math.ceil(window.innerHeight/160*(window.innerWidth/250));

    const [pageNum,setPageNum]=useState(0);

    const fetchPhotos = async () =>{
        const result = await unsplash.get('/search/photos',
        {
            params:{
                query:search,
                per_page:Math.ceil(window.innerHeight/160*(window.innerWidth/250)),
            }
        });
        console.log(result);
            setPhotos(result.data.results);
            console.log(pages);

            setPageNum(Math.ceil(pages/10)+1);
        
    };
    const addPhotos = async () => {
        const result = await unsplash.get('/search/photos',
        {
            params:{
                query:search,
                per_page:pages,
                page:pageNum
            }
        });
        let arr =[...photos];
        result.data.results.forEach(x=>arr.push(x));
        setPhotos(arr);
        // setPhotos(result.data.results);


    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll)

        return () => {
            window.removeEventListener('scroll',onScroll);
        }
    });
    const onScroll = ()=>{

        if(window.scrollY+window.innerHeight===document.body.scrollHeight){
            setPageNum(pageNum+1);

            addPhotos();
        }

        
    }
    return (
        <div>
            <SearchBar search={setSearch} setPhotos={setPhotos} fetchPhotos={fetchPhotos}/>
            <Suspense fallback={<div>Loading...</div>}>
                <ImageCard photos={photos}/>
            </Suspense>
        </div>
    )
}

export default App