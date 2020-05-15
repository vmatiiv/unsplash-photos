import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image';
import { getUserPhotos,getPhoto } from '../../api/unsplash';
import UserInfo from './UserInfo';
import { Link, Outlet,useParams,useLocation,Navigate   } from 'react-router-dom';
import { useState } from 'react';
const Wrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    min-width:100%;
    min-height:100%;
    background-color: rgba(0,0,0,0.5);
`

const Content = styled.div`
    position:absolute;
    top:0;
    right:0;
    background-color:#fff;
    margin: 0 auto;
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:1fr;
    @media (min-width:768px){
        grid-template-columns:1fr 1fr;
        width:70%;
    }
`

const Img = styled.img`
    width:300px;
    height:300px;
`
function Popup({urls,alt_description,links:{download},description,user,exif}) {
    const downloadUrl = download+'?force=true';
    const [goBack,setGoBack] = useState(false);
    // const userPhotos = async () => {
    //     const response = await getUserPhotos(state.user.username)
    //     return response
    // }
    // const onLoad = (e) => {
    //     console.log(e.target)
    //     e.target.focus();
    

    // }

    const onClick = () => {
        setGoBack(true);
    }
    return (
        <Wrapper onClick={onClick}>
            {goBack && <Navigate to="/" /> }
            <Content  onClick={(e)=>e.stopPropagation()}>

                <div>
                {/* <ProgressiveImage src={urls.regular} placeholder={urls.thumb}>
                    {src => <img width="200px" height="200px"  src={src} alt={alt_description} />}
                </ProgressiveImage> */}
                    <Img src={urls.regular}/>

                </div>
                <div>
                    <a href={downloadUrl}>Donwload</a>
                    {description || alt_description}
                </div>
                <div>
                    <Link to="user">photo</Link>
                    <Link to="collections">nop</Link>
                    <Link to="photo">yep</Link>
                </div>
                <Outlet/>

            </Content>
        </Wrapper>

    )
}

export default Popup
