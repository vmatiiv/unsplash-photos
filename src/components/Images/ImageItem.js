import React from 'react';
import { ReactComponent } from '*.svg';


function ImageItem({photo}){


    const image = React.createRef();


    console.log(photo);
    return(
    <div>
        <img ref={image} src={photo.urls.regular}></img>
    </div>
    )
}
export default ImageItem;