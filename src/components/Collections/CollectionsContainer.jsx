import React, { useState, useEffect } from 'react'
import { getUserCollections } from '../../api/unsplash'
import {  useParams } from 'react-router'
import Collections from './Collections';
import { Center } from '../../styles';
import photos from '../../img/empty-collections.jpg'
import Loader from '../common/Loader';


function CollectionsContainer() {
    const {username} = useParams();

    const [collections,setCollections] = useState([])
    const [loading,setLoading] = useState(true);
    const [length,setLength] = useState(1);
    useEffect(()=>{
        setLoading(true);
        getUserCollections(username).then(x=>{
            setLoading(false);
            setCollections(x.data)
            setLength(x.data.length);
        })
    },[])

    if(loading){
        return <Loader/>
    }
    if(length===0){
        return <Center>
                    <div>
                        <img  style={{width:'100%'}} src={photos} alt=''/>
                    </div>
                </Center>
    }

    return <>
        <Collections collections={collections}/>
    </>
}

export default CollectionsContainer
