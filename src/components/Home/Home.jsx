import React, { useEffect, useRef } from 'react'
import {Outlet} from 'react-router-dom';
import Masonry from './Masonry';

import { useState } from 'react';


const  Home = ({loading,hasMore,query,setPageNum,photos})=> {
    const [myPhotos,setMyPhotos] = useState([]);
    const [lastQuery,setLastQuery] = useState(query);
    const someRef = useRef(<div></div>);
    useEffect(()=>{
        if(!loading){
            setMyPhotos(prev=>{
                if(lastQuery !== query) {
                    setLastQuery(query)
                    return []
                }
                return [...prev,...photos]
            })    
            
        }
    },[photos,loading,query])
    

    return (
        <div>

            <Outlet/>
            <div ref={someRef} style={{height:"95vh"}}>
                 {myPhotos.length ? <Masonry  hasMore={hasMore} target={someRef.current}  setPageNum={setPageNum} photos={myPhotos}/> : <></>}
            </div>
        </div>
    )
}


export default Home
