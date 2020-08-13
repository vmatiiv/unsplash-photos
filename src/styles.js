import styled, { css } from 'styled-components'
export const Center = styled.div`
    width:100%;
    height:100%;
    display:grid;
    place-items:center;
`
export const Round = css`
    border-radius:50%;
`
export const Location = styled.span`
    color:grey;
    padding-right:1rem;
    padding-bottom:1rem;
    display:flex;
    align-items:center;
    text-decoration:underline;
    &:hover{
        color:black;
    }
    & a {
        color:grey;
    }
    & a:hover{
        color:black;
    }
`
export const Img = styled.img`
    height:100%;
    max-width:100%;
    width:auto;
    /* width:%; */
    border-radius:${props => props.round && '50%'};
    z-index:1;
`