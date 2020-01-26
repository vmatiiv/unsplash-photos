import React from 'react'
import ImageItem from './ImageItem'
import './ImageCard.css'

function ImageCard({photos}) {
    const imageItems = photos.map((x)=><ImageItem photo={x} key={x.id}/>);

    return (
        <div style={{textAlign:'center'}}>
            <div className="imageCard">
               <ul>
                    {imageItems}
               </ul>
            </div>
        </div>
    )
}

export default ImageCard
