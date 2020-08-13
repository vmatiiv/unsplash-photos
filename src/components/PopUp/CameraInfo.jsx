import React, { useState } from 'react'
import {  useLocation, Navigate } from 'react-router'
import styled from 'styled-components';
import {FaDownload,FaEye} from 'react-icons/fa'

const Wrapper = styled.div`
    position:absolute;
    overflow:hidden;

    top:0;
    z-index:2;
    left:0;
    min-width:100%;
    min-height:100%;
    background-color: rgba(0,0,0,0.4);
`
const Content = styled.div`
    position:absolute;
    border-radius:10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:#fff;
    margin: 0 auto;
    padding:1rem;
    height:auto;
    width:100%;
    max-width:580px;

`
const Grid = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const  FlexCell = styled.div`
    flex-basis:160px;
    flex-grow:1;
    padding:0.5rem;
` 
function CameraInfo() {
    const [goBack,setGoBack] = useState(false);

    const onClick = () => {
        setGoBack(true);
    }
    

    const {state} = useLocation()
    const date = new Date(state.published);
    const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <Wrapper onClick={onClick}>
            {goBack && <Navigate to="../" /> }

            <Content onClick={(e)=>e.stopPropagation()}>
                <h1>Info</h1>
                <p>Published on: {`${mL[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
                <Grid count='2'>
                    <Views icon={<FaDownload/>} title="Downloads" numb={state.downloads}/>
                    <Views icon={<FaEye/>} title="Views" numb={state.views}/>
                </Grid>
                <hr/>
                <Grid count="3">
                    <CameraProp title="Camera Make" value={state.camera.make}/>
                    <CameraProp title="Camera Model" value={state.camera.model}/>
                    <CameraProp title="Focal Length" value={state.camera.focal_length}/>
                    <CameraProp title="Aperture" value={state.camera.aperture}/>
                    <CameraProp title="Shutter Speed" value={state.camera.exposure_time}/>
                    <CameraProp title="ISO" value={state.camera.iso}/>
                    <CameraProp title="Dimension" value={`${state.width}x${state.height}`}/>

                </Grid>

            </Content>

        </Wrapper>

    )
}



const Views = ({icon,title,numb}) => {
    return <FlexCell>
        {icon}
        <p>{title}</p>
        <p>{numb }</p>
    </FlexCell>
}

const CameraProp = ({title,value}) =>{
    return <FlexCell>
        <h3>{title}</h3>
        <p>{value || '--'}</p>
    </FlexCell>
}

export default CameraInfo
