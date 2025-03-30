import './App.css'
import {Route, Routes} from "react-router-dom"
import MainTemplate from './components/templates/MainTemplate'
import AddNotePage from './pages/AddNotePage'
import NotePage from './pages/NotesPage'
import * as msw from "msw";
console.log(msw);

function App() {
 
  return (
      
      <MainTemplate>
          <Routes>
            <Route path='/' element={<NotePage />} />
            <Route path='/add-note' element={<AddNotePage />} />
          </Routes>
      </MainTemplate>
       
  )
}

export default App
