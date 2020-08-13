import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import { Img } from '../../styles'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'

const Logo = styled.img`
    /* width:100%; */
    max-width:32px;
    max-height:32px;
`

const SearchBarDiv = styled.div`
    height:100%;
    width:70%;
    margin:1rem;
    position: relative;
    display: flex;
    justify-content:flex-start;
    align-items:center;

`
const Input = styled.input`
    height:32px;
    border: 0px solid black;
    border-radius:0 20px 20px 0;
    outline: none;
    background-color: #eee;
    &:focus{
        background-color: #fff;
        border:1px solid black;
        border-left:none;
    }
`
const Search = styled.button`
    border-radius:20px 0 0 20px;
    outline: none;
    border:none;
    color:grey;
    text-align:center;

`
const Form = styled.form`
    padding-left:3rem;
    width:70%;
`


function SearchBar({handleSubmit}) {
    const [query,setQuery] = useState(null)
    const handleInputChange = (e) =>{
        setQuery(e.target.value)
    }
    const onSubmit = (e) => {
        handleSubmit(e,query)
        e.target.firstChild.blur()
    }
    return (

        <SearchBarDiv >
            <div >
                <Link to="/">
                    <Logo src={logo} alt='logo'/>
                </Link>
            </div>
            
            <Form onSubmit={onSubmit}>
                <div style={{display:'flex'}}>
                    <Search type="submit">
                        <span style={{padding:'0 1rem'}}>
                            <FaSearch/>
                        </span>
                    </Search>
                    <Input  type="text" placeholder="Search photos" onChange={handleInputChange}></Input>
                </div>
            </Form>
        </SearchBarDiv>
    )
}

export default SearchBar
