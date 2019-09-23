import React from 'react'
import ImageItem from './ImageItem'
import './ImageCard.css'

function ImageCard({photos}) {
    const imageItems = photos.map((x,index)=><ImageItem photo={x} key={index}/>);
    return (
        <div style={{textAlign:'center'}}>
            <div className="imageCard">
                {imageItems}
            </div>
        </div>
    )
}

export default ImageCard
