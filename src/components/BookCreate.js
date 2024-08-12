import { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";
import useGoogleContext from "../hooks/useGoogleContext";
// TODO handle empty request
// TODO button open and close is not semantic
function BookCreate(){
    // LOCAL STATE
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(false);

    // APP STATE
    const {bookSearchByTitle} = useGoogleContext();

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleClick = () => {
        setActive(!active)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        bookSearchByTitle(query);
        setQuery('');
    }
    return(
        // TODO Input needs validation
        <div className={`create${active ? " create__active" : ""}`}>
            <button onClick={handleClick} className="btn create__heading">Search Google Books</button>
            <form onSubmit={handleSubmit} className="create__form">
                <input value={query} onChange={handleChange} className="create__input" />
                <button className="btn create__button">
                    Add Book
                </button>
            </form>
        </div>
    )
}

export default BookCreate;