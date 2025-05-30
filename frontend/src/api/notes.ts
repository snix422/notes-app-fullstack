import { apiClient } from "./axiosClient"

export const getAllNotes = async () => {
    try {
        const res = await apiClient.get("/notes");
        return res.data;
    } catch (error) {
      throw error  
    }
}

export const getUserNotesByName = async (name:string) => {
    try {
        const res = await apiClient.get(`/notes/user/${name}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const getNoteBySlug = async (slug:string) => {
    try {
        const res = await apiClient.get(`/notes/${slug}`);
        return res.data;
    } catch (error) {
        throw error
    }
}

export const createNote = async ({title,description,category}:{title:string,description:string,category:string}) => {
    try {
        const newNote = {
            title,
            description,
            category
        }
        const res = await apiClient.post('/notes', newNote);
        return res.data
    } catch (error) {
        throw error
    }
}

export const removeNote = async (id:string) => {
    try {
        const res = await apiClient.delete(`/notes/${id}`);
        return res.data
    } catch (error) {
        throw error
    }
}