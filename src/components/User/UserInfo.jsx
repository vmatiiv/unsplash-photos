import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Img, Location } from '../../styles';
import { FaMapMarkerAlt ,FaGlobeAmericas} from 'react-icons/fa';

const Wrapper = styled.div`
    width:100%;
    margin:1rem;
    display:flex;
    justify-content:center;
    height:100%;
    @media (max-width:768px){
        justify-content:flex-start;
    }

`
const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 2fr;
    @media (max-width:768px){
        grid-template-columns:1fr;
        grid-template-rows:1fr 1fr;
    }
`
const Bio = styled.div`
    overflow-wrap: break-word;
    white-space:pre-line;
    width:70%;
`

const ImagePosition = styled.div`
    display:flex;
    @media (min-width:768px){
        justify-content:flex-end;
        margin-right:1rem;
        align-items:center;
    }
`
const Links = styled.div`
    display:flex;
    flex-wrap:wrap;
`
function UserInfo({user={}}) {
    return (
    <Wrapper> 
        <Container>
            <ImagePosition>
                <Img round src={user.profile_image.large} alt='profile'/>
            </ImagePosition>
            <div>
                <h1>{user.name}</h1>
                <Links>
                    {user.location &&
                        <Link to={`/search/${user.location}`}>
                            <Location>
                                <FaMapMarkerAlt/>
                                <span style={{paddingLeft:"0.5rem"}}>
                                    {user.location}
                                </span>
                            </Location>
                        </Link>
                    }

                    {user.portfolio_url && 
                        <Location>
                            <FaGlobeAmericas/>
                            <a href={user.portfolio_url} rel="noopener noreferrer" target='_blank' style={{paddingLeft:"0.5rem"}}>
                                {user.portfolio_url.replace(/(^\w+:\/\/www.|^\w+:\/\/)/,'')}
                            </a>
                        </Location>
                    }
                </Links>
                <Bio>
                    {user.bio}
                </Bio>
            </div>
        </Container>
    </Wrapper>)
}

export default UserInfo
