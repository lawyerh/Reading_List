import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";

function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;