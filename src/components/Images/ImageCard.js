import React from 'react';
import ImageItem from './ImageItem';
import './ImageCard.css';

class ImageCard extends React.Component{

    state={
        warning:'',
    }

    onLoadin(arr){
         
            const photos = arr.map(x=><ImageItem  photo={x}/>)
            
            // return (arr.length===0?this.state.warning:photos)
            return photos;
    }


    // componentDidMount(){
    //     const warning = <div className="loading"> waiting on fetch data</div>
    //     this.setState({warning})
    // }

    componentDidUpdate(){

    }

    render(){
        
        return(
            <div className="ui  container">
                <div className="image-card">

                    {this.onLoadin(this.props.photos)}
                </div>

            </div>
        )
    }
}

export default ImageCard;