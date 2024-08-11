import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([])
    const [targetBook, setTargetBook] = useState({})

    // Don't want to type this over and over
    const api = "http://localhost:3001/books/";

     // Fetches all book records
     const fetchBooks = async () => {
        const response = await axios.get(api);

        setBooks(response.data);
    }

    const newBook = async (book) => {

        const response = await axios.post(api, {
            title: book.title,
            authors: book.authors,
            publisher: book.publisher,
            publishedDate: book.publishedDate,
            description: book.description,
            pageCount: book.pageCount,
            cagetories: book.categories,
            image: (book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "default")
        })
        // TODO some titles don't seem to have a thumbnail. Need to handle error

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

    // Not a DB method. Used to communication which book to display expanded info in BookDisplay

    const updateTargetBook = (id) => {
        setTargetBook(books.find(book => book.id === id))
    }

    const payload = {
        books,
        targetBook,
        fetchBooks,
        newBook,
        editBook,
        deleteBook,
        updateTargetBook
    };

    // Called after first render, never called again
    useEffect(() => {
        fetchBooks();
    }, []) // adding a variable to this array would cause a rerender if that variable changes

    useEffect(() => {
        console.log(targetBook);
    }, [targetBook])
    return (
            <BooksContext.Provider value={payload}>
                {children}
            </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;