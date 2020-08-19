import React, { useState, useEffect } from 'react'
import { getUserCollections } from '../../api/unsplash'
import {  useParams } from 'react-router'
import Collections from './Collections';
import { Center } from '../../styles';
import photos from '../../img/empty-collections.jpg'
import Loader from '../common/Loader';


function CollectionsContainer() {
    const {username} = useParams();
    const [page,setPageNumber] = useState(1);

    const [collections,setCollections] = useState([])
    const [loading,setLoading] = useState(true);
    const [length,setLength] = useState(1);
    const [hasMore,setHasMore] = useState(true)
    useEffect(()=>{
        setLoading(true);
        hasMore && getUserCollections(username,page).then(x=>{
            setLoading(false);
            if(x.data.length<9) setHasMore(false)
            setCollections(x.data)
            setLength(x.data.length);
            console.log(x.data)
        })
    },[page,username])

    if(length===0){
        return <Center>
                    <div >
                        <img  style={{width:'100%'}} src={photos} alt=''/>
                    </div>
                </Center>
    }

    return <div >


        <Collections  setPageNumber={setPageNumber} collections={collections}/>
    </div>
}

export default CollectionsContainer
