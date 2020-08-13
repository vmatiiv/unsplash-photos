import React from 'react'
import styled from 'styled-components'

import { Navigate, Link, Outlet   } from 'react-router-dom';
import { useState } from 'react';
import  {FaDownload,FaInfoCircle,FaArrowLeft,FaMapMarkerAlt} from 'react-icons/fa'
import { Location } from '../../styles';
import Loader from '../common/Loader';
const Wrapper = styled.div`
    position:absolute;
    top:0;
    overflow:hidden;

    z-index:2;
    left:0;
    min-width:100%;
    min-height:100%;
    background-color: rgba(0,0,0,0.5);
`
const Content = styled.div`
    position:absolute;
    overflow:hidden;

    top:0;
    right:0;
    background-color:#fff;
    margin: 0 auto;
    padding:1rem;
    height:100vh;
    width:100%;
    height:100%;
    @media (min-width:768px){
        width:80%;
    }

`

const Img = styled.img`
    /* height:100%; */
    max-height:80vh;
    max-width:100%;
    border-radius:${props => props.round && '50%'};
`
const Back = styled.button`
    @media (min-width:900px){
        display:none;
    }
`
const Section = styled.section`
    display:flex;
    align-items:center;
    justify-content:${props => props.justify};
    margin: ${props => props.margin};
`
const Grow = styled.div`
    flex-grow:1;
    display:flex;
    justify-content:${props => props.justify};
`
const Column = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:space-between;
`
const Popup = React.memo(({photo,loading}) => {
    const [goBack,setGoBack] = useState(false);

    const onClick = () => {
        setGoBack(true);
    }
    const cameraInfo = {to:"info",state:{
        views:photo.views,
        camera:photo.exif,
        width:photo.width,
        height:photo.height,
        downloads:photo.downloads,
        published:photo.created_at,
    }}
    return (
        <Wrapper id="popUp" onClick={onClick}>
            {goBack && <Navigate to="../../" /> }
            <Content onClick={(e)=>e.stopPropagation()}>
                <Outlet/>

                {loading ? <Loader/> : <>
                <Column> 
                    <Section justify='space-between' margin="0 1rem">
                        <Link to={`/user/${photo.user.username}/photos`}>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <Img round src={photo.user.profile_image.medium}/>
                                <h2 > {photo.user.name}</h2>

                            </div>
                        </Link>
                        <Back onClick={onClick}><FaArrowLeft/></Back>

                    </Section> 

                    <Section justify='center' margin='1rem'>
                        <Img src={photo.urls.regular}/>
                    </Section>
                    <Section justify='space-between' margin="0 1rem">
                        <Grow>
                            {photo.location.title && 
                                <Link to={`/search/${photo.location.title}`}>
                                        <Location >
                                            <FaMapMarkerAlt/>
                                            <span style={{paddingLeft:'0.5rem'}}>
                                                {photo.location.title}
                                            </span>
                                        </Location>
                                </Link>
                            }<br/>
                            <p>{photo.description}</p>
                        </Grow>
                        <Grow justify='flex-end'>
                            <a href={photo.links.download+'?force=true'}><FaDownload/></a>
                            <Link {...cameraInfo} style={{paddingLeft:"1rem"}}>
                                <FaInfoCircle/>
                            </Link>
                        </Grow>
                    </Section>

                </Column>
                </>}
            </Content>
        </Wrapper>

    )
})

export default Popup
