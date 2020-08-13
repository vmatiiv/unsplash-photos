import React from 'react'
import { useParams } from 'react-router'

import Photos from '../common/Photos';

function CollectionPage() {
    const {id} = useParams();
    
    const endpoint = `/collections/${id}/photos`
    return <>
            <Photos endpoint={endpoint} />
    </>
}

export default CollectionPage
