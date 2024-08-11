// Context for reaching out to Google Books API

import { createContext, useState } from "react";
import axios from "axios";

const GoogleContext = createContext()

function GoogleBooksProvider({children}) {
    const [query, setQuery] = useState([])

    const api = `${process.env.REACT_APP_GOOGLE_API_BASE}`;

    const bookSearchByTitle = async (term) => {
        // replaces empty spaces with + 
        // /char/g looks for all matches of char in string
        const urlTerm = term.replace(/ /g, "+");
        const response = await axios.get(`${api}volumes?q=${urlTerm}`,{
            headers: {
                Authorization: `${process.env.REACT_APP_GOOGLE_API_KEY}`
            }
        })
        console.log(response.data)
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


