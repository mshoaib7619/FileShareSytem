import axios from 'axios'

// const API_URL = 'http://localhost:8000' //for localhost
const API_URL = 'window.location.origin' //for liveHost

export const uploadFile =async(data)=>{
    try {
        let response = await axios.post(`${API_URL}/upload`,data )
        return response.data
    } catch (error) {
        console.log("Error In calling API", error.message)
    }

}   