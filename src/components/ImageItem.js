import React from 'react';


const style = {
    maxHeight: '100%',
    minHeight:'100%',
    minWidth: '100%',
    maxWidth:window.innerWidth,
    objectFit: 'fill',
    objectPosition: 'center'
}
function ImageItem({photo}) {


    return (
        
        <li className="imageItem" >
            <a href={photo.links.download+'?force=true'}>
                <img  className="photo" style={style} src={photo.urls.regular} alt={photo.alt_description}></img>
            </a>

      
         </li>

    )
}


export default ImageItem
