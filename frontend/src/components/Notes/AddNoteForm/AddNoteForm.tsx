import { SubmitHandler, useForm } from "react-hook-form"
import { categories } from "../../../data/mockData"
import { Button, FormWrapper, Input, Select, TextArea } from "./AddNoteForm.style"
import useNotes from "../../../hooks/useNotes"
import { useNotify } from "../../../hooks/useNotify"
import { useNavigate } from "react-router-dom"


interface NoteInputs {
    title:string,
    content:string,
    category:string
}

const AddNoteForm = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<NoteInputs>()
    const {dispatchNotify} = useNotify();
    const navigate = useNavigate();
    const { addNote } = useNotes();

    const onSubmit : SubmitHandler<NoteInputs> = async (data:NoteInputs) => {
        console.log(data);
        try {
            const newNote = {
                title:data.title,
                description:data.content,
                category:data.category
            }
            await addNote(newNote);
            dispatchNotify("Notatka dodana pomyślnie");
            navigate("/")
            reset(); 
        } catch (error) {
            dispatchNotify("Wystąpił problem , niestety nie udało się dodać notatki")
            console.log(error);
        }
       
    }

    return(
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Wpisz tytuł notatki..." {...register("title")} />
            <TextArea placeholder="Wpisz notatkę..." {...register("content")} />
            <Select {...register("category")}>
                <option value={""}>Wybierz kategorię</option>
                {categories.map((c:string) => <option value={c}>{c}</option>)}
            </Select>
            <Button type="submit">Dodaj notatkę</Button>
        </FormWrapper>
    )
}

export default AddNoteForm