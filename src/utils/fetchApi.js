import axios from "axios"
const BASE_URL="https://www.googleapis.com/youtube/v3"
const API_KEY = 'AIzaSyBVZMtN-7b8tsa0dGpYGLuyPQNtT3i-C7Y';

export const fetchApiForYoutubeData = async(enpoints,params ={}) =>{
     try {
        const response = await axios.get(`${BASE_URL}/${enpoints}`,{
            params:{
                ...params,
                key: API_KEY,
            }
        })
        return response.data;
     } catch (error) {
        console.error(error,'error fetching youtube data')
     }
}