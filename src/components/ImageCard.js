import React from 'react'
import ImageItem from './ImageItem'
import './ImageCard.css'

function ImageCard({photos,onScroll}) {

    const imageItems = photos.map((x)=><ImageItem photo={x} key={x.id}/>);


    return (

            <div className="imageCard" onScroll={onScroll} >
               <ul>
                    {imageItems}
               </ul>
            </div>

    )
}

export default ImageCard
