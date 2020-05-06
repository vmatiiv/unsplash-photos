import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import {Link} from 'react-router-dom';

function ImageItem({photo}) {

    return (
        <li className="imageItem">

<Link to={`${photo.id}`}>            {/* <a href={photo.links.download+'?force=true'}> */}
            <ProgressiveImage src={photo.urls.regular} placeholder={photo.urls.thumb}>
                {src => <img className="photo" src={src} alt={photo.alt_description} />}
            </ProgressiveImage>
</Link>            {/* </a> */}
        </li>
    )
}





export default ImageItem
