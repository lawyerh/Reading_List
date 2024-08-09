import SearchResult from "./SearchResult";
import useGoogleContext from "../hooks/useGoogleContext";
import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function Search() {

    // accessing the search results and ability to clear them
    const {query, clearSearch} = useGoogleContext();
    const {newBook} = useBooksContext();
    const [selected, setSelected] = useState("")

    const handleSelect = (id) => {
        setSelected(id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selected);
        for(let i = 0; i < query.length; i++){
            if(query[i].id === selected) newBook(query[i].volumeInfo);

        }
        clearSearch(); 
    }


    // Map search results to components
    const bookChoices = query.map((book) => {
        return <SearchResult book={book} onSelect={handleSelect} selected={book.id === selected ? true : false} key={book.id} />
    })
    return(
        <div className="search">
            <div className="search__info">
                <p className="search__text">Results for:</p>
                <form onSubmit={handleSubmit}>
                    <button className="btn search__button">Save Book</button>
                </form>
            </div>
            <div className="search__results-container">
                {bookChoices}
            </div>
        </div>
    )
}
export default Search;