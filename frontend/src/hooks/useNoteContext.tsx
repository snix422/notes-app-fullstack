import { createContext, useContext, useEffect, useState } from "react";
import useNotes from "../hooks/useNotes";
import { Note, NotePayload } from "../types/type";

type NoteContextType = {
  filteredNotes: Note[];
  isLoading: boolean;
  error: Error | null;
  filterByQuery: (query: string) => void;
  filterByCategory: (category: string) => void;
  addNote: (note: NotePayload) => Promise<void>;
  removeNote: (id: string) => Promise<void>;
  resetNotes:() => void
};

const NoteContext = createContext<NoteContextType | null>(null);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const { notes = [], isLoading, error, addNote, removeNote } = useNotes();
  const [filteredNotes, setFilteredNotes] = useState<Note[] | null>(null);



  const filterByQuery = (query: string) => {
    if (!query) {
      setFilteredNotes(null);
      return;
    }
    setFilteredNotes(
      notes.filter((note:Note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const filterByCategory = (category: string) => {
    if (!category) {
      setFilteredNotes(null);
      return;
    }
    setFilteredNotes(notes.filter((note:Note) => note.category === category));
  };

  const resetNotes = () => setFilteredNotes([]);

  return (
    <NoteContext.Provider
      value={{
        filteredNotes:  filteredNotes ?? notes,
        isLoading,
        error,
        filterByQuery,
        filterByCategory,
        addNote,
        removeNote,
        resetNotes
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) throw new Error("useNoteContext must be used inside NoteProvider");
  return context;
};