import axios from 'axios';

const unsplash = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID c17f72f1da2af64d21a59a5ea85d487547a01721df5310a592f4f6949aa68caf'
    }
    
});




export const getPhotos =  (query,perPage=30,pageNum=0)=>{
    return unsplash.get(`/search/photos`,{
        params:{
            query:query,
            per_page:perPage,
            page:pageNum
        }
    }) 
}
export const getAllPhotos = () => {
    return unsplash.get('/photos')
}
export const getUserPhotos = (username) => {
    return unsplash.get(`/users/${username}/photos`)
}

export default unsplash