import React, { useEffect, useState } from 'react'
import Popup from './Popup'
import { useParams } from 'react-router';
import { getPhoto,getUserPhotos } from '../../api/unsplash';

function PopUpContainer() {
    const [photo,setPhoto] = useState(null)
    const [morePhotos,setMorePhotos] = useState(null)
    let params = useParams();
    useEffect(()=>{
        (async () => {
            const response = await getPhoto(params.id)
            setPhoto(response.data)
            console.log(response);
            const morePhotos = await getUserPhotos(response.data.user.username)
            setMorePhotos(morePhotos)
        })()
    },[])
    return   photo ? <Popup  photo={photo} morePhotos={morePhotos}/> :null 
    
        
}

export default PopUpContainer
