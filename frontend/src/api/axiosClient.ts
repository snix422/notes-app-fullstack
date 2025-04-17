import axios, { AxiosError, InternalAxiosRequestConfig } from "axios"

export const apiClient = axios.create({
    baseURL:"http://localhost:5000/api",
    headers:{
        'Content-Type':'application/json'
    },
    timeout:5000,
})

const requestLogger = (config:InternalAxiosRequestConfig) => {
    console.log(
        `Zapytanie ${config.method?.toUpperCase()} pod ${config.url} zarejestrowano o ${new Date().toISOString()}`
      );
      return config;
}

apiClient.interceptors.request.use(
    requestLogger,
    (error:AxiosError) => {
      return Promise.reject(error);
    }
  );