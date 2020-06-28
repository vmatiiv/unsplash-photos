import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Image = styled.img`
    width:100%;
    
`
function ImageItem({photo}) {
    return (

        <li>
            <Link to={{
                pathname: `${photo.id}`,
                state:{
                    photo:photo
                }
            }}>           
                <ProgressiveImage src={photo.urls.regular} placeholder={photo.urls.thumb}>
                    {src => <Image className="photo" src={src} alt={photo.alt_description} />}
                </ProgressiveImage>
            </Link>    
        </li>

    )
}





export default ImageItem
