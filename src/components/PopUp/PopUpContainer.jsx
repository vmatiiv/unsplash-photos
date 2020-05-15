import React, { useEffect, useState } from 'react'
import Popup from './Popup'
import { useParams } from 'react-router';
import { getPhoto } from '../../api/unsplash';

function PopUpContainer() {
    const [photo,setPhoto] = useState(null)
    let params = useParams();
    useEffect(()=>{
        (async () => {
            const response = await getPhoto(params.id)
            setPhoto(response.data)
        })()
    },[])
    console.log(photo);
    return   photo ? <Popup  {...photo}/> :null 
    
        
}

export default PopUpContainer
