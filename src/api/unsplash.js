import axios from 'axios';
const unsplash = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ID}` 
    }    
});



export const fetchData = (endpoint,params=null) => {
    return unsplash.get(`${endpoint}`,{
        params:{
            ...params
        }
    })
}
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
export const getRandomPhoto = () => {
    return unsplash.get(`/photos/random`)
}
export const getAllPhotos = (pageNum=0) => {
    return unsplash.get('/photos',{
        params:{
            page:pageNum,
        }
    })
}
export const getUserPhotos = (username,pageNum=0) => {
    return unsplash.get(`/users/${username}/photos`,{
        params:{
            page:pageNum
        }
    })
}
export const getUser = (username) => {
    return unsplash.get(`/users/${username}`)
}
export const getUserCollections = (username,page) => {
    return unsplash.get(`/users/${username}/collections`,{
        params:{
            page,
            per_page:9
        }
    })
}

export const getCollectionPhotos = (id) => {
    return unsplash.get(`/collections/${id}/photos`)
}
export default unsplash