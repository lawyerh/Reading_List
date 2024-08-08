// Context for reaching out to Google Books API

import { createContext, useState } from "react";
import axios from "axios";

const GoogleContext = createContext()

function GoogleBooksProvider({children}) {
    const [query, setQuery] = useState([])

    const api = `https://www.googleapis.com/books/v1/`

    const bookSearchByTitle = async (term) => {
        // replaces empty spaces with + 
        // /char/g looks for all matches of char in string
        const urlTerm = term.replace(/ /g, "+");
        const response = await axios.get(`${api}volumes?q=${urlTerm}`,{
            headers: {
                Authorization: 'AIzaSyCYfQrnoBc71HlxoeY8VIBz9B9_CBCR33o'
            }
        })
        console.log(response);

        setQuery(response.data.items)
    }

    // Giving components the ability to clear the search results
    // Used to hide boopk selection window
    const clearSearch = () => {
        setQuery([]);
    }


    const payload = {
        query,
        bookSearchByTitle,
        clearSearch
    }

    return (
        <GoogleContext.Provider value={payload}>
            {children}
        </GoogleContext.Provider>
    )
}

export {GoogleContext, GoogleBooksProvider};
