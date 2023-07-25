import axios from "axios"


const fetchApi=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    headers:{
        Authorization : "bearer" +import.meta.env
    }
})