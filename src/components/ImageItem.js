import React,{useState,useEffect} from 'react';

function ImageItem({photo}) {

    const img = React.createRef();

    const [spans, setSpans]=useState(0);



    const Spans = ()=>{
        let height = Math.ceil(img.current.height/10);
        setSpans(height);

    };
    return (
        <div className="imageItem" 
        onLoad={(e)=>{
            // e.target.style.display="grid";
            e.currentTarget.style.gridRowEnd='span '+Math.ceil(e.target.height/10);
            // e.target.style.height='13px'; 
            console.log(e.currentTarget);           
            }}
            >
            <img ref={img} className="photo" src={photo.urls.regular} alt={photo.alt_description}></img>

        </div>
        // <div>
        //     // {/* <a href={photo.links.download+'?force=true'} download> */}
        //         // {/* <img ref={img} className="photo" src={photo.urls.regular} alt={photo.alt_description}></img> */}
        //     // {/* </a> */}
        // // {/* </div> */}
    )
}


export default ImageItem
