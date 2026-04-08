// client\src\lib\axios\api.ts
import axios, { AxiosInstance } from "axios";




const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true
})

export default api