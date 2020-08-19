import React from 'react'
import { useParams } from 'react-router'

import Photos from '../common/Photos';
import { Center } from '../../styles';

function CollectionPage() {
    const {id,title} = useParams();
    
    const endpoint = `/collections/${id}/photos`
    return <Center>
        <div>
            <h1>{title}</h1>
            <Photos endpoint={endpoint} />
        </div>
    </Center>
}

export default CollectionPage
