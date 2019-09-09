import React from 'react';
import ImageItem from './ImageItem';
import './ImageCard.css';

class ImageCard extends React.Component{

    onLoadin(arr){
        if(arr.length==0){
            return (<div className="loading"> waiting on fetch data</div>)
        }
            const photos = arr.map(x=><ImageItem key={x.id} photo={x}/>)
            return photos
    }



    render(){
        
        return(
            <div className="ui container image-card">
                {this.onLoadin(this.props.photos)}
            </div>
        )
    }
}

export default ImageCard;