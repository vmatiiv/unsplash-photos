import React  from 'react'
import Popup from './Popup'
import { useParams } from 'react-router';
import useFetch from '../useFetch';
function PopUpContainer() {
    let linkParams = useParams();
    const mainPhotoEndpoint = `/photos/${linkParams.id}`
    let state= useFetch(mainPhotoEndpoint,{page:1}); 

    return  <Popup photo={state.items} loading={state.loading}/> 

}

export default PopUpContainer
