import AddNoteForm from "../components/Notes/AddNoteForm/AddNoteForm"
import { fireEvent, render,screen } from "../test-utils"
import userEvent from "@testing-library/user-event";

describe("AddNoteForm", () => {
    it("should render inputs and button", () => {
        render(<AddNoteForm />)

        expect(screen.getByPlaceholderText(/wpisz tytuł notatki.../i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/wpisz notatkę/i)).toBeInTheDocument();
        expect(screen.getByText(/dodaj notat/i)).toBeInTheDocument();
    })

    it("update inputs and select value on user interaction", () => {
        render(<AddNoteForm />)

        const inputTitle = screen.getByPlaceholderText(/wpisz tytuł notatki.../i);
        const inputContent = screen.getByPlaceholderText(/wpisz notatkę/i);
        const selectCategory = screen.getByRole("combobox");
        
        fireEvent.change(inputTitle, {target:{value:"Test title"}});
        fireEvent.change(inputContent, {target:{value:"Test Content"}});
        fireEvent.change(selectCategory, {target:{value:"Rozrywka"}});

        expect(inputTitle).toHaveValue("Test title");
        expect(inputContent).toHaveValue("Test Content");
        expect(selectCategory).toHaveValue("Rozrywka");
    })

    it("reset value inputs if button is clicked", async () => {
        render(<AddNoteForm />)

        const inputTitle = screen.getByPlaceholderText(/wpisz tytuł notatki.../i);
        const inputContent = screen.getByPlaceholderText(/wpisz notatkę/i);
        const selectCategory = screen.getByRole("combobox");
        const button = screen.getByText(/dodaj notatk/i);
        
        fireEvent.change(inputTitle, {target:{value:"Test title"}});
        fireEvent.change(inputContent, {target:{value:"Test Content"}});
        fireEvent.change(selectCategory, {target:{value:"Rozrywka"}});
        await userEvent.click(button);

        expect(inputTitle).toHaveValue("")
    })
})