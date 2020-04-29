import React from 'react';
import ProgressiveImage from 'react-progressive-image';
  

function ImageItem({photo}) {
    return (
        <li className="imageItem" >
            {/* <a href={photo.links.download+'?force=true'}> */}
            <ProgressiveImage src={photo.urls.regular} placeholder={photo.urls.thumb}>
                {src => <img className="photo" src={src} alt={photo.alt_description} />}
            </ProgressiveImage>
                {/* <img  className="photo" src={photo.urls.regular} alt={photo.alt_description}></img> */}
            {/* </a> */}
        </li>
    )
}





export default ImageItem
