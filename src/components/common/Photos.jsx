import React, { useCallback, useState } from 'react'
import useFetch from '../useFetch';
import Home from '../Home/Home';
import photos from '../../img/empty-photos.jpg'
import {Center,Img} from '../../styles'
import Loader from './Loader';
function Photos({endpoint,item}) {
    const [pageNum,setPageNum]=useState(1);
    const params = {page:pageNum,query:item};

    const increment = useCallback(()=>{
        setPageNum(prev=> prev+1);
    },[setPageNum])
    
    const state = useFetch(endpoint,params)
    if(state.loading){
        return <Loader/>
    }
    if(state.loading === false && state.items.length === 0){
        return <Center>
            <div>
                <img  style={{width:'100%'}} src={photos} alt=''/>
            </div>
            </Center>
    }
    return (
        <>

            {state.hasError && <div>Can`t find photos by your query</div>}
            
            <Home loading={state.loading} hasMore={state.hasMore} photos={state.items} query={item} setPageNum={increment} />   
        </>
    )
}

export default Photos
