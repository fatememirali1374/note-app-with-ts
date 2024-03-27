import { useNotes } from "../context/NotesContext"
import { SortBy } from "../types/SortBy"

type Props={
  sortBy: SortBy;
  onSort:(value: SortBy)=>void;
}

function NoteHeader({ sortBy, onSort }:Props) {
  const notes = useNotes()
  return (
    <div className="note-header"><h1>My Notes <span>({notes.length})</span> </h1>
      <select value={sortBy} onChange={(e)=>onSort(e.target.value as SortBy)}>
        <option value="latest">sort based on latest notes</option>
        <option value="earliest">sort based on earliest notes</option>
        <option value="completed">sort based on completed notes</option></select>
    </div>
  )
}

export default NoteHeader 