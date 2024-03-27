import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import AppProviders from "./providers/AppProviders";
import { SortBy } from "./types/SortBy";



function App() {
  // const [notes, setNotes]= useState([])

  const [sortBy, setSortBy] = useState<SortBy>("latest")
  // const handleAddNote = (newNote) => {
  //   // setNotes(prevNotes=>[...prevNotes, newNote])
  //   dispatch({ type: "add", payload: newNote })
  // }
  // const handleDeleteNote = (id) => {
  //   // const filteredNotes= notes.filter((n)=>n.id!==id)
  //   // setNotes(filteredNotes)
  //   // or
  //   // setNotes(prevNotes=>prevNotes.filter((n)=>n.id!==id))
  //   dispatch({ type: "delete", payload: id })
  // }
  // const handleCompleteNote = (e) => {
  //   const noteId = Number(e.target.value)
  //   // const newNotes=notes.map((note)=>
  //   //   note.id===noteId?{...note,completed:!note.completed}:note
  //   // )
  //   // or
  //   // setNotes((prevNotes)=>
  //   // prevNotes.map((note)=>
  //   //  note.id===noteId?{...note,completed:!note.completed}:note)
  //   // )
  //   dispatch({ type: "complete", payload: noteId })
  // }

  return (
    <AppProviders>
      <div className="container">

        <NoteHeader sortBy={sortBy} onSort={(value) => setSortBy(value)} />

        <div className="note-app">
          <AddNewNote />

          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </AppProviders>
  )
}

export default App;
