import { NotesProvider } from "../context/NotesContext.jsx";



export default function AppProviders({ children }) {
  return <NotesProvider>{children}</NotesProvider>;
}
