import { useContext, useEffect } from "react"
import { categories } from "../../data/mockData"
import { SearchbarWrapper, SearchForm, SearchInput, SearchSelect } from "./Searchbar.style"
import NoteContext from "../../context/NoteContext"
import { useForm } from "react-hook-form"
import { useNoteContext } from "../../hooks/useNoteContext"

interface InputsSearchBar {
    query:string,
    selectCategory:string
}

const SearchBar = () => {
    const { filterByCategory, filterByQuery} = useNoteContext();
    const {register,handleSubmit,formState:{errors},reset,watch} = useForm<InputsSearchBar>();
    const query = watch("query","");
    const selectCategory = watch("selectCategory","");


    const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        filterByQuery(event.target.value);
      };
      
    const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        filterByCategory(event.target.value);
      };

    return(
        <SearchbarWrapper>
            <SearchForm>
                <SearchInput {...register("query")} type="text" placeholder="Wyszukaj notatkę..." onChange={onQueryChange} />
                <SearchSelect {...register("selectCategory")} onChange={onCategoryChange} >
                    <option value="">Wszystkie kategorie</option>
                    {categories.map((c:string) => <option value={c}>{c}</option>)}
                </SearchSelect>
            </SearchForm>
        </SearchbarWrapper>
    )
}

export default SearchBar