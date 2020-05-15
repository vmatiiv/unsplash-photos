import React from 'react'
import ImageItem from './ImageItem'
import styled from 'styled-components';
import {Outlet} from 'react-router-dom';
const Wrapper = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    min-width:100%;
    height: 80vh;
    padding: 0;
    margin: 0;

    &::-webkit-scrollbar{
      display:none;
    }
    @media (min-width:768px){
        ul{
            column-count: 2;
        }
    }
    @media (min-width:1080px){
        padding: 0 1rem;
    
        &::-webkit-scrollbar {
            display:block;
        }
        ul{
            column-count:3;
        }
    }
    @media (min-width:1920px){
        ul{
            column-count:4;
        }
    }
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin:0;
    column-gap: 1em;
    column-count: 1;
`
function ImageCard({photos,onScroll}) {

    const imageItems = photos.map((x)=><ImageItem photo={x} key={x.id}/>);


    return (
            <Wrapper className="imageCard" onScroll={onScroll} >
                <Outlet/>
                <List>
                     {imageItems}
                </List>
            </Wrapper>

    )
}

export default ImageCard
