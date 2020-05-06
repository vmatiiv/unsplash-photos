import React from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image';
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
function Popup({history:{location:{state}},history:{goBack}}) {
    const onClick = (e) =>{
        
        goBack();

    }
    const onLoad = (e) => {
        console.log(e.target)
        e.target.focus();
        

    }
    return (
        <Wrapper onClick={onClick}>
            <Content  onClick={(e)=>e.stopPropagation()}>
                <div>
                <ProgressiveImage src={state.urls.regular} placeholder={state.urls.thumb}>
                    {src => <img  src={src} alt={state.alt_description} />}
                </ProgressiveImage>
                </div>
                <div>
                    <button onClick={onClick}>X</button>
                    some info
                </div>
            </Content>
        </Wrapper>
    )
}

export default Popup
