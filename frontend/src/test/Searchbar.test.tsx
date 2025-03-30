import SearchBar from "../components/Searchbar/Searchbar"
import { fireEvent, screen } from "@testing-library/react"
import { expect } from "vitest"
import { render } from "../test-utils"


describe("Searchbar component", ()=>{
    it("should render input and select", () => {
        render(<SearchBar />)
        expect(screen.getByPlaceholderText(/wyszukaj notatkę/i)).toBeInTheDocument();
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    })
    it("update input and select value on user interaction", ()=> {
        render(<SearchBar />)

        const searchInput = screen.getByPlaceholderText(/wyszukaj notatkę/i);
        const selectCategory = screen.getByRole("combobox");

        fireEvent.change(searchInput, {target: { value:"notatka" }});
        fireEvent.change(selectCategory, {target: { value:"Rozrywka"}});

        expect(searchInput).toHaveValue("notatka");
        expect(selectCategory).toHaveValue("Rozrywka");
    })
})