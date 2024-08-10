import { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";
import useGoogleContext from "../hooks/useGoogleContext";

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
        // Input needs validation
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