import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([])
    const [targetBook, setTargetBook] = useState(false)

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
            progress: 0,
            cagetories: book.categories,
            image: (book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "default")
        })

        setBooks([
            ...books,
            response.data
        ]);

    }

    const editBookProgressByID = async (id, newProgress) => {
        let newTargetBook = {...targetBook}
        newTargetBook.progress = Number(newProgress);
    
        const response = await axios.put(api + id.toString(), newTargetBook).then((response) => {
            const newBooks = books.map((book) => {
                if(book.id === id) {
                    setTargetBook({...book});
                    return {...book, ...response.data};
                }
                return book;
            });
            // console.log(newBooks);
            setBooks(newBooks);
        });

        
        
        
    }

    const deleteBook = async (id) => {
        await axios.delete(api + id.toString())

        setBooks(books.filter((book) => book.id !== id))
    }

    // Not a DB method. Used to communicate which book to display expanded info in BookDisplay

    const updateTargetBook = (id) => {
        // let target = books.find(book => book.id === id)
        // setTargetBook({...target});
        if(!id) setTargetBook({})
        console.log(books)
        setTargetBook(books.find(book => book.id === id))
    }

    const payload = {
        books,
        targetBook,
        fetchBooks,
        newBook,
        editBookProgressByID,
        deleteBook,
        updateTargetBook
    };

    // Called after first render, never called again
    useEffect(() => {
        fetchBooks();
    }, []) // adding a variable to this array would cause a rerender if that variable changes

    useEffect(() => {
        if(targetBook.id && books.length) updateTargetBook(targetBook.id)
            else setTargetBook(false)
    },[books])
    return (
            <BooksContext.Provider value={payload}>
                {children}
            </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;