import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image';
import { getUserPhotos } from '../../api/unsplash';
import UserInfo from './UserInfo';
import { Routes,Route, Link } from 'react-router-dom';
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
// {history:{location:{state}},history:{goBack}}
function Popup(props) {
    console.log(props)
    // useEffect(()=>{
    //     userPhotos()
    // },[])

    // const userPhotos = async () => {
    //     const response = await getUserPhotos(state.user.username)
    //     return response
    // }
    const onClick = (e) =>{
        console.log(e)
    }
    // const onLoad = (e) => {
    //     console.log(e.target)
    //     e.target.focus();
        

    // }
    return (
        <Wrapper onClick={onClick}>
            <Content  onClick={(e)=>e.stopPropagation()}>
                <div>
                    <Link to="user">halo</Link>
                    <Link to="collections">nop</Link>
                    <Link to="photo">yep</Link>
                </div>
                <Routes>
                    <Route path="user" element={<UserInfo user={"ivan"}/>}/>
                    <Route path="collections" element={<h1>collections</h1>}/>
                    <Route path="photo" element={<h1>photo</h1>}/>
                </Routes>
                {/* <div>
                <ProgressiveImage src={state.urls.regular} placeholder={state.urls.thumb}>
                    {src => <img  src={src} alt={state.alt_description} />}
                </ProgressiveImage>
                </div>
                <div>
                    <button onClick={onClick}>X</button>
                    some info
                </div>
                <UserInfo user={state.user}/> */}

            </Content>
        </Wrapper>

    )
}

export default Popup
