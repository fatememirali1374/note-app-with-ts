import { ReactNode } from "react";
import { NotesProvider } from "../context/NotesContext.js";

type Props={
  children:ReactNode;
}

export default function AppProviders({ children } :Props) {
  return <NotesProvider>{children}</NotesProvider>;
}
