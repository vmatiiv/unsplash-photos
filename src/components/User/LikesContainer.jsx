import React from 'react'
import { useParams } from 'react-router';
import Photos from '../common/Photos';

function LikesContainer() {
  const {username} = useParams();
  const endpoint = `/users/${username}/likes`

  return (
    <Photos endpoint={endpoint} />
  )
}

export default LikesContainer
