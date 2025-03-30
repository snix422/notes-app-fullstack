import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import NoteContext from "../../../context/NoteContext"
import { categories } from "../../../data/mockData"
import { Button, FormWrapper, Input, Select, TextArea } from "./AddNoteForm.style"


interface NoteInputs {
    title:string,
    content:string,
    category:string
}

const AddNoteForm = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<NoteInputs>()

    const {addNote} = useContext(NoteContext)

    const onSubmit : SubmitHandler<NoteInputs> = (data:NoteInputs) => {
        console.log(data);
        const newNote = {
            title:data.title,
            content:data.content,
            category:data.category
        }
        addNote(newNote);
        reset();
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