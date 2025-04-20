import { useQuery, useQueryClient,useMutation } from "@tanstack/react-query"
import { createNote, getAllNotes, removeNote } from "../api/notes"
import { useAuth } from "./useAuth";

type NotePayload = {
    title: string;
    description: string;
    category: string;
  };

const useNotes = () => {
    const { user } = useAuth();
    const queryClient = useQueryClient();
   const {data : notes , isLoading , error } = useQuery({
    queryKey:['notes-key'],
    queryFn:getAllNotes,
    enabled:!!user
   })

   const addNoteMutation = useMutation({
    mutationFn:(note:NotePayload) => createNote(note),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['notes-key']})
    }
   })

   const removeNoteMutation = useMutation({
    mutationFn:(id:string) =>removeNote(id),
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['notes-key']})
    }
   })

   return {
    notes,
    isLoading,
    error,
    addNote:addNoteMutation.mutateAsync,
    removeNote:removeNoteMutation.mutateAsync
   }
}

export default useNotes