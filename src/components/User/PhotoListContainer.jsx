import React from 'react'

import {  Outlet, useParams } from 'react-router';
import Photos from '../common/Photos';

function PhotoListContainer() {

    const {username} = useParams();

    const endpoint = `/users/${username}/photos`

    return <>
        <Outlet/>
        <Photos endpoint={endpoint}/>
    </>
}

export default PhotoListContainer
