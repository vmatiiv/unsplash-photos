import React from 'react';

function ImageItem({photo}) {

    const img = React.createRef();
    console.log(photo);
    return (
        <li className="imageItem" >

            <a href={photo.links.download+'?force=true'} download><img ref={img} className="photo"  src={photo.urls.regular} alt={photo.alt_description}></img></a>

      
        // </li>
        //     // {/* <a href={photo.links.download+'?force=true'} download> */}
        //         // {/* <img ref={img} className="photo" src={photo.urls.regular} alt={photo.alt_description}></img> */}
        //     // {/* </a> */}
        // // {/* </div> */}
    )
}


export default ImageItem
