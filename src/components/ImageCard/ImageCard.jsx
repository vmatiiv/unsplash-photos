import React from 'react'
import ImageItem from './ImageItem'
import styled from 'styled-components';
import {Outlet} from 'react-router-dom';
const List = styled.ul`
    list-style: none;
    padding: 0;
    margin:0;
    column-gap: 1em;
    column-count: 1;
`
const Alo = styled.div`

`
const Wrapper = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    min-width:100%;
    height:94vh;
    padding: 0;
    margin: 0;


    @media (min-width:768px){
        ${List}{
            column-count: 2;
        }
    }
    @media (min-width:1080px){
        padding: 0 1rem;
    

        ${List}{
            column-count:3;
        }
    }
    @media (min-width:1920px){
        ${List}{
            column-count:4;
        }
    }
`


function ImageCard({photos,onScroll}) {
    const imageItems = photos.map((item)=>
    <List>

        {item.map(x=><ImageItem photo={x} key={x.id}/>)}
 
    </List> 
    );


    return (
            <Wrapper className="imageCard" onScroll={onScroll} >
                <Outlet/>
                <Alo >
                     {imageItems}
                </Alo>
            </Wrapper>

    )
}

export default ImageCard
