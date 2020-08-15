import React, { useEffect, useState } from 'react'
import {getRandomPhoto} from './api/unsplash'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
    background-image:url(${props => props.url});
    height:100vh;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    position:relative;
`
const Overlay = styled.div`
    position:absolute;
    background-color: rgba(0,0,0,0.5);
    color:white;
    display:grid;
    width:100%;
    height:100%;
    place-items:center;
`

const Text = styled.div`
    & p {
        color:white;
        font-weight:bold;
        font-size: 4rem;
        & span{
            font-size:6rem;
        }
        & a{
            color:white;
            text-decoration:underline;
            &:hover{
                color:black;
            }
        }
    }
`
function NotFound() {
    const [image,setImage] = useState(null);
    useEffect(()=>{
        getRandomPhoto().then(x=>setImage(x.data))
    },[])
    if(!image) return null
    return (
        <Wrapper url={image.urls.regular}>
            <Overlay>
                <div>
                    <Text>
                        <p>
                            <span>404</span><br/>
                            It looks like you're lost, better <Link to='/'> go home</Link></p>

                        
                    </Text>
                </div>
            </Overlay>
        </Wrapper>
    )
}

export default NotFound
