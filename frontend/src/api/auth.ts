import axios from "axios"
import { apiClient } from "./axiosClient";

interface UserCredentials {
    email: string;
    password: string;
    name?: string; // name jest opcjonalne w przypadku loginu
  }
  
  interface ResponseData {
    token: string;
    user: {
      email: string;
      name: string;
      // inne pola, jeśli są zwracane przez API
    };
  }

export const register = async ({email,password,name}:UserCredentials) :Promise<ResponseData> => {
    try {
        const newUser = {
            email,
            password,
            name
        }
        const res = await apiClient.post("/auth/register", newUser)
        return res.data;
    } catch (error) {
         throw error
    }
}

export const login = async ({email,password}:UserCredentials) :Promise<ResponseData> => {
    try {
        const loginUser = {
            email,
            password,
            
        }
        const res = await apiClient.post("/auth/login", loginUser)
        return res.data;
    } catch (error) {
         throw error
    }
}