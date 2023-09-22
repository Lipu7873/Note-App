import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
// import dummyNotes from './components/dummy_notes';




function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))||[])
  console.log(notes);

  useEffect(() =>{
        localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])


  return (
    <div className="App" id='app'>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Notes notes={notes}/>} />
              <Route path='/create-note' element={<CreateNote setNotes={setNotes}/>} />
              <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes}/>} />
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
