import {createContext, ReactNode, useEffect, useState } from "react";
import { CreateNote, Note } from "../types/type";
import { v4 } from 'uuid';


interface NoteContextTYpe {
    visibleNotes: Note[]
    addNote: (note:CreateNote) => void
    removeNote:(id:string) => void
    findNotesByQuery:(query:string) => void
    findNotesByCategory:(category:string) => void
}

const initialState : NoteContextTYpe = {
    visibleNotes:[],
    addNote: (note:CreateNote) => {},
    removeNote: (id:string) =>{},
    findNotesByQuery:(query:string) => {},
    findNotesByCategory:(category:string) =>{}
}

const NoteContext = createContext<NoteContextTYpe>(initialState);

interface NoteContextProviderType {
    children: ReactNode
}


export const NoteContextProvider = ({children}:NoteContextProviderType) => {
    const [notes,setNotes] = useState<Note[]>([]);
    const [visibleNotes, setVisibleNotes] = useState<Note[]>([])

    useEffect(()=>{
        setVisibleNotes(notes);
    },[notes])


    const addNote = (note:CreateNote) => {

        const newNote = {
            id: v4(),
            title:note.title,
            content:note.content,
            category:note.category
        }

        setNotes([newNote,...notes])
    }

    const removeNote = (id:string) => {
        const filteredNotes = notes.filter((note:Note) => note.id !== id);

        setNotes(filteredNotes);
    }

    const findNotesByQuery = (query:string) => {
        if(!query) return

        const filteredNotes = notes.filter((note:Note) => note.title.toLowerCase().includes(query.toLowerCase()));

        setVisibleNotes(filteredNotes)
    }

    const findNotesByCategory = (category:string) => {

        if(category === ""){
            setVisibleNotes(notes);
            return
        }
        const filteredNotes = notes.filter((note:Note) => note.category == category);

        setVisibleNotes(filteredNotes);
    }

    return(
        <NoteContext.Provider value={{visibleNotes,addNote,removeNote,findNotesByQuery,findNotesByCategory}}>
            {children}
        </NoteContext.Provider>
    )
      
}


export default NoteContext


