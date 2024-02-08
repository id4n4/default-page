import axios, { type InternalAxiosRequestConfig } from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  const token: string | null = window.localStorage.getItem('token')
  if (token !== null) {
    // Si hay un token, añadirlo a las cabeceras
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
