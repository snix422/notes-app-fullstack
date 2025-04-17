import { useQuery } from "@tanstack/react-query"
import { getNoteBySlug } from "../api/notes"

const useNote = (slug:string) => {
    const {data : note, isLoading, error} = useQuery({
        queryKey:['note-key'],
        queryFn:() => getNoteBySlug(slug)
    })

    return{
        note,
        isLoading,
        error
    }
}

export default useNote