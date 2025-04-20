import './App.css'
import {Route, Routes} from "react-router-dom"
import MainTemplate from './components/templates/MainTemplate'
import AddNotePage from './pages/AddNotePage'
import NotePage from './pages/NotesPage'
import * as msw from "msw";
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { useAuth } from './hooks/useAuth'
import StartPage from './pages/StartPage'
import UserNotesPage from './pages/UserNotesPage'
console.log(msw);

function App() {

  const {user} = useAuth();
  console.log(user)
 
  return (
      
      <MainTemplate>
          <Routes>
            <Route path='/' element={ user ? <NotePage /> : <StartPage />} />
            <Route path='/add-note' element={<AddNotePage />} /> 
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/user/:name" element={<UserNotesPage />} />
          </Routes>
      </MainTemplate>
       
  )
}

export default App
