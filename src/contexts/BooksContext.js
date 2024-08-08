import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([])

    // Don't want to type this over and over
    const api = "http://localhost:3001/books/";

     // Fetches all book records
     const fetchBooks = async () => {
        const response = await axios.get(api);

        setBooks(response.data);
    }

    const newBook = async (bookTitle) => {

        const response = await axios.post(api, {
            title: bookTitle
        })

        setBooks([
            ...books,
            response.data
        ]);

    }

    const editBook = async (newTitle, id) => {
    
        const response = await axios.put(api + id.toString(), {
            title: newTitle
        });


        const newBooks = books.map((book) => {
            if(book.id === id) return {...book, ...response.data};
            return book;
        })

        setBooks(newBooks)
        
    }

    const deleteBook = async (id) => {
        await axios.delete(api + id.toString())

        setBooks(books.filter((book) => book.id !== id))
    }

    const payload = {
        books,
        fetchBooks,
        newBook,
        editBook,
        deleteBook
    };
    console.log(children)

    // Called after first render, never called again
    useEffect(() => {
        fetchBooks();
    }, []) // adding a variable to this array would cause a rerender if that variable changes

    return (
            <BooksContext.Provider value={payload}>
                {children}
            </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;