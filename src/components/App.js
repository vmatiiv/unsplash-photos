
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
    const [total,setTotal]=useState(1);
    const [pageNum,setPageNum]=useState(0);

    const fetchPhotos = async () =>{
        const result = await unsplash.get('/search/photos',
        {
            params:{
                query:search,
                per_page:Math.ceil(window.innerHeight/160*(window.innerWidth/250)),
            }
        });
            setPhotos(result.data.results);
            setPageNum(Math.ceil(pages/10)+1);
            setTotal(result.data.total);
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
        console.log(result);

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
    
    const wrongRequest = () =>{
        if(total===0){
           return <div>Wrong request</div>
        }
        return(
            <Suspense fallback={<div>Loading...</div>}>
                <ImageCard photos={photos}/>
            </Suspense>
        )
    }
    return (
        <div>
            <SearchBar search={setSearch} setPhotos={setPhotos} fetchPhotos={fetchPhotos}/>
            {wrongRequest()}

        </div>
    )
}

export default App