import React from 'react';

function ImageItem({photo}) {

    return (
        <li className="imageItem" >

            <a href={photo.links.download+'?force=true'}>
                <img  className="photo"  src={photo.urls.regular} alt={photo.alt_description}></img>
            </a>

      
         </li>

    )
}


export default ImageItem
