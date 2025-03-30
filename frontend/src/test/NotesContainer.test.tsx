import NotesContainer from "../components/Notes/NotesContainer/NotesContainer"
import { render,screen } from "../test-utils"

describe("NotesContainer", () => {
    it("should render heading title", () => {
        render(<NotesContainer />)
        
        expect(screen.getByText(/twoje notatki/i));
    })
})