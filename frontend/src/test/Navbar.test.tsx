import Navbar from "../components/Navbar/Navbar"
import { render,screen } from "../test-utils"

describe("Navbar",()=>{
    it("should render links", () => {
        render(<Navbar />)

        expect(screen.getByText(/twoje notatki/i)).toBeInTheDocument();
        expect(screen.getByText(/Dodaj notatkę/i)).toBeInTheDocument();
    })
})