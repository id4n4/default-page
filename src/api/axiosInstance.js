import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${window.localStorage.getItem('token')}`
  }
  return config
})
