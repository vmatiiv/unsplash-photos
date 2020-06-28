import axios from 'axios';

const unsplash = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID c17f72f1da2af64d21a59a5ea85d487547a01721df5310a592f4f6949aa68caf'
    }
    
});




export const getPhotos =  (query,pageNum=0)=>{
    return unsplash.get(`/search/photos`,{
        params:{
            query:query,
            page:pageNum,
        }
    }) 
}

export const getPhoto = (id) => {
    return unsplash.get(`/photos/${id}`)
}

export const getAllPhotos = (pageNum=0) => {
    return unsplash.get('/photos',{
        params:{
            page:pageNum,
        }
    })
}
export const getUserPhotos = (username) => {
    return unsplash.get(`/users/${username}/photos`)
}

export default unsplash