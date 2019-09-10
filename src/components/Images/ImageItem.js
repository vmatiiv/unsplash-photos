import React from 'react';


class ImageItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            spans:null
        }
        this.image = React.createRef();
    }

    componentDidMount(){

        this.image.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{

        const height = this.image.current.clientHeight;

        const spans = Math.ceil(height/10);
        this.setState({spans});
    }
    render(){
        return(
        <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            <a href={this.props.photo.links.download+'?force=true'}  download>
                <img  ref={this.image} alt={this.props.photo.description} src={this.props.photo.urls.regular} />
            </a>
        </div>
        )
    }
}
export default ImageItem;