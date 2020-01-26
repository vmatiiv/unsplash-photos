import axios from 'axios';

const unsplash = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID c17f72f1da2af64d21a59a5ea85d487547a01721df5310a592f4f6949aa68caf'
    }
    
});


export default unsplash