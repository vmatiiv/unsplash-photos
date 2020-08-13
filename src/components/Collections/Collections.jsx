import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
const Wrapper = styled.div`
    width:100%;
    height:100%;
    padding:1rem;
    body{
        overflow-y:scroll;
    }
`



const Collection = styled.div`
    display:flex;
    width:100%;
    height:100%;
    border-radius:6px;
`
const Img = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
    left:0;
    position:absolute;
`
const Grid = styled.div`
    display:grid;
    grid-gap: 3rem 1.5rem;
    @media (min-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr))
    }
    @media (min-width:992px){
        grid-template-columns:repeat(3,minmax(0,1fr))
    }
    @media (max-width:767px){
        grid-template-columns:repeat(1,minmax(0,1fr));
    }
`
const ImageDiv = styled.div`
    width:${props => props.width};
    height:289px;
    position:relative;
    /* background-color:#f5f5f5; */
    ${props => props.primary && css`
        display:flex;
        flex-direction:column;  
        margin-left:2px;
  `}
`
const SmallImageDiv = styled.div`
    flex-grow:1;
    position:relative;
    width:100%;
    height:100%;
    background-color:#f5f5f5;
    margin-bottom:${props => props.margin && '2px'};
`;
function Collections({collections}) {
    const collectionsList = collections.map(item => <CollectionPreview  key={item.id} id={item.id} photos={item.preview_photos} total_photos={item.total_photos} title={item.title}/> )
    return (
        <Wrapper >
            <Grid>
                {collectionsList}
            </Grid> 
        </Wrapper>
    )
}

const CollectionPreview = ({photos,id,title,total_photos}) => {

    const photosList = total_photos > 0 && photos.map((item,index)=> {
        if(index === 0) return <Img key={item.id} src={item.urls.regular}/> 
            return <Img key={item.id}  src={item.urls.thumb} alt=""/>
        })

    return <Link to={`/collection/${id}`}>
        <div style={{position:"relative"}}> 
            <Collection>
                <ImageDiv width={'70%'}>
                    <SmallImageDiv>
                        {photosList[0]}
                    </SmallImageDiv>
                </ImageDiv>
                <ImageDiv width={'30%'} primary>

                        <SmallImageDiv margin>
                            {photosList[1]}
                        </SmallImageDiv>
                        <SmallImageDiv>
                            {photosList[2]}
                        </SmallImageDiv>
                </ImageDiv>
            </Collection>
            <h2>{title}</h2>
            <p>{total_photos} photos</p>
        </div>
    </Link>

}

export default Collections
