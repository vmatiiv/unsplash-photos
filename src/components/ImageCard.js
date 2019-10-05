import React from 'react'
import ImageItem from './ImageItem'
import './ImageCard.css'

function ImageCard({photos}) {
    const imageItems = photos.map((x,index)=><ImageItem photo={x} key={index}/>);
    // const wrongRequest = () =>{
    //     if(photos.length===0){
    //         console.log('gnida');
    //     }
    // }
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
