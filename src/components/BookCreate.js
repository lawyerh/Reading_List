import { useState} from "react";
import useGoogleContext from "../hooks/useGoogleContext";
// TODO handle empty request
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
            <button onClick={handleClick} className={`btn ${active ? "create__closed" : "create__open"}`}>{active ? "Hide Window" : "Search Google Books"}</button>
            <p className="create__heading">Search for any title to add to your reading list!</p>
            <form onSubmit={handleSubmit} className="create__form">
                <input value={query} onChange={handleChange} required className="create__input" />
                <button className="btn create__button">
                    Add Book
                </button>
            </form>
        </div>
    )
}

export default BookCreate;