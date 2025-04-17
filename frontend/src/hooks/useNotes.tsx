import { useQuery, useQueryClient,useMutation } from "@tanstack/react-query"
import { createNote, getAllNotes, removeNote } from "../api/notes"

type NotePayload = {
    title: string;
    description: string;
    category: string;
  };

const useNotes = () => {
    const queryClient = useQueryClient();
   const {data : notes , isLoading , error } = useQuery({
    queryKey:['notes-key'],
    queryFn:getAllNotes
   })

   const addNoteMutation = useMutation({
    mutationFn:(note:NotePayload) => createNote(note),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['notes-key']})
    }
   })

   const removeNoteMutation = useMutation({
    mutationFn:(slug:string) =>removeNote(slug),
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