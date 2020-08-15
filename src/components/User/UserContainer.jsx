import React from 'react'
import UserInfo from './UserInfo'
import { useParams, useLocation } from 'react-router';
import {getUser} from '../../api/unsplash'
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {FaHeart,FaImage,FaRegClone} from 'react-icons/fa'
import SearchBar from '../Navigation/SearchBar';



const Slink = styled(Link)`
    color:grey;
    padding:1rem;
    &:hover{
        color:black;
    }
    ${props => props.active === 'true' && css`
        color:black;
        padding-bottom:0.5rem;
        border-bottom: 4px solid black;
    `}
`

function UserContainer() {
    let {username,} = useParams();
    const location = useLocation();
    const last = location.pathname.split('/') 
    const activeRoute = last[last.length-1];
    const [user,setUser] = useState();
    useEffect(()=>{
        getUser(username).then(x=> setUser(x.data))
    },[])
    return <div> 
    { user && 
        <div>
            <SearchBar/>
                <UserInfo user={user}/>
                <Slink active={ActiveLink('photos',activeRoute)} to="photos"><FaImage/> Photos {user.total_photos}</Slink> 
                <Slink active={ActiveLink('collections',activeRoute)} to="collections"><FaRegClone/>Collections {user.total_collections}</Slink>
                <Slink active={ActiveLink('likes',activeRoute)} to="likes" ><FaHeart/> Likes {user.total_likes}</Slink>
            <hr/>
            <Outlet/>
        </div>
    }
    </div>
}

const ActiveLink = (path,active) => {
    return path===active ? 'true' : 'false'
}

export default UserContainer
