import Axios from "axios"
import {VUE_APP_API_URL} from "./env";
 
const axios = Axios.create({
    baseURL : VUE_APP_API_URL,
    timeout : 10000,
    credentials: false,
    dataType: 'json',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})

export default axios