import React from 'react';



function ImageItem({photo}){


    const image = React.createRef();

    return(
    <div>
        <a href={photo.links.download+'?force=true'}  download>
        <img ref={image} alt={photo.description} src={photo.urls.regular} />
        </a>
    </div>
    )
}
export default ImageItem;