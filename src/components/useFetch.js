import {useState,useEffect, useMemo, useReducer} from 'react'
import {fetchData} from '../api/unsplash'


const initialState = {
    hasError:false,
    hasMore:true,
    items:[],
    loading:true,
};
const reducer = (state, {action,payload}) => {
  switch (action) {
    case 'HASMORE': return {...state,hasMore:payload,loading:false}
    case 'HASERROR': return {...state,hasError:payload}
    case 'LOADING': return {...state,loading:payload}
    case 'LOADED': return {...state,items:payload,loading:false}
    default: throw new Error('Unexpected action');
  }
};

const useFetch = (endpoint,{page,query})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        fetchData(endpoint,{page,query})
        .then(res => {
            if(res.data.results){
                if(res.data.results.length<10){
                    dispatch({action:'HASMORE',payload:false})
                }
                if(res.data.results.length === 0){
                    dispatch({action:'HASERROR',payload:true})
                }
                dispatch({action:"LOADED",payload:res.data.results})
            }else{
                if(res.data.length === 0){
                    dispatch({action:'HASMORE',payload:false})
                }else{
                    dispatch({action:"LOADED",payload:res.data})
                }
            }
        })
        .catch(err => console.log(err))
    },[endpoint,page,query])
    return state
}


export default useFetch
