import './App.css'
import {Route, Routes} from "react-router-dom"
import MainTemplate from './components/templates/MainTemplate'
import AddNotePage from './pages/AddNotePage'
import NotePage from './pages/NotesPage'
import * as msw from "msw";
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
console.log(msw);

function App() {
 
  return (
      
      <MainTemplate>
          <Routes>
            <Route path='/' element={<NotePage />} />
            <Route path='/add-note' element={<AddNotePage />} /> 
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
      </MainTemplate>
       
  )
}

export default App
