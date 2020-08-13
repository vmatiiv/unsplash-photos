import React from 'react'
import loader from '../../img/loader.svg'
import { Center } from '../../styles'
function Loader() {
    return (
        <Center>
            <img src={loader} alt="loader"/>
        </Center>
    )
}

export default Loader
