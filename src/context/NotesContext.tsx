import { ReactNode, createContext, useContext, useReducer } from "react";
import { Note } from "../types/Note";

type Action= {type: "add"; payload: Note} |
{type: "delete"; payload: number} |
{type: "complete"; payload: number} 

type NotesContextType= Note[]
type NotesDispatchContextType=React.Dispatch<Action>
const NotesContext = createContext( {} as NotesContextType);
const NotesDispatchContext = createContext({} as NotesDispatchContextType)


const notesReducer = (notes:Note[], { type, payload }:Action) => {
  switch (type) {
    case "add": {
      return [...notes, payload]
    }
    case "delete": {
      return notes.filter((n) => n.id !== payload)
    }
    case "complete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note)

    }
    default:
      throw new Error("unknown Error" + type)
  }
}
export function NotesProvider({ children }:{children: ReactNode}) {
  const [notes, dispatch] = useReducer(notesReducer, [])
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>)
}

export function useNotes() {
  return useContext(NotesContext)
}
export function useNotesDispatch() {
  return useContext(NotesDispatchContext)
}