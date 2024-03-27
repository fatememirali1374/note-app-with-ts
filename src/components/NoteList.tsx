import { useNotes, useNotesDispatch } from "../context/NotesContext";
import { Note } from "../types/Note";
import { SortBy } from "../types/SortBy";



function NoteList({ sortBy }:{sortBy: SortBy}) {
    const notes = useNotes()
    let sortedNotes = notes;
    if (sortBy === "latest")
        sortedNotes = [...notes].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    if (sortBy === "earliest")
        sortedNotes = [...notes].sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    if (sortBy === "completed")
        sortedNotes = [...notes].sort(
            (a, b) => Number(b.completed) - Number(a.completed))

    return (
        <div className="note-list">
            {sortedNotes.map((note) => (
                <NoteItem key={note.id} note={note} />
            )
            )}
        </div>
    )
}

export default NoteList;


const NoteItem = ({ note }:{note:Note}) => {
    const dispatch = useNotesDispatch()
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }
    return (
        <div className={`note-item ${note.completed ? "completed" : ""}`}>
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.desc}</p>
                </div>
                <div className="actions">
                    <button onClick={() => dispatch({ type: "delete", payload: note.id })}>❌</button>
                    <input type="checkbox" checked={note.completed} value={note.id}
                        onChange={(e) => {
                            const noteId = Number(e.target.value);
                            dispatch({ type: "complete", payload: noteId })
                        }} />
                </div>
            </div>
            <div className="notr-item__footer">
                {new Date(note.createdAt).toLocaleDateString("en-US", options)}
            </div>
        </div>
    )
}