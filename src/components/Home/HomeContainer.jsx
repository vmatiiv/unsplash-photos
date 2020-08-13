import React from 'react'

import { useParams } from 'react-router';
import Photos from '../common/Photos';

function HomeContainer() {
    const {query} = useParams();
    const endpoint = query ? '/search/photos' : '/photos'
    return (
        <>
            <Photos endpoint={endpoint} item={query}/>
        </>
    )
}

export default HomeContainer
