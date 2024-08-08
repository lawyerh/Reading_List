import { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";
import useGoogleContext from "../hooks/useGoogleContext";

function BookCreate(){
    // LOCAL STATE
    const [query, setQuery] = useState("")

    // APP STATE
    const {bookSearchByTitle} = useGoogleContext();

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        bookSearchByTitle(query);
        setQuery('');
    }
    return(
        <div className="create">
            <h2 className="create__heading">Enter a book title to</h2>
            <form onSubmit={handleSubmit} className="create__form">
                <input value={query} onChange={handleChange} className="create__input" />
                <button className="create__button">
                    Add Book
                </button>
            </form>
        </div>
    )
}

export default BookCreate;