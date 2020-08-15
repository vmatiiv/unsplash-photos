import React from 'react'

import { useParams } from 'react-router';
import Photos from '../common/Photos';
import SearchBar from '../Navigation/SearchBar';

function HomeContainer() {
    const {query} = useParams();
    const endpoint = query ? '/search/photos' : '/photos'
    return (
        <>
            <SearchBar/>

            <Photos endpoint={endpoint} item={query}/>
        </>
    )
}

export default HomeContainer
