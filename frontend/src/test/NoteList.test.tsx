import { ScrollRestoration } from "react-router-dom";
import NotesList from "../components/Notes/NotesList"
import { render,screen } from "../test-utils"
import { Note } from "../types/type";
import userEvent from "@testing-library/user-event";

const mockNotes: Note[] = [
    { id: 'sd2313asdsa2d', title: "First Note", content: "This is the first note", category:"Rozrywka" },
    { id: '2312asedasd12321', title: "Second Note", content: "This is the second note",category:"Praca" },
  ];

describe("NoteList Component", () => {
    it("render the correct number of NoteItem component", () => {
        render(<NotesList notes={mockNotes} removeNote={vi.fn()} />)

        expect(screen.getAllByTestId("Note-Item")).toHaveLength(mockNotes.length);
        
        expect(screen.getByText(/first note/i)).toBeInTheDocument();
        expect(screen.getByText(/second note/i)).toBeInTheDocument();
    })

    it("renders empty state when there are no notes", () => {
        render(<NotesList notes={[]} removeNote={vi.fn()} />)

        expect(screen.queryAllByTestId("Note-Item")).toHaveLength(0)
    })

    it("delete item from list when button delete is clicked", async () => {
        const removeNoteMock = vi.fn();
        render(<NotesList notes={mockNotes} removeNote={removeNoteMock} />)

        const deleteButtons = screen.getAllByText(/delete/i);

        await userEvent.click(deleteButtons[0]);
        expect(removeNoteMock).toHaveBeenCalledTimes(1);
        expect(removeNoteMock).toHaveBeenCalledWith(mockNotes[0].id)
    })
})